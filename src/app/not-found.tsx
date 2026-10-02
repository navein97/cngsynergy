import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found">
        <p>This page has moved or no longer exists.</p>
        <Link href="/" className="btn btn-primary mt-8 text-[1.0625rem]">
          Go to the home page
        </Link>
      </PageHeader>
    </>
  );
}
