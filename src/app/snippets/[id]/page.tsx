import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <h1>{snippet.title}</h1>
    </div>
  );
}