import Footer from "@/components/footer"
import Header from "@/components/header"


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      {/* Terms Content */}
      <main id="terms" className="bg-background">
        <div className="max-w-[880px] mx-auto mt-12 mb-12 px-5 pb-12">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Terms &amp; Conditions</h1>
            <p className="text-sm text-muted-foreground">Last updated: October 23, 2025</p>
          </header>

          <div className="bg-muted border border-muted-foreground rounded-xl p-4 md:p-5 my-5">
            <p className="text-[0.925rem] leading-6">
              These Terms &amp; Conditions ("Terms") govern your use of the Rewrapped iOS app (the "App"). By installing or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App. Please also review our <a href="/privacy" className="underline text-foreground">Privacy Policy</a> to understand how we handle information.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold mt-7">Acceptance of Terms</h2>
            <p className="mt-2">You must be able to form a binding contract and comply with these Terms and all applicable laws when using the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Eligibility &amp; Accounts</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You must maintain an active Spotify account to use core features.</li>
              <li>Connecting your Spotify account authorizes the App to perform actions you initiate (e.g., create/update playlists, set artwork) via the Spotify Web API.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">App Functionality</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The App helps you generate and manage playlists based on your listening data available from Spotify.</li>
              <li>Artwork you choose in the App may be uploaded to Spotify to set playlist covers.</li>
              <li>Features may change, be added, or removed at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">License to Use the App</h2>
            <p className="mt-2">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App for personal, non-commercial purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Acceptable Use</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Do not misuse the App, interfere with its normal operation, or attempt to access it using a method other than the interface and instructions we provide.</li>
              <li>Do not reverse engineer, decompile, or disassemble the App except to the extent permitted by law.</li>
              <li>Do not infringe the rights of others, including intellectual property rights, when creating playlist names, descriptions, or artwork.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Fees &amp; Purchases</h2>
            <p className="mt-2">Some features may be offered for free or for a fee. If we introduce paid features, we will disclose pricing and any additional terms within the App or at purchase. Taxes may apply where required.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Third-Party Services (Spotify)</h2>
            <p className="mt-2">
              The App interfaces with Spotify. Your use of Spotify is governed by Spotify’s terms and policies, including the
              <a
                href="https://www.spotify.com/legal/end-user-agreement/"
                target="_blank"
                rel="noreferrer"
                className="underline text-foreground"
              >
                Spotify End User Agreement
              </a>
              . We are not responsible for Spotify’s services, availability, or decisions affecting your account or data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Ownership &amp; Intellectual Property</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The App and all related content are owned by Rewrapped or its licensors and are protected by intellectual property laws.</li>
              <li>All Spotify trademarks, logos, and brand features are the property of Spotify AB and its affiliates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">User Content</h2>
            <p className="mt-2">You are responsible for any content you provide or generate through the App (e.g., playlist names, descriptions, and artwork) and for ensuring you have the necessary rights to use and upload such content to Spotify.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Feedback</h2>
            <p className="mt-2">If you submit feedback or suggestions, you grant us a non-exclusive, worldwide, royalty-free license to use it without obligation to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Disclaimers</h2>
            <p className="mt-2">THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the App will be uninterrupted, accurate, or error-free.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Limitation of Liability</h2>
            <p className="mt-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW, REWRAPPED AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR PROFITS, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Indemnification</h2>
            <p className="mt-2">You agree to indemnify and hold Rewrapped and its affiliates harmless from any claims, losses, liabilities, damages, and expenses (including reasonable attorneys’ fees) arising from your use of the App or violation of these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Termination</h2>
            <p className="mt-2">We may suspend or terminate your access to the App at any time, with or without notice, including if we reasonably believe you have violated these Terms. You may stop using the App at any time. Certain provisions survive termination, including Ownership, Disclaimers, Limitation of Liability, and Indemnification.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Changes to the App or Terms</h2>
            <p className="mt-2">We may update these Terms from time to time. We will update the “Last updated” date above and may communicate changes in an app release or on our website. Your continued use of the App after changes become effective constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Governing Law</h2>
            <p className="mt-2">These Terms are governed by the laws of the State of California, USA, without regard to its conflict of laws principles. The courts located in San Francisco County, California shall have exclusive jurisdiction, and you consent to personal jurisdiction there.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Contact Us</h2>
            <p className="mt-2">
              If you have questions about these Terms, contact us at
              {" "}
              <a href="mailto:rewrapped@kylewhirl.com" className="underline text-foreground">rewrapped@kylewhirl.com</a>.
            </p>
          </section>

          <footer className="mt-7 text-sm text-muted-foreground">
            <p>© 2025 Rewrapped. All rights reserved.</p>
          </footer>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}