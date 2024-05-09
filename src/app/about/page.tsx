// pages/about.tsx

// import NavbarLayout from "../_components/Navbar";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="mt-9 flex flex-col w-full">
      <h1 className="text-2xl font-bold text-center  ">About Us</h1>
      <p className="  mt-4 text-center bg-white text-black ">
        Welcome to our about page! Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi.
      </p>
      <div className="flex justify-center py-8 bg-white">
          <Image
            src="/iBall247_Full.png"
            alt="iball247 full"
            className="w-auto"
            width={124}
            height={50}
            quality={100}
            
          />
        </div>
    </div>
  );
};

export default AboutPage;
