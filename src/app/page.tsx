import Image from "next/image";
import HeroCarousel from "../components/HeroCarousel";
import Gallery from "../components/Gallery";
import PlanVisit from "../components/PlanVisit";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const experiences = [
    {
      image: "/images/village-lifestyle.jpg",
      title: "Village Lifestyle",
      alt: "Traditional Punjabi village lifestyle",
    },
    {
      image: "/images/cultural-activities.jpg",
      title: "Cultural Activities",
      alt: "Punjabi cultural activities",
    },
    {
      image: "/images/fun-games.jpg",
      title: "Fun Games",
      alt: "Traditional Punjabi fun games",
    },
    {
      image: "/images/punjabi-heritage.jpg",
      title: "Punjabi Heritage",
      alt: "Punjabi heritage",
    },
    {
      image: "/images/antiques.jpg",
      title: "Antiques",
      alt: "Traditional Punjabi antiques",
    },
    {
      image: "/images/home-stays.jpg",
      title: "Homestays",
      alt: "Traditional Punjabi homestay",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <main id="home" className="min-h-screen">
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center md:p-24">
          <h1 className="text-5xl leading-tight md:text-7xl">
            EXPERIENCE THE <br />
            SOUL OF PUNJAB
          </h1>

          <p className="mt-4 text-xl md:text-2xl">
            A Living Punjabi <br />
            Village in Amritsar
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-3xl border border-white bg-white px-6 py-3 text-black transition hover:bg-transparent hover:text-white">
              Book Your Visit
            </button>

            <button className="rounded-3xl border border-white px-6 py-3 text-white transition hover:bg-white hover:text-black">
              Explore Sadda Pind
            </button>
          </div>
        </div>
      </main>

      {/* Experience Section */}
      <section id="experience" className="flex min-h-screen flex-col items-center bg-black px-6 py-16 md:px-24">
        <h2 className="text-center text-4xl text-white md:text-5xl">
          EXPERIENCE SADDA PIND
        </h2>

        <p className="mt-4 text-center text-lg text-white/70">
          Where Punjab's traditions come alive.
        </p>

        <div className="mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="group relative h-[260px] overflow-hidden rounded-2xl"
            >
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <h3 className="absolute bottom-0 left-0 p-6 text-xl text-white md:text-2xl">
                {experience.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xl text-white/80 md:text-2xl">
          And much more!
        </p>
      </section>

      {/* Food Section */}
      <section
        id="food"
        className="relative food flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center md:px-24"
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-white md:text-7xl lg:text-7xl">
            TASTE OF PUNJAB
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-white md:text-xl">
            From hearty Punjabi classics to traditional village-style dining,
            <br className="hidden md:block" />
            experience the flavours that are at the heart of Punjab.
          </p>

          <button className="mt-8 rounded-3xl border border-white bg-white px-6 py-3 text-black transition hover:bg-transparent hover:text-white">
            Explore Our Menu
          </button>
        </div>

        <p className="absolute bottom-10 hidden px-6 text-center text-sm tracking-wide text-white md:block md:text-lg">
          AUTHENTIC CUISINE . TRADITIONAL RECIPES . PUNJABI HOSPITALITY
        </p>
      </section>

      {/* Cultural Performance Section */}
      <section id="performance" className="min-h-screen">
        <HeroCarousel />
      </section>

      <section
  id="homestay"
  className="relative flex min-h-screen w-full items-center justify-center bg-black px-5 py-20 sm:px-8 md:px-12 lg:px-20"
>
  <div className="flex w-full max-w-4xl flex-col items-start justify-center text-left">
    {/* Heading */}
    <h2 className="text-4xl leading-tight tracking-wide text-white sm:text-5xl md:text-6xl">
      STAY A LITTLE
      <br className="sm:hidden" /> LONGER
    </h2>

    {/* Subtitle */}
    <p className="mt-6 text-lg font-light text-white sm:text-xl md:text-2xl">
      A Home Away From Home
    </p>

    {/* Description */}
    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
      Experience the warmth of Punjabi hospitality in a traditional
      village-inspired setting.
    </p>

    {/* Highlights */}
    <div className="mt-8 flex flex-col items-start gap-3 text-xs tracking-wide text-white/90 sm:text-sm md:text-base">
      <p>TRADITIONAL HAVELI ROOMS</p>
      <p>AUTHENTIC PUNJABI HOSPITALITY</p>
      <p>PEACEFUL VILLAGE ATMOSPHERE</p>
    </div>

    {/* CTA */}
    <button
      className="mt-10 rounded-full border border-white bg-white px-7 py-3 text-xs font-medium tracking-wide text-black transition duration-300 hover:bg-transparent hover:text-white sm:px-8 sm:py-4 sm:text-sm"
    >
      BOOK YOUR STAY
    </button>
  </div>
</section>

        <Gallery />
        <PlanVisit />
        <Footer />
    </>
  );
}