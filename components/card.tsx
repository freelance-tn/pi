import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  paragraph: string;
}

export const Card = ({ icon: Icon, title, paragraph }: CardProps) => {
  return (
    <div className="max-w-sm flex flex-col justify-center items-center p-10 shadow-2xl mx-8 my-4 space-y-4">
      <Icon size={64} className="bg-purple-500 text-white p-2 rounded-full" />
      <h1 className="text-2xl animate-fade-up">{title}</h1>
      <p className="text 3xl text-center animate-fade-up">{paragraph}</p>
    </div>
  );
};
