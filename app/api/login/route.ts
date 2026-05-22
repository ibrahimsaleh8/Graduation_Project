import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const requBody = (await request.json()) as {
      email: string;
      password: string;
    };

    const loginReq = await fetch(`${process.env.BACKEND_URL}/api/Auth/login`, {
      body: JSON.stringify(requBody),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await loginReq.json();

    if (!loginReq.ok) {
      if (loginReq.status == 400) {
        return NextResponse.json(
          {
            message: data.errors[0],
          },
          {
            status: loginReq.status,
          },
        );
      } else if (loginReq.status == 401) {
        return NextResponse.json(
          {
            message: data.error,
          },
          {
            status: loginReq.status,
          },
        );
      } else {
        return NextResponse.json(
          {
            message: "Something went wrong",
          },
          {
            status: loginReq.status,
          },
        );
      }
    }
    const responseData = {
      userId: data.userId,
      email: data.email,
      role: data.roles[0],
    };

    const cookieStore = await cookies();
    cookieStore.set("token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ message: "Login Success", data: responseData });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
