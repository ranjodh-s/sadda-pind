"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images/village-lifestyle.jpg",
    alt: "Sadda Pind village view",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/fun-games.jpg",
    alt: "Punjabi village architecture",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/punjabi-heritage.jpg",
    alt: "Traditional Punjabi lifestyle",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/punjabi-thali.jpg",
    alt: "Punjabi cultural experience",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/home-stays.jpg",
    alt: "Sadda Pind heritage experience",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/cultural-activities.jpg",
    alt: "Sadda Pind heritage experience",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/c-one.jpg",
    alt: "Sadda Pind heritage experience",
    className: "md:col-span-1 md:row-span-2",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="photo-gallery" className="bg-[#f5f5f3] px-5 py-20 md:px-12 lg:px-24 z-60 min-h-screen">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-7xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-black/60">
            A Glimpse of Sadda Pind
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-black md:text-6xl">
            Memories That Stay With You
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-black/60 md:text-lg">
            Every corner tells a story. Every moment becomes a memory.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto grid max-w-7xl auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[180px] md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl text-left ${image.className}`}
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              {/* View Icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
        <button className="flex flex-col items-center justify-center w-full">
        <p className="mt-8 text-center text-sm text-black/60 hover:text-blue-500 hover:cursor-pointer underline hover:scale-105 transition-transform duration-300 mt-8">
          view all
        </p>
        </button>
        {/* <div className="absolute inset-0 backdrop-blur-md pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_30%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_30%,black_100%)]"></div> */}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black"
            aria-label="Close image"
          >
            &times;
          </button>

          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}