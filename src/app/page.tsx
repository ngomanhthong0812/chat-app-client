import Link from "next/link";

export default function Home() {
  return (
    <div className="text-5xl">
      <Link href="/login" className="text-blue-600 bg-red-600">
        Login
      </Link>
    </div>
  );
}
