import { Card } from "@/components/ui/card";
import { WritingForm } from "@/components/writing-form";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import { Writing } from "@/models/Writing";

export default async function WritingPage() {
  await connectDB();
  const writingPieces = await Writing.find().sort({ date: -1 });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Writings</h1>

      <h2 className="text-2xl font-semibold mb-4">Published Writings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {writingPieces.map((piece) => (
          <Link href={`/writing/${piece._id}`} key={piece._id}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{piece.title}</h2>
              <p className="text-slate-600 mb-4">{piece.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {piece.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-slate-100 px-2 py-1 rounded-full text-sm text-slate-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="text-sm text-slate-500">
                {new Date(piece.date).toLocaleDateString()}
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Add New Writing</h2>
        <WritingForm />
      </div>
    </div>
  );
}
