import Link from "next/link"
import Navbar from "@/components/navbar"
import VideoGrid from "@/components/video-grid"
import { ArrowRight, Play, ChevronDown, Zap, Sparkles, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F3F3] overflow-hidden">
      <Navbar />

      <div className="relative min-h-screen">

        <div className="absolute inset-0 opacity-50">
          <VideoGrid />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F3F3]/70 via-[#F4F3F3]/40 to-[#F4F3F3]/70 z-0"></div>

        <div className="relative min-h-screen flex flex-col justify-center items-center px-6 z-10 pt-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero section */}
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 border border-[#D3D1CF] rounded-full bg-[#F8F8F7]/90 mb-4 shadow-md">
                <span className="text-[#1D1C1B] text-sm font-medium">Powered by Twelve Labs</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1C1B] leading-tight tracking-tight [text-shadow:_0_1px_3px_rgba(255,255,255,0.7)] whitespace-nowrap">
                Discover Content That{" "}
                <span className="text-[#00E21B] [text-shadow:_0_1px_2px_rgba(255,255,255,0.5)]">Matters</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#1D1C1B] max-w-2xl mx-auto font-medium leading-relaxed [text-shadow:_0_1px_2px_rgba(255,255,255,0.7)]">
                AI-powered video recommendations that understand your preferences and deliver content you'll love.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center gap-2 bg-[#00E21B] text-[#1D1C1B] px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transform transition-all"
                >
                  Explore Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-[#F8F8F7] text-[#1D1C1B] border border-[#D3D1CF] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F4F3F3] transition-all shadow-sm"
                >
                  <Play className="h-5 w-5" />
                  How It Works
                </Link>
              </div>
            </div>

            {/* Scroll indicator - adjust position */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-[#1D1C1B]" />
            </div>
          </div>
        </div>

        {/* Enhanced Features Section - improve spacing and design */}
        <div className="relative z-10 py-24 px-6 bg-[#F4F3F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#F8F8F7] text-[#00E21B] rounded-full text-sm font-medium mb-4 shadow-sm">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1C1B] mb-4">
                Discover the Power of AI Recommendations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D3D1CF] hover:border-[#00E21B]/30 transition-all duration-300 hover:shadow-xl bg-[#F8F8F7]">
                {/* Visual element */}
                <div className="h-40 bg-[#F4F3F3] flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-[#00E21B] flex items-center justify-center relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-10 w-10 text-[#F8F8F7]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D1C1B] mb-2">Smart Recommendations</h3>
                  <p className="text-[#1D1C1B]/80 text-sm">
                    Marengo retreival 2.7 embedded content discovery from Qdrant that learns from your preferences and viewing habits.
                  </p>
                  <Link
                    href="/features/recommendations"
                    className="mt-4 inline-flex items-center text-[#00E21B] font-medium hover:text-[#00E21B]/80 text-sm"
                  >
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D3D1CF] hover:border-[#00E21B]/30 transition-all duration-300 hover:shadow-xl bg-[#F8F8F7]">
                {/* Visual element */}
                <div className="h-40 bg-[#F4F3F3] flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-[#00E21B] flex items-center justify-center relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-10 w-10 text-[#F8F8F7]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D1C1B] mb-2">Customizable Experience</h3>
                  <p className="text-[#1D1C1B]/80 text-sm">
                    Fine tune your content feed with personalized categories and preferences.
                  </p>
                  <Link
                    href="/features/personalization"
                    className="mt-4 inline-flex items-center text-[#00E21B] font-medium hover:text-[#00E21B]/80 text-sm"
                  >
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D3D1CF] hover:border-[#00E21B]/30 transition-all duration-300 hover:shadow-xl bg-[#F8F8F7]">
                {/* Visual element */}
                <div className="h-40 bg-[#F4F3F3] flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-[#00E21B] flex items-center justify-center relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-10 w-10 text-[#F8F8F7]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D1C1B] mb-2">Lightning Fast</h3>
                  <p className="text-[#1D1C1B]/80 text-sm">
                    Instant recommendations powered by Twelve Labs embedding technology.
                  </p>
                  <Link
                    href="/features/performance"
                    className="mt-4 inline-flex items-center text-[#00E21B] font-medium hover:text-[#00E21B]/80 text-sm"
                  >
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-Minimal Footer */}
        <footer className="bg-[#F8F8F7] py-6 px-6 relative z-10 border-t border-[#D3D1CF]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <div className="flex items-center">
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 204 146.6"
                  width="24px"
                  height="24px"
                  className="mr-2"
                >
                  <defs>
                    <style>{`.st0 { fill: #1d1c1b; }`}</style>
                  </defs>
                  <rect className="st0" x="43.9" y="50.3" width="64.3" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" y="50.3" width="35.3" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="124.1" y="50.3" width="40.3" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="129.9" y="37.8" width="34.5" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="168.9" y="37.8" width="27.3" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="157.3" y="25" width="31.1" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="167.1" y="12.5" width="9.2" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="74.3" y="112.6" width="15.9" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="101.8" y="112.6" width="10.4" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="117" y="112.6" width="28" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="131" y="100.1" width="11.6" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="52.4" y="112.6" width="9.2" height="9" rx="2.6" ry="2.6"></rect>
                  <path
                    className="st0"
                    d="M94.7,127.7c0-1.4,1.1-2.6,2.6-2.6h4c1.4,0,2.6,1.1,2.6,2.6v3.9c0,1.4-1.1,2.6-2.6,2.6h-4c-1.4,0-2.6-1.1-2.6-2.6v-3.9Z"
                  ></path>
                  <rect className="st0" x="85.8" y="137.6" width="8.7" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="120.4" width="11.4" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="55.8" y="37.8" width="29" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="109.7" y="12.5" width="17.6" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="98" width="17.6" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="98.8" y="25" width="28.5" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="187.4" y="50.3" width="16.6" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="30.6" y="62.8" width="82.1" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="105.1" y="87.8" width="32.1" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="43.9" y="75.3" width="104.3" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="27.9" y="87.8" width="38.8" height="8.7" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="63.3" y="100.1" width="12.7" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="108.1" y="100.1" width="13.7" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="39.8" y="100.1" width="12.9" height="9" rx="2.6" ry="2.6"></rect>
                  <rect className="st0" x="124.1" y="62.8" width="33.1" height="8.7" rx="2.6" ry="2.6"></rect>
                </svg>
                <span className="text-[#1D1C1B] font-semibold text-sm">Content Reccommender</span>
                <span className="mx-3 text-[#D3D1CF]">|</span>
                <span className="text-[#1D1C1B]/60 text-xs">© {new Date().getFullYear()} All rights reserved</span>
              </div>

              <div className="flex items-center gap-x-6 text-xs">
                <Link href="/about" className="text-[#1D1C1B]/70 hover:text-[#1D1C1B] transition-colors">
                  About
                </Link>
                <Link href="/privacy" className="text-[#1D1C1B]/70 hover:text-[#1D1C1B] transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#1D1C1B]/70 hover:text-[#1D1C1B] transition-colors">
                  Terms
                </Link>
                <div className="flex space-x-3 ml-2">
                  {["facebook", "twitter", "github"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[#1D1C1B]/50 hover:text-[#1D1C1B] transition-colors"
                      aria-label={`${social} link`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === "facebook" && (
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        )}
                        {social === "twitter" && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {social === "github" && (
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.923.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

