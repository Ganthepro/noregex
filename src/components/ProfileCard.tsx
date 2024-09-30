import Image from "next/image";
import React from "react";
import { NobelType } from "@/types/nobel";

interface Props {
  data: NobelType;
}

const ProfileCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <Image
        className="w-full h-64 object-cover"
        width={1000}
        height={1000}
        src={data.image}
        alt={data.name}
      />
      <div className="p-6">
        <h2 className="outfit text-gray-700 font-extrabold text-xl mb-2">
          {data.name}
        </h2>
        <p className="text-gray-700 text-base">
          <strong>Category:</strong> {data.category}
        </p>
        <p className="outfit text-gray-700 text-base">
          <strong>Year:</strong> {data.year}
        </p>
        <p className="outfit text-gray-700 text-base">
          <strong>Birthdate:</strong> {data.birth_year}
        </p>
        <p className="outfit text-gray-700 text-base">
          <strong>Birthplace:</strong> {data.birth_country}
        </p>
        <p className="kanit-thin text-gray-700 text-base italic mt-4">
          “{data.quote}”
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
