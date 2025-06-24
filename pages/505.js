import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Vitrectomy Rentals Toronto</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.vitrectomyrentals.ca/500" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          500 - Server Error
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Something went wrong on our end. Please try again later.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
}
