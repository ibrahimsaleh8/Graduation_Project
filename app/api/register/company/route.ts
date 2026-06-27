import { InitialUserDetailsDataType } from "@/hooks/useInitializeUserData";
import { CreateCompanyInput } from "@/validations/RegisterValidationSchema";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const registerBody = (await request.json()) as CreateCompanyInput;

    const registerReq = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Auth/register/company`,
      {
        body: JSON.stringify(registerBody),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await registerReq.json();
    if (!registerReq.ok) {
      if (registerReq.status == 400) {
        return NextResponse.json(
          {
            message: data.errors[0],
          },
          {
            status: registerReq.status,
          },
        );
      } else {
        return NextResponse.json(
          {
            message: "Something went wrong",
          },
          {
            status: registerReq.status,
          },
        );
      }
    }

    let userData: InitialUserDetailsDataType | null = null;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Auth/user-details`,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      },
    );

    if (!res.ok) {
      const response = NextResponse.json(
        {
          message: "Please login again",
          data: {
            isSuccess: false,
            userData: null,
          },
        },
        {
          status: 401,
        },
      );

      response.cookies.delete("token");

      return response;
    }

    userData = await res.json();
    const responseData = {
      userId: userData?.userId,
      email: userData?.email,
      role: userData?.roles[0],
      photoUrl: userData?.photoUrl,
    };

    const cookieStore = await cookies();
    cookieStore.set("token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return NextResponse.json({
      message: "Register has been Success",
      data: responseData,
    });
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
