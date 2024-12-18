import {
  BadgeCheck,
  Users,
  Zap,
  Brain,
  Target,
  AlertTriangle,
  Rocket,
  Clock,
  Sparkles,
  Globe,
  Apple,
  Download,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

export default function LifeWikiProduct() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">LifeWiki</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["Web3", "Mobile", "Knowledge Management"].map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          A decentralized collaboration platform for content creators to build
          their digital influence and monetize their content.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.lifewiki.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105"
          >
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 
                text-purple-700 font-medium px-6 py-2 rounded-full shadow-md 
                hover:shadow-lg border-2 border-purple-200 transition-all duration-300"
            >
              ✨ Visit Website ✨
            </Button>
          </a>

          <a
            href="https://apps.apple.com/us/app/lifewiki/id1635640563"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105"
          >
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 
                text-purple-700 font-medium px-6 py-2 rounded-full shadow-md 
                hover:shadow-lg border-2 border-purple-200 transition-all duration-300"
            >
              🌟 Download on App Store 🌟
            </Button>
          </a>

          <a
            href="/pdf/lifewiki-portfolio.pdf"
            download="LifeWiki-Portfolio.pdf"
            className="transform transition-transform hover:scale-105"
          >
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 
                text-purple-700 font-medium px-6 py-2 rounded-full shadow-md 
                hover:shadow-lg border-2 border-purple-200 transition-all duration-300"
            >
              💫 Download Portfolio 💫
            </Button>
          </a>
        </div>
      </div>

      {/* All existing sections wrapped in max-w-4xl container */}
      <div className="max-w-4xl mx-auto">
        {/* The Challenge Section - keep all original content */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              The Challenge
            </h2>
            <p className="text-muted-foreground">
              Nano content creators face significant barriers in building digital
              influence and monetizing their content, despite having valuable
              contributions to make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Users className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Limited Resources
              </h3>
              <p className="text-sm text-muted-foreground">
                Individual creators struggle to match the quality and consistency
                of professional teams
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Clock className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Time Constraints
              </h3>
              <p className="text-sm text-muted-foreground">
                Balancing content creation with other commitments leads to
                inconsistent posting
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Zap className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Complex Monetization
              </h3>
              <p className="text-sm text-muted-foreground">
                Difficulty in establishing fair compensation for collaborative
                work
              </p>
            </div>
          </div>
        </section>

        {/* Research & Discovery Section - keep all original content */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Research & Discovery
            </h2>
            <p className="text-muted-foreground">
              Comprehensive user research involving 50 nano content creators
              revealed key insights about their needs and challenges.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Findings</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Creators want professional benefits without leaving current
                      lifestyle
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Fair reward distribution is crucial for collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Content ideation and creation assistance is highly valued
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Community support increases motivation and consistency
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Research Methods</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• In-depth user interviews</li>
                    <li>• Behavior analysis</li>
                    <li>• Content creation pattern study</li>
                    <li>• Competitive analysis</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Pain Points Identified
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Time management struggles</li>
                    <li>• Content quality concerns</li>
                    <li>• Monetization complexity</li>
                    <li>• Lack of consistent support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas Section - keep all original content */}
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
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">
                    Busy Student Creator
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    20-year-old UC Berkeley student balancing academics with
                    content creation aspirations
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Goals
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Build personal brand while studying</li>
                    <li>• Generate side income</li>
                    <li>• Connect with like-minded creators</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Frustrations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited time for content creation</li>
                    <li>• Lacks professional resources</li>
                    <li>• Uncertain content strategy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Marcus Kim</h3>
                  <p className="text-sm text-muted-foreground">
                    Part-time Creative
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    24-year-old software engineer wanting to share knowledge while
                    maintaining career
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Goals
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Share technical expertise</li>
                    <li>• Build community</li>
                    <li>• Monetize knowledge</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Frustrations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lacks creation motivation</li>
                    <li>• Content quality concerns</li>
                    <li>• Consistency challenges</li>
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
              LifeWiki provides an intuitive and powerful personal knowledge
              management system that adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <Brain className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Smart Organization
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">DAO Creation</span>
                    <p className="text-sm text-muted-foreground">
                      Launch themed content communities with automated token
                      generation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">AI-Powered Tools</span>
                    <p className="text-sm text-muted-foreground">
                      Content suggestions and optimization assistance
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Smart Contracts</span>
                    <p className="text-sm text-muted-foreground">
                      Automated reward distribution and contribution tracking
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <Sparkles className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Seamless Experience
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Fair Compensation</span>
                    <p className="text-sm text-muted-foreground">
                      Transparent reward system based on contribution
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Community Growth</span>
                    <p className="text-sm text-muted-foreground">
                      Collaborative environment for shared success
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Time Efficiency</span>
                    <p className="text-sm text-muted-foreground">
                      Streamlined creation process with AI assistance
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Journey */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              User Journey
            </h2>
            <p className="text-muted-foreground">
              The path from joining to becoming an active contributor
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-100 -translate-y-1/2"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="font-semibold mt-4 mb-2">Discovery</h4>
                <p className="text-sm text-muted-foreground">
                  User discovers platform through community events
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="font-semibold mt-4 mb-2">Onboarding</h4>
                <p className="text-sm text-muted-foreground">
                  Creates account and explores platform features
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="font-semibold mt-4 mb-2">Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  Joins DAOs and starts collaborative creation
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h4 className="font-semibold mt-4 mb-2">Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Builds influence and earns rewards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Impact */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Impact & Metrics
            </h2>
            <p className="text-muted-foreground">
              Helping users organize their digital lives more effectively
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2000+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Active Users
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
                <Target className="h-8 w-8 text-purple-600 mb-3" />
                <div className="text-3xl font-bold text-purple-600">10%</div>
                <h3 className="font-semibold mb-2">Retention Rate</h3>
                <p className="text-sm text-muted-foreground">
                  30-day user retention showing strong platform engagement
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
                <Users className="h-8 w-8 text-purple-600 mb-3" />
                <div className="text-3xl font-bold text-purple-600">15-20</div>
                <h3 className="font-semibold mb-2">Avg DAO Size</h3>
                <p className="text-sm text-muted-foreground">
                  Optimal group size for effective collaboration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Implementation Process
            </h2>
            <p className="text-muted-foreground">
              Development roadmap and execution strategy
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                Phase 1: MVP Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Core Functionality</span>
                    <p className="text-sm text-muted-foreground">
                      DAO creation, content posting, and token generation system
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Basic Features</span>
                    <p className="text-sm text-muted-foreground">
                      User authentication, content management, and reward tracking
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">
                Phase 2: Enhancement & Scaling
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Advanced Features</span>
                    <p className="text-sm text-muted-foreground">
                      AI content assistance, analytics dashboard, and enhanced
                      governance
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-medium">Platform Scaling</span>
                    <p className="text-sm text-muted-foreground">
                      Infrastructure optimization and performance improvements
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
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <AlertTriangle className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-4">Technical Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Smart Contract Security</span>
                    <p className="text-sm text-muted-foreground">
                      Regular audits and bug bounty programs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Blockchain Integration</span>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing and gradual feature rollout
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <AlertTriangle className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-4">Business Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">User Adoption</span>
                    <p className="text-sm text-muted-foreground">
                      Community-driven growth and strong value proposition
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Token Economics</span>
                    <p className="text-sm text-muted-foreground">
                      Carefully designed incentive structure and vesting periods
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
              Planned enhancements and expansion strategy
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Short-term Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Enhanced AI content creation tools</li>
                  <li>• Mobile app development</li>
                  <li>• Cross-DAO collaboration features</li>
                  <li>• Advanced analytics dashboard</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Long-term Vision</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Global creator community expansion</li>
                  <li>• Integration with major platforms</li>
                  <li>• Enhanced monetization options</li>
                  <li>• Creator education programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
