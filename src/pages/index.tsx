import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-center justify-between p-24 ${inter.className} bg-[url(/assets/bg.jpg)] bg-center bg-cover justify-around`}
    >
      <div className="">
        <h1 className="text-5xl font-bold uui-gradient-text pb-4">
          Mediconnect
        </h1>
        <p className="text-xl font-extrabold">Coming soon...</p>
      </div>

      <Image src={"/assets/asset.svg"} width={500} height={500} alt="asset" />
    </main>
  );
}
