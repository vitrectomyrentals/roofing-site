import Image from "next/image";

export default function RecoverySection() {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            {/* Title Section */}
            <div className="mb-12">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-800">
                Face-Down Recovery Specialists
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                Ontario&apos;s Premier Vitrectomy Recovery Equipment Rental
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comfortable face down equipment rental for post-eye surgery
                recovery, including vitrectomy, macular hole, and retinal
                detachment procedures.
              </p>
            </div>

            {/* Features Grid */}
            <dl className="grid gap-8">
              {[
                {
                  title: "Top Quality Equipment",
                  description:
                    "High quality face-down recovery equipment including adjustable height bed with memory foam and an ergonomic face-down chair for optimal healing position.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Complete Recovery Package",
                  description:
                    "Full equipment bundle including special 2-way mirror, tablet/phone stand and portable car piece for all your face down needs.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Expert Support & Service",
                  description:
                    "24/7 Support. Serving Canadians with same-day/next-day service available.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="relative">
                  <dt className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 pl-14 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>

            {/* SEO-Rich Content */}
            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Face Down Equipment For:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Vitrectomy Recovery",
                  "Macular Hole Surgery",
                  "Retinal Detachment",
                  "Eye Surgery Recovery",
                  "Face-Down Positioning",
                  "Post-Op Recovery",
                ].map((term, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 relative">
                <Image
                  src="/bed2.jpg"
                  alt="Professional Vitrectomy Recovery Equipment - Face Down Recovery Bed"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 relative">
                <Image
                  src="/chair-9599SM.jpg"
                  alt="High Quality, Fully Adjustable Face Down Recovery Chair for Eye Surgery"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 aspect-square w-32 rounded-full bg-purple-600/10 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 aspect-square w-32 rounded-full bg-purple-600/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
