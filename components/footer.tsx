import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-gray-600 sm:flex-row">
        <p>&copy; {year} Samuel Boahen</p>
        <a href="mailto:kwasisamuel@gmail.com" className="hover:text-black"> </a>
      </div>
    </footer>
  );
}
