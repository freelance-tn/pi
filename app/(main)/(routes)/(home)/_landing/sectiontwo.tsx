import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CryptoChart } from "./_component/chart";

const SectionTwo = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-evenly p-4 space-y-4">
      <div className="md:w-1/2">
        <CryptoChart />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-purple-700">
          Pi makes crypto mining easy.
        </h1>
        <p className="text-base">
          Revolutionary technology enables energy-efficient Pi mining on your
          mobile device.
        </p>

        <Button className="bg-purple-700 space-x-2 ">
          <Link href="https://minepi.com/white-paper/">
            <p>Learn The Tech Behind Pi </p>
          </Link>
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default SectionTwo;
