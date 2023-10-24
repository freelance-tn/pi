import { text } from "@/app/(main)/_components/_const/routes";

import { Card } from "@/components/card";

import { Footer } from "@/app/(main)/_components/footer";

import SectionThree from "@/app/(main)/(routes)/(home)/_landing/sectionthree";
import SectionTwo from "@/app/(main)/(routes)/(home)/_landing/sectiontwo";
import LandingPage from "@/app/(main)/(routes)/(home)/_landing/landing";
import SectionOne from "@/app/(main)/(routes)/(home)/_landing/section-one";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LandingPage />

      <SectionOne />

      <SectionTwo />
      {/* <TwoGrid /> */}
      <section className="py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {text.map((route) => (
            <Card
              key={route.title}
              icon={route.icon}
              title={route.title}
              paragraph={route.paragraph}
            />
          ))}
        </div>
      </section>

      <SectionThree />
            
      <Footer />
    </main>
  );
}
