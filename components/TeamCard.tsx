import React from "react";

type PropType = {
  name: string;
  role: string;
  image: string;
};
export default function TeamCard({ name, role, image }: PropType) {
  return (
    <div>
      <div>
        <img
          src={image}
          className="aspect-[4/5] w-full max-w-xs object-cover object-top grayscale transition-all duration-200 hover:grayscale-0"
        />
      </div>
      <div className="my-4">
        <h1 className="text-center text-2xl font-bold capitalize">{name}</h1>
        <h2 className="text-center text-xs uppercase text-neutral-500">
          {role}
        </h2>
      </div>
    </div>
  );
}
