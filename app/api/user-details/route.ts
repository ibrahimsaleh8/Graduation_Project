import { InitialUserDetailsDataType } from "@/hooks/useInitializeUserData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    let userData: InitialUserDetailsDataType | null = null;

    const token = request.cookies.get("token");

    if (token) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Auth/user-details`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
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

      return NextResponse.json({
        message: "User Data fetched Suceess",
        data: {
          isSuccess: true,
          userData,
        },
      });
    }

    return NextResponse.json({
      message: "No token exist",
      data: {
        isSuccess: false,
        userData: null,
      },
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
