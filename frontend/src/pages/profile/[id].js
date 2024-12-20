// pages/profile/[id].js
import { useRouter } from 'next/router';
import ProfileDetailCard from '@/components/profileDetailCard';
import api from '@/api'; // Assuming your API module is named "api"

export async function getStaticPaths() {
  try {
    const response = await api.getProfiles(); // Fetch all profiles to get their IDs
    const paths = response.data.map(profile => ({
      params: { id: profile.id.toString() }, // Assuming the profile has an `id` field
    }));
    return {
      paths,
      fallback: false, // Static export, so we don't want to handle fallback
    };
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;
  try {
    const response = await api.getProfileById(id); // Fetch profile by ID
    return {
      props: { profile: response.data || {} },
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return { props: { profile: {} } };
  }
}

export default function ProfilePage({ profile }) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/'); // Redirect to the homepage
  };

  if (!profile) {
    return <div>Loading...</div>; // Show loading state until the profile is fetched
  }

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
