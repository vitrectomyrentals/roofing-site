import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Vitrectomy Rentals Toronto</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.vitrectomyrentals.ca/404" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          The page you&apos;re looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
}
