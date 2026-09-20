"use client";

import Image from "next/image";

const visitDetails = [
  {
    title: "LOCATION",
    value: "Amritsar, Punjab",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    title: "EXPERIENCE",
    value: "Culture, Food, Music & Heritage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m9-9H3m15.364-6.364L5.636 18.364m12.728 0L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    title: "PERFECT FOR",
    value: "Families, Groups & Travelers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.003A9.37 9.37 0 0 1 12 20.25a9.37 9.37 0 0 1-3-.492m6-3.7a6.75 6.75 0 0 0-6 0m6 0a6.75 6.75 0 0 1-6 0m-6.375 2.37a9.37 9.37 0 0 0 3.75.744 9.37 9.37 0 0 0 3.75-.744m-7.5 0A4.125 4.125 0 0 1 6.75 12.75h.75m0 0a4.125 4.125 0 0 1 4.125 4.125v.003"
        />
      </svg>
    ),
  },
];

export default function PlanVisit() {
  return (
    <section
      id="plan-visit"
      className="relative overflow-hidden bg-[#eee8dc] px-6 py-24 text-[#211c17] md:px-12 lg:px-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#8d6b43]/20" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#8d6b43]/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Text Content */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8b6338]">
            Plan Your Visit
          </p>

          <h2 className="mt-5 max-w-xl uppercase text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Your Punjabi
            <br />
            Experience Awaits
          </h2>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-[#211c17]/70 md:text-lg">
            Whether you're visiting with family, friends, or loved ones,
            create unforgettable memories in the heart of Punjab.
          </p>

          {/* Information Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {visitDetails.map((detail) => (
              <div
                key={detail.title}
                className="flex items-start gap-4 border-b border-[#211c17]/15 pb-5"
              >
                <div className="mt-1 text-[#8b6338]">{detail.icon}</div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#211c17]/60">
                    {detail.title}
                  </p>

                  <p className="mt-2 text-base font-medium md:text-lg">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#211c17] px-7 py-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#8b6338]">
              BOOK YOUR VISIT
            </button>

            <button className="rounded-full border border-[#211c17] px-7 py-4 text-sm font-medium tracking-wide text-[#211c17] transition duration-300 hover:bg-[#211c17] hover:text-white">
              GET DIRECTIONS
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[450px] overflow-hidden rounded-2xl md:h-[600px]">
          <Image
            src="/images/punjabi-heritage.jpg"
            alt="Traditional Punjabi village entrance"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">
              Welcome to Sadda Pind
            </p>

            <p className="mt-2 text-2xl font-light text-white md:text-3xl">
              Where every visit becomes a memory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}