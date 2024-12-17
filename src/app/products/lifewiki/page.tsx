import { BadgeCheck, Users, Brain, Book, Sparkles, Search } from "lucide-react";

export default function LifeWikiProduct() {
  return (
    <div className="max-w-4xl mx-auto mt-16 space-y-16">
      {/* Challenge Section */}
      <section className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-2xl font-bold mb-2">The Challenge</h2>
          <p className="text-muted-foreground">
            Managing personal knowledge and information becomes increasingly
            complex in today's fast-paced digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Information Overload</h3>
            <p className="text-sm text-muted-foreground">
              Struggling to organize and access the growing amount of personal
              knowledge
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
            <Search className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Scattered Notes</h3>
            <p className="text-sm text-muted-foreground">
              Important information spread across multiple apps and platforms
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
            <Book className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Complex Systems</h3>
            <p className="text-sm text-muted-foreground">
              Existing note-taking apps are either too simple or too complicated
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-2xl font-bold mb-2">Our Solution</h2>
          <p className="text-muted-foreground">
            LifeWiki provides an intuitive and powerful personal knowledge
            management system that adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Brain className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Smart Organization</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                Intelligent tag suggestions
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                Automated categorization
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                Quick capture functionality
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Sparkles className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Seamless Experience</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                Cross-device sync
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                Rich text formatting
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                Offline access
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-2xl font-bold mb-2">Impact & Metrics</h2>
          <p className="text-muted-foreground">
            Helping users organize their digital lives more effectively
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10,000+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.8/5</div>
              <div className="text-sm text-muted-foreground mt-1">
                App Store Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1M+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Notes Created
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-2xl font-bold mb-2">User Stories</h2>
          <p className="text-muted-foreground">
            What our users are saying about LifeWiki
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">David Park</h3>
                <p className="text-sm text-muted-foreground">
                  Graduate Student
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "LifeWiki has transformed how I organize my research notes and
              personal projects. It's intuitive yet powerful."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Emma Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Content Creator</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "Finally found an app that matches my creative workflow. The tag
              system is a game-changer!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
