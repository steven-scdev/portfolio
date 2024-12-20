import {
  BadgeCheck,
  Users,
  Book,
  Brain,
  AlertTriangle,
  Rocket,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import Image from "next/image";

export default function PineyProduct() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Piney</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["AI", "Learning", "Productivity", "Knowledge Management"].map(
            (tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 px-4 py-1"
              >
                {tag}
              </Badge>
            )
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          An AI-powered reading companion that helps you understand complex
          topics easier and faster through interactive concept maps and
          intelligent Q&A.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.piney.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105"
          >
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600
                text-white font-medium px-6 py-2 rounded-full shadow-md 
                hover:shadow-lg border-none transition-all duration-300"
            >
              ✨ Visit Website ✨
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* The Challenge Section */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              The Challenge
            </h2>
            <p className="text-muted-foreground">
              Traditional reading is linear and time-consuming, leading to
              inefficient learning and poor knowledge retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Clock className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Time-Consuming
              </h3>
              <p className="text-sm text-muted-foreground">
                Readers waste hours going through entire texts when only
                specific parts are relevant
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Brain className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Mental Model Complexity
              </h3>
              <p className="text-sm text-muted-foreground">
                Difficult to build coherent understanding of complex subjects
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Book className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Information Overload
              </h3>
              <p className="text-sm text-muted-foreground">
                Overwhelming amount of content leads to poor knowledge retention
              </p>
            </div>
          </div>
        </section>

        {/* Research & Discovery Section */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Research & Discovery
            </h2>
            <p className="text-muted-foreground">
              Through 30+ user interviews, we identified key insights about
              reading and learning challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Findings</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Users need efficient ways to extract relevant information
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Visual concept mapping aids in understanding and retention
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Interactive Q&A helps clarify complex topics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Personalized learning paths increase engagement
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Research Methods</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• In-depth user interviews</li>
                    <li>• Reading pattern analysis</li>
                    <li>• Learning behavior study</li>
                    <li>• Competitive analysis</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Pain Points Identified
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Time management struggles</li>
                    <li>• Information overload</li>
                    <li>• Poor knowledge retention</li>
                    <li>• Difficulty building mental models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas Section */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              User Personas
            </h2>
            <p className="text-muted-foreground">
              Based on our research, we identified two primary user types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">
                    Graduate Student
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    PhD candidate in Economics, needs to process hundreds of
                    academic papers efficiently
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Goals
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quick extraction of key concepts</li>
                    <li>• Building comprehensive mental models</li>
                    <li>• Efficient literature review</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Pain Points
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Overwhelmed by volume of papers</li>
                    <li>• Struggles with concept connections</li>
                    <li>• Limited time for reading</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Michael Torres</h3>
                  <p className="text-sm text-muted-foreground">
                    Product Manager
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tech industry professional needing quick insights from
                    business books
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Goals
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stay updated with industry trends</li>
                    <li>• Extract actionable insights</li>
                    <li>• Efficient meeting preparation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Pain Points
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited time for reading</li>
                    <li>• Difficulty finding specific information</li>
                    <li>• Needs to share insights with team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Our Solution
            </h2>
            <p className="text-muted-foreground">
              Piney transforms reading into an interactive and efficient
              learning experience through AI-powered concept mapping and
              intelligent Q&A.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-border">
              <Brain className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Smart Learning Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">
                      Interactive Concept Maps
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Visual representation of key concepts with dynamic
                      navigation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">AI-Powered Q&A</span>
                    <p className="text-sm text-muted-foreground">
                      Context-aware responses to your specific questions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">RAG Technology</span>
                    <p className="text-sm text-muted-foreground">
                      Advanced retrieval for accurate and relevant insights
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-border">
              <Sparkles className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Personalized Experience
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Custom Learning Paths</span>
                    <p className="text-sm text-muted-foreground">
                      Tailored reading roadmaps based on your goals
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Progress Tracking</span>
                    <p className="text-sm text-muted-foreground">
                      Monitor your understanding and learning journey
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Knowledge Integration</span>
                    <p className="text-sm text-muted-foreground">
                      Connect insights across multiple sources
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Add this new div for images after the feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-6">
              <Image
                src="/piney/img1.png"
                alt="Piney concept map visualization"
                width={600}
                height={400}
                className="rounded-xl shadow-md border border-border"
              />
              <Image
                src="/piney/img2.png"
                alt="Piney interactive learning interface"
                width={600}
                height={400}
                className="rounded-xl shadow-md border border-border"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/piney/img3.png"
                alt="Piney knowledge tracking dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-md border border-border"
              />
              <Image
                src="/piney/img4.png"
                alt="Piney AI-powered Q&A system"
                width={600}
                height={400}
                className="rounded-xl shadow-md border border-border"
              />
            </div>
          </div>
        </section>

        {/* User Journey */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Learning Journey
            </h2>
            <p className="text-muted-foreground">
              How users transform complex texts into actionable knowledge
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-100 -translate-y-1/2"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="font-semibold mt-4 mb-2">Content Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Upload or select learning material
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="font-semibold mt-4 mb-2">AI Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Automatic concept mapping and knowledge extraction
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="font-semibold mt-4 mb-2">
                  Interactive Learning
                </h4>
                <p className="text-sm text-muted-foreground">
                  Explore concepts and ask questions
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h4 className="font-semibold mt-4 mb-2">Knowledge Mastery</h4>
                <p className="text-sm text-muted-foreground">
                  Apply insights and track progress
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Impact */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Expected Impact
            </h2>
            <p className="text-muted-foreground">
              Projected improvements in learning efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Clock className="h-8 w-8 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-600">40%</div>
              <h3 className="font-semibold mb-2">Time Saved</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in time spent reading while maintaining comprehension
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Brain className="h-8 w-8 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-600">75%</div>
              <h3 className="font-semibold mb-2">Knowledge Retention</h3>
              <p className="text-sm text-muted-foreground">
                Improved recall through visual learning and active engagement
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <MessageCircle className="h-8 w-8 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-600">90%</div>
              <h3 className="font-semibold mb-2">Question Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Precise and relevant responses to user queries
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Development Roadmap
            </h2>
            <p className="text-muted-foreground">
              Our journey from MVP to full feature set
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-[#F5D37A]/10 to-[#4997F2]/10 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                Phase 1: MVP (3-4 Months)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Core Features</span>
                    <p className="text-sm text-muted-foreground">
                      Basic concept mapping, Q&A interface, single book
                      processing
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Essential UI</span>
                    <p className="text-sm text-muted-foreground">
                      User authentication, content upload, basic visualization
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/10 to-[#4997F2]/10 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                Phase 2: Enhancement (6-8 Months)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Advanced Features</span>
                    <p className="text-sm text-muted-foreground">
                      Multi-document support, enhanced visualizations,
                      personalized learning paths
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Platform Growth</span>
                    <p className="text-sm text-muted-foreground">
                      Collaboration features, progress tracking, export
                      capabilities
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Risk Management
            </h2>
            <p className="text-muted-foreground">
              Identified risks and mitigation strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <AlertTriangle className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-4">Technical Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">AI Model Accuracy</span>
                    <p className="text-sm text-muted-foreground">
                      Continuous prompt engineering and human verification
                      processes to ensure high-quality insights
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">System Scalability</span>
                    <p className="text-sm text-muted-foreground">
                      Cloud infrastructure with auto-scaling capabilities and
                      performance monitoring
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Data Security</span>
                    <p className="text-sm text-muted-foreground">
                      Robust encryption and secure processing of user content
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <AlertTriangle className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-4">Business Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">User Adoption</span>
                    <p className="text-sm text-muted-foreground">
                      Strong onboarding experience and clear value demonstration
                      through free trials
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Market Competition</span>
                    <p className="text-sm text-muted-foreground">
                      Maintain competitive edge through unique features and
                      superior UX
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Revenue Model</span>
                    <p className="text-sm text-muted-foreground">
                      Flexible pricing tiers and clear value proposition for
                      different user segments
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <AlertTriangle className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-4">Product Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Feature Complexity</span>
                    <p className="text-sm text-muted-foreground">
                      Focus on intuitive design and progressive feature rollout
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Content Processing</span>
                    <p className="text-sm text-muted-foreground">
                      Robust handling of various document formats and languages
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">User Experience</span>
                    <p className="text-sm text-muted-foreground">
                      Regular user testing and feedback incorporation
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <AlertTriangle className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-4">Operational Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Resource Management</span>
                    <p className="text-sm text-muted-foreground">
                      Efficient allocation of development and AI processing
                      resources
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Quality Assurance</span>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing protocols and monitoring systems
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Service Reliability</span>
                    <p className="text-sm text-muted-foreground">
                      Redundant systems and robust error handling
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Future Roadmap
            </h2>
            <p className="text-muted-foreground">
              Strategic development plan and timeline
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                Q1-Q2 2024: Foundation Phase
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Core Infrastructure</span>
                    <p className="text-sm text-muted-foreground">
                      • RAG pipeline implementation • Basic concept mapping •
                      Initial Q&A functionality
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">User Experience</span>
                    <p className="text-sm text-muted-foreground">
                      • Intuitive interface design • Document upload system •
                      Basic visualization tools
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                Q3-Q4 2024: Enhancement Phase
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Advanced Features</span>
                    <p className="text-sm text-muted-foreground">
                      • Enhanced visualization capabilities • Multi-document
                      processing • Advanced concept relationships
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Integration & Export</span>
                    <p className="text-sm text-muted-foreground">
                      • Note-taking system integration • Custom export formats •
                      Learning progress tracking
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                2025: Expansion Phase
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Platform Growth</span>
                    <p className="text-sm text-muted-foreground">
                      • Mobile application • Enterprise solutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Market Expansion</span>
                    <p className="text-sm text-muted-foreground">
                      • Educational partnerships • International markets •
                      Additional language support
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
