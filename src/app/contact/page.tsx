import Nav from "../_components/Nav";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      <div className="mt-4 py-12 text-center bg-white text-black">
        <p>You can contact us through the following methods:</p>
        <ul className="mt-4">
          <li>Email: iBall247.llc@gmail.com</li>
          <li>
            Phone:{" "}
            <a href="tel:7576173334" className="underline">
              757-617-3334
            </a>
          </li>
          <li>
            Address:{" "}
            <address>
              404 Davis Street Suite 101
              <br />
              Virginia Beach, VA 23462
            </address>
          </li>
        </ul>
        <div className="flex justify-center py-8">
          <Image
            src="/iBall247_Full.png"
            alt="iball247 full"
            className="w-auto "
            width={124}
            height={50}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
