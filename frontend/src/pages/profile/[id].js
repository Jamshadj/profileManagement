import { useRouter } from "next/router";
import ProfileDetailCard from "@/components/profileDetailCard";

// Sample profile data (this would come from an API or database)
const profiles = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
    bio: "A designer with a knack for aesthetics.",
    gender: "Male",
    age: 23,
    call: "He/Him",
    about:
      "I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.",
    professionalAbout:
      "I have contributed significantly to improving backend efficiency and system scalability at Infosys. My key achievements include boosting system scalability by 30% and enhancing backend processes, earning a prestigious award for my work.",
    virtualResumeLink: "https://www.youtube.com/watch?v=ljM1EfxWnLc"
  },
  // Add more profiles if necessary
];

export async function getStaticPaths() {
  // Generate the paths for each profile
  const paths = profiles.map((profile) => ({
    params: { id: profile.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Return 404 for invalid paths
  };
}

export async function getStaticProps({ params }) {
  // Get the profile data based on the id
  const { id } = params;
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile,
    },
  };
}

export default function ProfilePage({ profile }) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white pt-[76px] pb-[156px]">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={handleBackClick}
          className="text-customBlack font-bold text-lg bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md shadow-md"
        >
          ← Back
        </button>
      </div>

      <div>
        <h1 className="text-5xl font-bold text-center mb-[33px] leading-[60px] text-customBlack font-helvetica">
          Profile Details
        </h1>
        <ProfileDetailCard profile={profile} />
      </div>
    </div>
  );
}
