import Link from "next/link";

export default async function NotFound() {
  await fetch("http://localhost:3000/api", { cache: "no-store" });

  return (
    <>
      <h1>404</h1>
      <Link href="/">Go back</Link>
    </>
  );
}
