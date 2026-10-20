
import Link from "next/link";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-sm font-semibold text-green-600 tracking-wider">
          BAZAR DOR
        </p>

        <h1 className="text-8xl font-extrabold text-green-600 mt-4">
          404
        </h1>

        <h2 className="text-2xl font-bold mt-3">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="text-base-content/70 text-sm leading-6 mt-3">
          সঠিক ঠিকানা দিয়ে আবার চেষ্টা করুন।
        </p>

        <div className="mt-5">
          <Link
            href="/"
            className="text-sm text-base-content/60 hover:text-green-700 transition-colors"
          >
            <FaArrowLeft className="inline mr-2" />
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
