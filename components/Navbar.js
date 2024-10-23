import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 right-0 z-10">
      <div className="flex flex-col space-y-4 justify-content-end pr-16 pt-16">
        <Link
          href="#aboutUs"
          className="black-text uppercase text-right text-l font-light"
        >
          About Us
        </Link>
        <Link
          href="#stories"
          className="black-text uppercase text-right text-l font-light"
        >
          Stories
        </Link>
        <Link
          href="/"
          className="black-text uppercase text-right text-l font-light"
        >
          Participate
        </Link>
      </div>
    </div>
  );
}
