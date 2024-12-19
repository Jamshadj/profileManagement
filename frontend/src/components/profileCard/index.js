
import Image from "next/image";
import Link from "next/link"; 

export default function ProfileCard({profiles}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
      {profiles?.map((profile) => (
         <Link key={profile.id} href={`/profile/${profile._id}`} passHref>
        <div key={profile.id} className="bg-profileCardCustomWhite ml-auto mr-auto w-full max-w-[392px] h-[531px] rounded-[28px] overflow-hidden shadow-lg">
          {/* Top section  */}
          <div className="h-[190px] bg-profile-gradient relative">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={210}
              height={210}
              style={{ objectFit: "cover" }} 
              className="rounded-full absolute h-[210px] w-[210px] left-1/2 transform -translate-x-1/2 top-[50%] -translate-y-1/2 mt-[88px]"
            />
          </div>

          {/* Bottom section */}
          <div className="p-4 flex flex-col items-center justify-center pt-24  leading-8 text-customBlack">
            <h2 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] tracking-[-0.2px] mt-6 font-helvetica">
              {profile.name}
            </h2>
            <p className="text-center font-helvetica text-sm sm:text-base leading-8 mt-2">
              {profile.gender} | {profile.age} | {profile.pronouns}
            </p>
            <button className="w-[118px] h-[32px] bg-[#F58232] text-white rounded-3xl mt-4 font-bold text-sm hover:opacity-80">
              View profile
            </button>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}