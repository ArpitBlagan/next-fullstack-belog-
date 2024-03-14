import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Question from "@/components/Questions";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="max-container">
      <section className=" min-h-screen padding-x">
        <Hero />
      </section>
      <section className="padding-x pb-5">
        <h1 className="text-4xl max-md:text-2xl text-center my-2">Blogs</h1>
        <Blog />
        <div className="flex justify-center my-2">
          <Link href="/" className="text-xl ">
            See More
          </Link>
        </div>
      </section>
      <section className="padding-x pb-5">
        <h2 className="text-4xl max-md:text-2xl text-center mb-2">
          What make you better? ( motivation lelo guys )
        </h2>
        <Question />
      </section>
      <section
        id="about"
        className="padding-x pb-5 flex flex-col justify-center"
      >
        <h1 className="text-4xl max-md:text-2xl mb-2 text-center">
          About the App
        </h1>
        <About />
      </section>
    </main>
  );
}
