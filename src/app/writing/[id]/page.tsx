import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import { Writing } from "@/models/Writing";
import { format } from "date-fns";

interface WritingPageProps {
  params: {
    id: string;
  };
}

// Add interface for Writing document
interface WritingDocument {
  title: string;
  date: Date;
  topics: string[];
  description: string;
  content: string;
}

export default async function WritingPage({
  params,
}: WritingPageProps & { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  await connectDB();
  const writing = (await Writing.findById(
    resolvedParams.id
  )) as WritingDocument;

  if (!writing) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{writing.title}</h1>
        <div className="flex items-center gap-4 text-slate-600 mb-6">
          <time dateTime={writing.date.toISOString()}>
            {format(writing.date, "MMMM d, yyyy")}
          </time>
          <div className="flex gap-2">
            {writing.topics.map((topic: string) => (
              <span
                key={topic}
                className="bg-slate-100 px-2 py-1 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xl text-slate-600">{writing.description}</p>
      </header>

      <div className="prose prose-lg max-w-none">
        {writing.content.split("\n").map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
