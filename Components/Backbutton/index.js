import Link from "next/link";

export default function Back() {
  return (
    <>
      <h3>
        <Link href="javascript:history.back()">Go Back</Link>
      </h3>
    </>
  );
}
