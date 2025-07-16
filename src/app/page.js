'use client'
import { HomeTestimonials } from "@/components/testimonials";
import CTABanner from "@/components/CTABanner";
import { Herosection } from "@/components/Herosection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import HomeServices from "@/components/HomeServices";


export default function HomePage() {
  return (
    <div className="text-center space-y-4">
      <Herosection />
      <WhyChooseUs />
      <HomeTestimonials />
      <HowItWorks />

      <HomeServices />
      <CTABanner />
    </div>
  );
}
