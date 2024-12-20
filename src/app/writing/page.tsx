import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import { Writing } from "@/models/Writing";
import { format } from "date-fns";

// Add interface for Writing document
interface WritingDocument {
  _id: string;
  title: string;
  date: Date;
  topics: string[];
  description: string;
  content: string;
}

export default async function WritingPage() {
  await connectDB();
  const writings = (await Writing.find().sort({ date: -1 })) as WritingDocument[];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {writings.map((piece) => (
          <Link key={piece._id.toString()} href={`/writing/${piece._id}`}>
            <article className="mb-8 p-6 rounded-lg hover:bg-slate-50 transition-colors">
              <h2 className="text-2xl font-bold mb-2">{piece.title}</h2>
              <time className="text-slate-600 mb-4 block">
                {format(piece.date, "MMMM d, yyyy")}
              </time>
              <p className="text-slate-600 mb-4">{piece.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {piece.topics.map((topic: string) => (
                  <span
                    key={topic}
                    className="bg-slate-100 px-2 py-1 rounded-full text-sm text-slate-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
