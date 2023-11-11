import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24  bg-[url(/assets/bg.jpg)] bg-center bg-cover justify-around sm:flex-row sm:items-center sm:justify-around">
      <Head>
        <title>Mediconnect</title>
      </Head>
      <div className="">
        <h1 className="text-5xl font-bold uui-gradient-text pb-4">
          Mediconnect
        </h1>
        <p className="text-xl font-extrabold">Coming soon...</p>
      </div>

      <div className="w-screen">
        <Image
          src={"/assets/asset.svg"}
          width={400}
          height={400}
          alt="asset"
          className="w-[100%] h-[100%]"
        />
      </div>
    </main>
  );
}
