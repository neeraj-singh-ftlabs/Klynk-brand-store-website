"use client";
import TranslatedContent from "@/components/TranslatedComponent";
import ThemeToggle from "../components/ThemeToggle";
import ThemedComponent from "../components/ThemedComponent";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Button from "@/components/Layouts/Buttos/PrimaryButton";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Theme Context Example</h1>
      <ThemeToggle />
      <div className="mt-4">
        <ThemedComponent />
        <Button>This is a styled button</Button>
        <LanguageSwitcher />
        <TranslatedContent />
      </div>
    </main>
  );
}
