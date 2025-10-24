import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Music2Icon, CalendarIcon, TrendingUpIcon, BookText } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="home">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground">
              <span>Now available for</span>
              <span className="font-semibold text-foreground">iOS and iPadOS</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Your Spotify Wrapped, all year long
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Get personalized playlists that update automatically. Track your music taste across different time periods
              and never wait for December again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="group relative inline-flex z-0">
                <span className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0 [background:radial-gradient(100%_100%_at_50%_50%,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0.08)_40%,transparent_70%)] dark:[background:radial-gradient(100%_100%_at_50%_50%,rgba(15,23,42,0.6)_0%,rgba(15,23,42,0.3)_45%,transparent_80%)]"></span>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-b from-[#E9F5FC] via-[#E8F2FC] to-[#ECF3FC] hover:from-[#E6F3FB] hover:via-[#E5F0FB] hover:to-[#EAF2FC] text-foreground rounded-2xl px-6 h-14 text-base font-medium shadow-sm border border-[#DCE9F7] relative z-10 transition-colors dark:bg-gradient-to-b dark:from-[#0B2748] dark:via-[#0D2F60] dark:to-[#103A7A] dark:hover:from-[#13458E] dark:hover:via-[#1652A3] dark:hover:to-[#1A60BA] dark:text-white dark:border-[#1E3A8A] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(30,58,138,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 dark:focus-visible:ring-[#3B82F6] dark:focus-visible:ring-offset-0"
                >
                  <a href="https://apps.apple.com/us/app/rewrapped/id6754272094" rel="noopener noreferrer">
                    <img
                      src="app-store.png"
                      alt="App Store"
                      className="w-6 h-6 mr-2"
                    />
                    Download from App Store
                  </a>
                </Button>
              </div>
              <div className="group relative inline-flex z-0">
                <span className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0 [background:radial-gradient(100%_100%_at_50%_50%,hsl(var(--accent)/0.18)_0%,hsl(var(--accent)/0.08)_40%,transparent_70%)] dark:[background:radial-gradient(100%_100%_at_50%_50%,hsl(var(--accent-foreground)/0.25)_0%,hsl(var(--accent-foreground)/0.15)_40%,transparent_75%)]"></span>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-background hover:bg-muted/50 rounded-2xl px-6 h-14 text-base font-medium border border-border/50 relative z-10 transition-colors dark:border-accent/30 dark:hover:bg-muted/40"
                >
                  <a href="#features">
                    <Music2Icon className="w-7 h-7 text-accent dark:text-accent-foreground" />
                    See playlists
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Trusted by music lovers worldwide</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-accent dark:fill-accent-foreground" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-foreground">4.9 out of 5</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-sm lg:max-w-md overflow-visible">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 rounded-3xl translate-y-6 bg-gradient-to-b from-black/20 via-black/15 to-transparent blur-3xl opacity-80 dark:from-black/60 dark:via-black/35 dark:opacity-100"
              />
              <img
                src="app.png"
                alt="Rewrapped App Interface"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20 lg:py-32 scroll-mt-24 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Four playlists, endless discovery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rewrapped automatically generates and updates your playlists based on your listening habits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-colors dark:hover:border-accent-foreground/40">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-accent-foreground/20 flex items-center justify-center mb-6">
                <img
                  src="short_term.png"
                  alt="Short Term"
                  className="w-14 h-14 rounded-sm"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Short Term Tracks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your top tracks from the last 4 weeks. Perfect for discovering what you're currently obsessed with.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-colors dark:hover:border-accent-foreground/40">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-accent-foreground/20 flex items-center justify-center mb-6">
                <img
                  src="mid_term.png"
                  alt="Medium Term"
                  className="w-14 h-14 rounded-sm"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Medium Term Tracks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your top tracks from the last 6 months. See how your taste evolves throughout the seasons.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-colors dark:hover:border-accent-foreground/40">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-accent-foreground/20 flex items-center justify-center mb-6">
                <img
                  src="long_term.png"
                  alt="Long Term"
                  className="w-14 h-14 rounded-sm"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Long Term Tracks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your top tracks from the past year. Your all-time favorites that define your musical identity.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-colors dark:hover:border-accent-foreground/40">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-chart-2 dark:from-accent-foreground flex items-center justify-center mb-6">
                <img
                  src="wrapped.png"
                  alt="Wrapped"
                  className="w-14 h-14 rounded-sm"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Rewrapped</h3>
              <p className="text-muted-foreground leading-relaxed">
                All your Spotify Wrapped playlists combined into one huge collection. Every year, all in one place.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 scroll-mt-24 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">FAQ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Quick answers to common questions about Rewrapped.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="auto-updates">
                <AccordionTrigger>Does this update playlists automatically?</AccordionTrigger>
                <AccordionContent>
                  Yes. Set up a simple automation in Apple’s Shortcuts app to run daily and trigger the <em>Update Playlists</em> action. You can also refresh manually anytime in the app.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="premium">
                <AccordionTrigger>Do I need Spotify Premium?</AccordionTrigger>
                <AccordionContent>
                  No. Spotify Premium is <strong>not</strong> required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="what-it-creates">
                <AccordionTrigger>Which playlists does it create?</AccordionTrigger>
                <AccordionContent>
                  Choose the timeframes you want. Short Term (last ~4 weeks), Medium Term (last ~6 months), Long Term (last ~12 months), or All‑time. Rewrapped builds playlists with cover art and descriptions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="refresh-behavior">
                <AccordionTrigger>What happens when I refresh?</AccordionTrigger>
                <AccordionContent>
                  Each refresh clears the previous tracks and repopulates your playlists with your current top songs for the selected ranges. Your playlist links stay the same.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="permissions">
                <AccordionTrigger>What permissions does Rewrapped request?</AccordionTrigger>
                <AccordionContent>
                  Sign in with Spotify OAuth. With your consent, the app can view your top tracks and manage playlists on your behalf (create, rename, update descriptions, replace/add tracks, and set artwork).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger>Where is my data stored?</AccordionTrigger>
                <AccordionContent>
                  Rewrapped doesn’t run a data‑collecting backend. Your Spotify tokens are stored in the iOS Keychain. Artwork is processed on‑device and uploaded directly to Spotify when you choose to sync.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
