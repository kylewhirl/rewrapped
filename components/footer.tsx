import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
    {/* CTA Section */}
      <section id="download" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Start listening to your favorites today
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of music lovers who never wait for December to see their listening stats
            </p>
            <div className="flex flex-col flex-row gap-4 justify-center pt-4">
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
                      className="w-7 h-7 mr-2"
                    />
                    Download from App Store
                  </a>
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-4">Free to download • No Spotify Premium required</p>
          </div>
        </div>
      </section>
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="icon.png"
                alt="Rewrapped"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-sm text-muted-foreground">© 2025 Rewrapped. All rights reserved.</span>
            </div>
            <div className="flex gap-8">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="mailto:rewrapped@kylewhirl.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}
