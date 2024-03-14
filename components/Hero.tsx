import img from "@/images/4-small.png";
import curve from "@/images/curve.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex justify-center text-center h-screen items-center">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full">
          <Image src={curve} alt="curve" className="object-fill" />
        </div>
        <p className="max-md:text-4xl max-lg:text-[55px] text-[75px]">
          Welcome to the future of blogging, where creativity meets efficiency
          in our groundbreaking platform -
        </p>
        <div className="flex justify-center items-center gap-4">
          <h1>Piro</h1>
          <Image src={img} alt="logo" width={50} height={50} />
        </div>
        <div className="w-full">
          <Image src={curve} alt="curve" className="object-fill" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
