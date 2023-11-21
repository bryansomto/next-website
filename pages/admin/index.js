import { useSession } from "next-auth/react";
import Layout from "@/components/admin/Layout";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex justify-center items-center bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt={`An image of ${session?.user?.name}`}
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span className="hidden sm:inline-block sm:px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
}
