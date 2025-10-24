"use client";

import { Button } from "@/components/ui/button"
import type React from "react"
import { usePathname } from "next/navigation"


export default function Header() {
  const pathname = usePathname();
  const onAnchorClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return; // not on home — allow normal navigation to /#id
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    try { history.pushState(null, "", `#${id}`); } catch {}
  };
  return (
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src="icon.png"
                alt="Rewrapped"
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-xl font-semibold text-foreground">Rewrapped</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href={pathname === "/" ? "#home" : "/#home"}
                onClick={onAnchorClick("home")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href={pathname === "/" ? "#features" : "/#features"}
                onClick={onAnchorClick("features")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href={pathname === "/" ? "#faq" : "/#faq"}
                onClick={onAnchorClick("faq")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
            </nav>
            <div className="group relative inline-flex z-0">
              <span className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0 [background:radial-gradient(100%_100%_at_50%_50%,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0.08)_40%,transparent_70%)] dark:[background:radial-gradient(100%_100%_at_50%_50%,rgba(15,23,42,0.6)_0%,rgba(15,23,42,0.3)_45%,transparent_80%)]"></span>
              <Button
                asChild
                className="bg-[#E9F5FC] hover:bg-[#E6F3FB] text-foreground rounded-sm px-4 font-medium shadow-sm border border-[#DCE9F7] relative z-10 transition-colors dark:bg-gradient-to-b dark:from-[#0B2748] dark:via-[#0D2F60] dark:to-[#103A7A] dark:hover:from-[#13458E] dark:hover:via-[#1652A3] dark:hover:to-[#1A60BA] dark:text-white dark:border-[#1E3A8A] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(30,58,138,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 dark:focus-visible:ring-[#3B82F6] dark:focus-visible:ring-offset-0"
              >
                <a href="https://apps.apple.com/us/app/rewrapped/id6754272094" rel="noopener noreferrer">
                  <img
                    src="app-store.png"
                    alt="App Store"
                    className="w-4 h-4"
                  />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>
  )
}
