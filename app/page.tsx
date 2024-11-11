import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 text-white sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-center text-sm sm:text-left">
          <li className="mb-2">
            Get started by reading{" "}
            <code className="rounded bg-white/[.05] px-1 py-0.5 font-semibold dark:bg-black/[.06]">
              rules
            </code>
            .
          </li>
          <li>Click play to start game.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/game"
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#252c34] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Play
          </Link>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-white/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#252c34] dark:border-black/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rules
          </a>
        </div>
      </main>
    </div>
  );
}
