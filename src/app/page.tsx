import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 flex-grow">
        <div className="flex flex-col gap-8 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Hey, I'm Steven Chen 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            I'm a product manager & software developer passionate about building
            products that make a difference, bridging the gap between technology
            and society.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 text-purple-700 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 text-purple-700 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5">
            <h2 className="text-xl font-semibold mb-2">Latest Projects</h2>
            <p className="text-muted-foreground">
              Check out what I've been building recently.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition bg-gradient-to-br from-[#4997F2]/5 via-[#F5D37A]/5 to-[#D852C3]/5">
            <h2 className="text-xl font-semibold mb-2">Blog & Thoughts</h2>
            <p className="text-muted-foreground">
              I write about technology, design, and development.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition bg-gradient-to-br from-[#D852C3]/5 via-[#4997F2]/5 to-[#F5D37A]/5">
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <p className="text-muted-foreground">
              Explore the technologies I work with.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} [Steven Chen]. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/steven-scdev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://x.com/steven_yujun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/steven-yjchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
