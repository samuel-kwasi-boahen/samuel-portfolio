import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Data Analytics · Web Development · Product Security
      </p>

      <h1 className="text-4xl font-bold md:text-6xl">
        I Build Data-Driven Digital Solutions That Help Businesses Grow
      </h1>

      <p className="max-w-xl text-lg text-gray-600">
        I help businesses grow by turning data into insights, ideas into designs, and designs into working digital products. From dashboards to websites to intuitive interfaces — I deliver end-to-end solutions.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}