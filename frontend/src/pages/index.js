import Head from "next/head";
import ProfileCard from "@/components/profileCard";
import api from "@/api";

export async function getStaticProps() {
  try {
    const profiles = await api.getProfiles();
    return { 
      props: { profiles: profiles.data || [] },
    };
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    return { props: { profiles: [] } };
  }
}

export default function Home({ profiles }) {
  if (profiles.length === 0) {
    return <div>No profiles available.</div>; // Show a fallback state if no profiles are found
  }
  
  return (
    <>
      <Head>
        <title>Profile Management</title>
        <meta
          name="description"
          content="A profile management application built with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white py-[96px] px-5 md:px-3 lg:px-[95px]">
        <div className="container contents">
          <h1 className="text-5xl font-bold text-center mb-24 leading-[60px] text-customBlack font-helvetica">
            Explore our Talent Pool
          </h1>
          <ProfileCard profiles={profiles} />
        </div>
      </main>
    </>
  );
}
