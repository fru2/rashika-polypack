import Image from "next/image";
import Nav from "./ui/nav";
import Hero from "./ui/home/hero";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero></Hero>
      </main>
    </>
  );
}
