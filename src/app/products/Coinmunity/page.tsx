"use client";
import {
  BadgeCheck,
  Users,
  AlertTriangle,
  Rocket,
  Smartphone,
  DollarSign,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function CoinmunityPortfolio() {
  const [showModal, setShowModal] = useState(false);

  const handleAppAccess = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Add Dialog component */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Beta Testing Access</DialogTitle>
            <DialogDescription>
              Coinmunity is currently in beta testing. Please email{" "}
              <a
                href="mailto:steven.yujunchen@berkeley.edu"
                className="text-purple-600 hover:underline"
              >
                steven.yujunchen@berkeley.edu
              </a>{" "}
              for TestFlight access.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Product Header */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Coinmunity</h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          A mobile-first platform for Gen Z to discover, trade, and engage with
          memecoins through a simplified, community-driven experience.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["Mobile-First", "Web3", "Gen Z", "Social Trading"].map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-purple-100 text-purple-800 px-4 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {/* Call to Action */}
        <section className="mt-20 text-center space-y-6">
          {/* <h2 className="text-2xl font-bold">
            Join the Future of Memecoin Trading
          </h2> */}
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the easiest way to trade memecoins on your phone. Join
            our community and be part of the next generation of traders.
          </p> */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              onClick={handleAppAccess}
              className="transform transition-transform hover:scale-105"
            >
              <Button
                variant="secondary"
                className="bg-white bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 
                  text-blue-700 font-medium px-6 py-2 rounded-full shadow-md 
                  hover:shadow-lg border-2 border-blue-200 transition-all duration-300"
              >
                ✨ Request Beta Access ✨
              </Button>
            </a>
          </div>
        </section>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto">
        {/* The Challenge Section */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              The Challenge
            </h2>
            <p className="text-muted-foreground">
              Current tools for trading memecoins present significant barriers
              for mainstream adoption, particularly among Gen Z users who desire
              simple, mobile-first solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Users className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Complex User Experience
              </h3>
              <p className="text-sm text-muted-foreground">
                Existing platforms require technical knowledge and complex
                wallet management
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <DollarSign className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Payment Friction
              </h3>
              <p className="text-sm text-muted-foreground">
                Difficult onboarding and withdrawal processes create barriers to
                entry
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <Smartphone className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Limited Mobile Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Poor mobile experiences don't match Gen Z's preferred way of
                trading
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
              We conducted extensive research with 30+ crypto-native users to
              understand their needs and pain points in the memecoin trading
              experience.
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
                      Users want immediate access to trending memecoins without
                      technical complexity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Community engagement drives trading decisions and platform
                      loyalty
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Mobile-first experience is crucial for capturing Gen Z
                      users
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Simple payment methods (Apple Pay, Credit Card) are
                      essential
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Research Methods</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• User interviews with crypto natives</li>
                    <li>• Competitive analysis of trading platforms</li>
                    <li>• Gen Z trading behavior study</li>
                    <li>• Payment flow analysis</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Pain Points Identified
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Complex wallet management</li>
                    <li>• Difficult fund transfers</li>
                    <li>• Poor mobile trading experience</li>
                    <li>• Lack of community features</li>
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
              Based on our research, we identified key user types that represent
              our target audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Persona */}
            <div className="bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Emily</h3>
                  <p className="text-sm text-muted-foreground">
                    Ambitious Economics Student
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    20-year-old economics major interested in applying classroom
                    knowledge to real-world investments
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Goals
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Learn about crypto markets</li>
                    <li>• Make small investments</li>
                    <li>• Stay ahead of trends</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Frustrations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complex trading platforms</li>
                    <li>• Technical barriers to entry</li>
                    <li>• Limited mobile options</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Continue with second persona... */}
            {/* Second Persona */}
            <div className="bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Liam</h3>
                  <p className="text-sm text-muted-foreground">
                    Social Media Enthusiast
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    19-year-old communications student active on social media,
                    follows crypto trends and meme culture
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Goals
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Be part of trending movements</li>
                    <li>• Share investment success</li>
                    <li>• Connect with like-minded traders</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-purple-600 mb-2">
                    Frustrations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Missing out on trends</li>
                    <li>• Complicated payment processes</li>
                    <li>• Lack of social features</li>
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
              Coinmunity provides a seamless mobile-first platform that
              simplifies memecoin trading while fostering community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-border">
              <Smartphone className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Simplified Trading Experience
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Easy Payments</span>
                    <p className="text-sm text-muted-foreground">
                      Apple Pay, credit cards, and PayPal integration
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Embedded Wallet</span>
                    <p className="text-sm text-muted-foreground">
                      Simplified Solana wallet management
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">One-Click Trading</span>
                    <p className="text-sm text-muted-foreground">
                      Fast and intuitive trading interface
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F5D37A]/5 via-[#D852C3]/5 to-[#4997F2]/5 p-6 rounded-xl shadow-sm border border-border">
              <Users className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Community Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Real-time Trends</span>
                    <p className="text-sm text-muted-foreground">
                      Live updates on popular memecoins and market movements
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Social Trading</span>
                    <p className="text-sm text-muted-foreground">
                      Follow and learn from successful traders
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Community Insights</span>
                    <p className="text-sm text-muted-foreground">
                      Discussion forums and trading signals
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* App Screenshots */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Image
                src="/coinmunity/Home.png"
                alt="Buy interface showing payment options"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />
              <Image
                src="/coinmunity/Trading1.png"
                alt="Embedded wallet interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />
              <Image
                src="/coinmunity/Trading2.png"
                alt="Trading interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />
              <Image
                src="/coinmunity/Trading3.png"
                alt="Community features interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />{" "}
              <Image
                src="/coinmunity/coin-details.png"
                alt="Community features interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />{" "}
              <Image
                src="/coinmunity/Home-black.png"
                alt="Community features interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />{" "}
              <Image
                src="/coinmunity/onboarding.png"
                alt="Community features interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />{" "}
              <Image
                src="/coinmunity/sell.png"
                alt="Community features interface"
                width={300}
                height={600}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Technical Implementation
            </h2>
            <p className="text-muted-foreground">
              Key technical features and architecture decisions
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F5D37A]/10 via-[#D852C3]/10 to-[#4997F2]/10 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Core Technologies
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <span className="font-medium">Solana Blockchain</span>
                      <p className="text-sm text-muted-foreground">
                        Fast and low-cost transactions for seamless trading
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <span className="font-medium">
                        Mobile-First React Native
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Cross-platform mobile application development
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <span className="font-medium">Embedded Wallet SDK</span>
                      <p className="text-sm text-muted-foreground">
                        Secure and user-friendly crypto wallet management
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <span className="font-medium">Payment Integration</span>
                      <p className="text-sm text-muted-foreground">
                        Multiple payment methods including Apple Pay and credit
                        cards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <span className="font-medium">Real-time Market Data</span>
                      <p className="text-sm text-muted-foreground">
                        Live price feeds and market analytics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <span className="font-medium">Social Features</span>
                      <p className="text-sm text-muted-foreground">
                        Community engagement and trading signals
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
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
              The path from discovery to active memecoin trading
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
                  Sees trending memecoin on social media
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="font-semibold mt-4 mb-2">Onboarding</h4>
                <p className="text-sm text-muted-foreground">
                  Quick sign-up with mobile number or email
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="font-semibold mt-4 mb-2">First Trade</h4>
                <p className="text-sm text-muted-foreground">
                  Easily buys memecoin with Apple Pay
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h4 className="font-semibold mt-4 mb-2">Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  Joins community discussions and follows trends
                </p>
              </div>
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
              Key challenges and mitigation strategies
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
                    <span className="font-medium">Wallet Integration</span>
                    <p className="text-sm text-muted-foreground">
                      Robust testing and security audits of embedded wallet
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Payment Processing</span>
                    <p className="text-sm text-muted-foreground">
                      Multiple payment providers for redundancy
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
                      Focus on viral growth and community building
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium">Market Volatility</span>
                    <p className="text-sm text-muted-foreground">
                      Clear risk warnings and educational content
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Roadmap */}
        <section className="space-y-6 mt-16">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Development Roadmap
            </h2>
            <p className="text-muted-foreground">
              Planned features and expansion strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-purple-600 mb-4">
                Phase 1: MVP
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Basic trading functionality</li>
                <li>• Apple Pay integration</li>
                <li>• Embedded Solana wallet</li>
                <li>• Community features</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-purple-600 mb-4">
                Phase 2: Growth
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Advanced trading features</li>
                <li>• Social trading implementation</li>
                <li>• Additional payment methods</li>
                <li>• Enhanced analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-purple-600 mb-4">
                Phase 3: Expansion
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-chain support</li>
                <li>• Advanced community tools</li>
                <li>• Creator tools and APIs</li>
                <li>• International expansion</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CoinmunityPortfolio;
