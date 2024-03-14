import Image from "next/image";
import logo from "@/images/4-small.png";
import github from "@/images/github.svg";
import linkedin from "@/images/linkedin.svg";
import { Link } from "@nextui-org/react";
import { footerLink } from "@/contants/index";
export default function Footer() {
  return (
    <footer className="padding-x py-5 mt-3">
      <div className="flex flex-wrap max-lg:flex-col items-start gap-4 justify-between">
        <div className="flex flex-col items-start">
          <a href="/">
            <Image src={logo} alt="logo" width={50} height={46} />
          </a>
          <p className="mt-6 text-base text-white-400 sm:max-w-sm">
            Empower your words, amplify your voice.
          </p>
          <p>
            <span className="text-red-300">Write. Share. Inspire.</span>
          </p>
          <div className="flex items-center gap-5 mt-8">
            <Link
              href="https://github.com/ArpitBlagan"
              className="bg-white rounded-full p-2"
            >
              <Image src={github} alt="github logo" width={20} height={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arpit-blagan-79081b193/"
              className="bg-white rounded-full p-2"
            >
              <Image
                src={linkedin}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-10 max-md:gap-5">
          {footerLink.map((ele, index) => {
            return (
              <div className="flex flex-col items-start  gap-5" key={ele.title}>
                <h1 className="text-2xl font-semibold">{ele.title}</h1>
                <div className="flex flex-col">
                  {ele.links.map((ee) => (
                    <Link href={ee.link} key={ee.name}>
                      {ee.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
