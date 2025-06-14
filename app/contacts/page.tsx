import GoogleContacts from "@/components/google-contacts"
import SectionTitle from "@/components/section-title"

export default function ContactsPage() {
  return (
    <main className="pt-24 pb-20 bg-gradient-to-br from-[#f0f0ff] to-[#ffe0f0] dark:from-[#0a0a20] dark:to-[#1a1a40] min-h-screen px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Google Contacts"
          subtitle="Connect to your Google account to access and manage your contacts"
        />

        <div className="mt-12">
          <GoogleContacts />
        </div>
      </div>
    </main>
  )
}
