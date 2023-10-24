import { Button } from "@/components/ui/button";
import Divider from "./_component/divider";


const SectionOne = () => {
  return (
    <div className="bg-[#783A8C] flex items-center justify-center mb-8
     flex-col  text-sm  space-y-2 px-2 py-6 md:text-xl 
     font-semibold text-white">
      
      <p className="text-center md:text-justify">Mastering crypto mining is a formidable challenge.</p>
      <p className="text-center md:text-justify">Engaging in crypto investments carries substantial risks.</p>
      <p className="text-center md:text-justify">
        A significant portion of the population remains excluded from the
        cryptocurrency revolution.
      </p>
      
      <Divider />
    </div>
  );
};

export default SectionOne;
