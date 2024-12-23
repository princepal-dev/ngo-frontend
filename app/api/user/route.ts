import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, name, email } = body;

  if (!id) {
    return NextResponse.json(
      { message: "Update unsuccessful." },
      { status: 404 },
    );
  }

  const data: { name?: string; email?: string } = {};
  if (name) data.name = name;
  if (email) data.email = email;

  if (Object.keys(data).length === 0) {
    return NextResponse.json(
      { message: "Update unsuccessful." },
      { status: 404 },
    );
  }

  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });

    return NextResponse.json(
      { message: "Update success.", user },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
