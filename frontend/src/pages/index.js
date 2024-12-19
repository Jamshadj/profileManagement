import ProfileCard from "@/components/profileCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile Management</title>
        <meta
          name="description"
          content="A profile management application built with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Helvetica+Now+Display:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="min-h-screen bg-white py-[96px] px-5 md:px-3 lg:px-[95px]">
        <div className="container contents">
          <h1 className="text-5xl font-bold text-center mb-24 leading-[60px] text-customBlack font-helvetica">
            Explore our Talent Pool
          </h1>
          <ProfileCard />
        </div>
      </main>
    </>
  );
}
