import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <p>
          THIS IS THE LOGIN PAGE
        </p>
      </div>
      <div>
        <Link href='/mainpage'>
          <p>mainpage</p>
        </Link>
      </div>
      <div>
        <Link href='/about'>
          <p>about page</p>
        </Link>
      </div>
    </main>
  );
}
