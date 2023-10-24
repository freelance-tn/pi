import { Converter } from "@/app/(main)/_components/converter";
import Image from "next/image";

const LandingPage = () => {
  return (
    <section
      className="min-h-screen flex justify-around flex-col md:items-center md:flex-row space-y-8 p-4 bg-cover bg-center relative"
      style={{ backgroundImage: 'url("home.jpg")' }}
    >
      <div className="md:ml-6 mt-4 space-y-8 md:w-1/2">
        <div>
          <h1 className="text-5xl font-bold text-white relative z-10 animate-fade-up ">
            The Premier Mobile-Mined Digital Currency
          </h1>
          <h3 className="text-lg font-semibold text-white relative z-10 animate-fade-up">
            Start Mining Pi Cryptocurrency Today with Our Free, Energy-Efficient
            Mobile App!
          </h3>
        </div>
        <div className="flex flex-col space-y-2 items-center md:mr-96 md:flex-row animate-fade">
          <Converter />
          <div className="flex md:hidden items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/MsOaC61cR3U"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex">
        <Image height={800} width={400} src="/pi-phone.png" alt="phone" />
      </div>
    </section>
  );
};

export default LandingPage;
