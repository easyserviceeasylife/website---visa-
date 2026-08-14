import HeroSection from "./hero/HeroSection";
import HowWeHelpSection from "./how-we-help/HowWeHelpSection";
import HowItWorksSection from "./how-it-works/HowItWorksSection";
import ClientStoriesSection from "./client-stories/ClientStoriesSection";
import MeetPaulSection from "./meet-paul/MeetPaulSection";
import FAQSection from "./faq/FAQSection";
import ContactSection from "./contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowWeHelpSection />
      <HowItWorksSection />
      <ClientStoriesSection />
      <MeetPaulSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
