import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      href={`/snippets/${snippet.id}`}
      className="flex justify-between items-center p-2 border rounded"
      key={snippet.id}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return <div>{renderedSnippets}</div>;
}
