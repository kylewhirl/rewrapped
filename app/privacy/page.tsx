import Footer from "@/components/footer"
import Header from "@/components/header"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      {/* Privacy Content */}
      <main id="privacy" className="bg-background">
        <div className="max-w-[880px] mx-auto mt-12 mb-12 px-5 pb-12">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: October 21, 2025</p>
          </header>

          <div className="bg-muted border border-muted-foreground rounded-xl p-4 md:p-5 my-5">
            <p className="text-[0.925rem] leading-6">
              This Privacy Policy explains how Rewrapped (“we”, “us”, or “our”) handles information when you use the Rewrapped iOS app (the “App”).
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold mt-7">Summary</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The App connects to your Spotify account using Spotify’s official OAuth.</li>
              <li>We do <strong>not</strong> run a backend that collects your personal data. Tokens are stored securely on your device (Keychain).</li>
              <li>Your playlist artwork is processed on-device and uploaded directly to Spotify when you choose to sync.</li>
              <li>We do not sell or share your data with third parties for advertising.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Information We Access</h2>
            <p className="mt-2">With your permission, the App may access the following through the Spotify Web API:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Basic account information (e.g., user ID, display name) to show your profile and attribute playlists to your account.</li>
              <li>Your top tracks and related metadata in selected timeframes, to build and update playlists.</li>
              <li>Playlist details you own or collaborate on, to create, rename, update descriptions, replace tracks, add tracks, and set artwork.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">How We Use This Information</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Authenticate you with Spotify (OAuth).</li>
              <li>Generate or update playlists according to your selections.</li>
              <li>Set playlist cover images you choose in the App.</li>
              <li>Show status and results inside the App (e.g., playlist URIs, track counts).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Local Storage &amp; Security</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Spotify access and refresh tokens are stored in the iOS Keychain.</li>
              <li>Artwork selected in the App is processed on-device and sent directly to Spotify when you tap update.</li>
              <li>We recommend using a device passcode/Face ID/Touch ID to protect your device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Data Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. Data flows to Spotify only as necessary to perform actions you request (e.g., creating or updating your playlists, uploading artwork). Spotify’s handling of data is governed by its own policies. See
              {" "}
              <a
                href="https://www.spotify.com/legal/privacy-policy/"
                target="_blank"
                rel="noreferrer"
                className="underline text-foreground"
              >
                Spotify’s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Retention</h2>
            <p className="mt-2">
              Tokens are retained on your device until you sign out or delete the App. Playlist data lives in your Spotify account and is subject to Spotify’s retention practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Your Choices</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Revoke access:</strong> You can sign out in the App at any time, which clears tokens from your device.</li>
              <li><strong>Spotify account controls:</strong> You can manage connected apps in your Spotify account settings.</li>
              <li><strong>Delete the App:</strong> Removing the App from your device deletes local data held by the App.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Children’s Privacy</h2>
            <p className="mt-2">
              The App is not directed to children under 13. If you believe a child provided us information, contact us and we will assist with removal steps.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">International Users</h2>
            <p className="mt-2">
              Your use of Spotify’s services may involve transfers of information per Spotify’s policies. Rewrapped does not operate servers for this App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. We will update the “Last updated” date above and include changes in a subsequent app release or on our website, if applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-7">Contact Us</h2>
            <p className="mt-2">
              If you have questions or requests about this Privacy Policy, contact us at
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