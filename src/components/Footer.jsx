import Link from "next/link";

const exploreLinks = [
  { label: "Experience Sadda Pind", href: "#experience" },
  { label: "Taste of Punjab", href: "#food" },
  { label: "Live the Culture", href: "#performance" },
  { label: "Gallery", href: "#gallery" },
  { label: "Homestays", href: "#homestay" },
];

const visitLinks = [
  { label: "Plan Your Visit", href: "#plan-visit" },
  { label: "Book Your Visit", href: "#booking" },
  { label: "Get Directions", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171512] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-semibold tracking-[0.18em]"
            >
              SADDA PIND
            </Link>

            <p className="mt-5 max-w-sm text-2xl font-light leading-relaxed text-[#d6b27a]">
              Where Punjab
              <br />
              Lives Forever.
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Step into the heart of Punjab and experience its culture,
              flavours, music, and timeless traditions.
            </p>

            <Link
              href="#booking"
              className="mt-8 inline-flex rounded-full bg-[#d6b27a] px-7 py-3 text-sm font-medium tracking-wide text-[#171512] transition duration-300 hover:bg-white"
            >
              BOOK YOUR VISIT
            </Link>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b27a]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-[#d6b27a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b27a]">
              Visit
            </h3>

            <ul className="mt-6 space-y-4">
              {visitLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-[#d6b27a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm leading-6 text-white/65">
                Amritsar,
                <br />
                Punjab, India
              </p>
            </div>
          </div>

          {/* Contact and Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b27a]">
              Connect
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition hover:text-[#d6b27a]"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition hover:text-[#d6b27a]"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition hover:text-[#d6b27a]"
                >
                  YouTube
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                Experience Punjab
              </p>

              <p className="mt-2 text-sm text-white/65">
                Culture • Food • Music • Heritage
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-12 lg:px-24">
          <p>© {new Date().getFullYear()} Sadda Pind. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}