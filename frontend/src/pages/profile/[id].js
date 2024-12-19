import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileDetailCard from "@/components/profileDetailCard";
import api from "@/api"; // Assuming your API module is named "api"

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query; // Get the profile ID from the URL
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProfile = async () => {
        try {
          const response = await api.getProfileById(id);
          console.log(response.data);
          
          if (response.success) {
            console.log(response.data);
            
            setProfile(response.data)
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    }
  }, [id]);

  const handleBackClick = () => {
    router.push("/"); // Redirect to the homepage
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
