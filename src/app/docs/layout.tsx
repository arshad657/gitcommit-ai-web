import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s — gitcommit-ai Docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8 py-10">
            {/* Left sidebar */}
            <DocsSidebar />

            {/* Main content */}
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
