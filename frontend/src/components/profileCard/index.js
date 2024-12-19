import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfileCard() {
  const [profiles, setProfiles] = useState([]);

  // Sample data
  const sampleProfiles = [
    {
      id: 1,
      name: "John Doe",
      avatar:
        "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      bio: "A passionate developer who loves to code.",
      gender: "Male",
      age: 23,
      call: "He/Him",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      bio: "A designer with a knack for aesthetics.",
      gender: "Male",
      age: 23,
      call: "He/Him",
    },
    {
      id: 1,
      name: "John Doe",
      avatar:
        "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      bio: "A passionate developer who loves to code.",
      gender: "Male",
      age: 23,
      call: "He/Him",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      bio: "A designer with a knack for aesthetics.",
      gender: "Male",
      age: 23,
      call: "He/Him",
    },
    {
      id: 1,
      name: "John Doe",
      avatar:
        "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      bio: "A passionate developer who loves to code.",
      gender: "Male",
      age: 23,
      call: "He/Him",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      bio: "A designer with a knack for aesthetics.",
      gender: "Male",
      age: 23,
      call: "He/Him",
    },
  ];

  useEffect(() => {
    setProfiles(sampleProfiles);
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-profileCardCustomWhite ml-auto mr-auto w-full max-w-[392px] h-[531px] rounded-[28px] overflow-hidden shadow-lg">
          {/* Top section  */}
          <div className="h-[190px] bg-profile-gradient relative">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={210}
              height={210}
              className="rounded-full absolute left-1/2 transform -translate-x-1/2 top-[50%] -translate-y-1/2 mt-[88px]"
            />
          </div>

          {/* Bottom section */}
          <div className="p-4 flex flex-col items-center justify-center pt-24  leading-8 text-customBlack">
            <h2 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] tracking-[-0.2px] mt-6 font-helvetica">
              {profile.name}
            </h2>
            <p className="text-center font-helvetica text-sm sm:text-base leading-8 mt-2">
              {profile.gender} | {profile.age} | {profile.call}
            </p>
            <button className="w-[118px] h-[32px] bg-[#F58232] text-white rounded-3xl mt-4 font-bold text-sm hover:opacity-80">
              View profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}