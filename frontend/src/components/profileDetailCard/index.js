import Image from "next/image";
import YouTube from "react-youtube";
const subHeading = [
  "Core Skills & Technical Proficiencies",
  "Professional Journey & Internship Roles",
  "Case Insights & Key Projects",
  "Learning & Academic Milestones",
  "Endorsements from Mentors & Peers",
];

export default function ProfileDetailCard({ profile }) {
  const getVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v") || url.split("youtu.be/")[1] || "defaultVideoId";
  };
   
  return (
    <div className="bg-white w-full overflow-hidden h-full">
      {/* Top section */}
      <div className="h-[315px] bg-profile-gradient relative">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={312}
          height={312}
          style={{ objectFit: "cover" }} 
          className="rounded-full w-[312px] h-[312px] absolute left-1/2 transform -translate-x-1/2 top-[50%] -translate-y-1/2 mt-[155px]"
        />
      </div>
      {/* Bottom section */}
      <div className="p-4 flex flex-col items-center justify-center pt-40 md:pt-40 leading-8 text-customBlack">
        <h2 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] tracking-[-0.2px] mt-6 font-helvetica">
          {profile.name}
        </h2>
        <p className="text-center font-helvetica text-sm sm:text-base leading-8 mt-2">
          {profile.gender} | {profile.age} | {profile.pronouns}
        </p>
      </div>

      {/* Subheading section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-9 px-10 rounded-3xl items-center border border-lightGrayBorder max-w-[1242px] lg:h-[86px] h-auto mx-auto ">
        {subHeading.map((heading, index) => (
          <div
            key={index}
            className="lg:w-[178px] h-10 sm:w-full mx-auto text-center lg:text-left flex items-center"
          >
            <h3 className="font-bold text-base text-[#666668]">{heading}</h3>
          </div>
        ))}
      </div>
      {/* Profile Description */}
      <div className="max-w-[1242px]  h-auto mx-auto text-lightGrayText mt-[79px] text-center font-helvetica font-normal text-xl">
        <p className="mb-4 ">{profile.about}</p>
        <p className="">{profile.professionalSummary}</p>
      </div>
      <div className="max-w-[1242px]  h-auto mx-auto mt-[113px]">
        <h1 className="text-5xl font-bold text-center mb-24 leading-[60px] text-customBlack font-helvetica">
          Visual Resume
        </h1>
        <div className="relative w-full overflow-hidden rounded-[1.6rem] pb-[56.25%] lg:pb-[42%]">
          <YouTube
            videoId={getVideoId(profile.virtualResumeLink)}
            opts={{
              width:"100%",
              height:"100%",
              playerVars: {
                iv_load_policy: 3,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                autoplay: 0,
              },
            }}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

      </div>
      //{" "}
    </div>
  );
}
