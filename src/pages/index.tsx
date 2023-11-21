import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { status, data } = useSession();

  useEffect(() => {
    console.log(data);
  }, []);
  console.log(status);
  return (
    <main className="flex min-h-screen flex-col items-center p-24  bg-[url(/assets/bg.jpg)] bg-center bg-cover justify-around sm:flex-row sm:items-center sm:justify-around">
      <Head>
        <title>Medconnect</title>
      </Head>
      <div className="">
        <h1 className="text-5xl font-bold uui-gradient-text pb-4">
          Medconnect
        </h1>
        <p className="text-xl font-extrabold">Coming soon...</p>
      </div>

      <div className="w-screen sm:w-[32%]">
        <Image
          src={"/assets/asset.svg"}
          width={400}
          height={400}
          alt="asset"
          className="w-[100%] h-[100%]"
        />
      </div>
      <Link
        href={"/auth/signin"}
        className="absolute top-6 right-8 uui-gradient-bg text-center w-[15%] h-[6%] sm:w-[6%] sm:h-[6%] flex felx-row items-center justify-center rounded-3xl"
      >
        Login
      </Link>
    </main>
  );
}
