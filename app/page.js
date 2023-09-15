import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/signin?callbackUrl=/");
  }

  return (
    <main className="min-h-screen ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <>{session?.user?.email}</>
      </div>
    </main>
  );
}
