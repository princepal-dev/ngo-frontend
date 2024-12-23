import { auth } from "@/auth";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import { PrismaClient } from "@prisma/client";
import { Overview } from "@/components/Overview";
import { RecentUsers } from "@/components/RecentUsers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

const ADMIN_EMAILS = [
  "ujjawal8076@gmail.com",
  "rishabpal2000@gmail.com",
  "anjali8129@gmail.com",
  "arthbhardwaj1234@gmail.com",
  "bhardwaj.avni20396@gmail.com",
];

const prisma = new PrismaClient();

async function getUserData() {
  const currentYear = new Date().getFullYear();
  const startOfYear = new Date(currentYear, 0, 1);
  const endOfYear = new Date(currentYear, 11, 31);

  const userData = await prisma.user.groupBy({
    by: ["createdAt"],
    _count: {
      id: true,
    },
    where: {
      createdAt: {
        gte: startOfYear,
        lte: endOfYear,
      },
    },
  });

  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    name: new Date(currentYear, i, 1).toLocaleString("default", {
      month: "short",
    }),
    total: 0,
  }));

  userData.forEach((data) => {
    const month = data.createdAt.getMonth();
    monthlyData[month].total += data._count.id;
  });

  return monthlyData;
}

export default async function DashboardPage() {
  const session = await auth();

  if (
    !session ||
    !session.user?.email ||
    !ADMIN_EMAILS.includes(session.user.email)
  ) {
    redirect("/dashboard/settings");
  }

  const userData = await getUserData();
  const totalBlogs = await prisma.blog.findMany();
  const totalVolunteer = await prisma.volunteerForm.findMany();
  const totalUsers = await prisma.user.findMany({
    where: {
      role: "USER",
    },
  });
  const newUsersInLastSevenDays = await prisma.user.groupBy({
    by: ["createdAt"],
    _count: {
      id: true,
    },
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Hii, {session?.user.name || "User"} 👋
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {newUsersInLastSevenDays.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBlogs.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Volunteer Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVolunteer.length}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>User Growth Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Suspense fallback={<Spinner />}>
              <Overview data={userData} />
            </Suspense>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Spinner />}>
              <RecentUsers totalUsers={totalUsers} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
