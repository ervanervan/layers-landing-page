import Button from "@/components/Button";
import design1Image from "@/assets/images/design-example-1.png";
import design2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={design1Image} alt="Design 1 image" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={design2Image} alt="Design 2 image" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Ervan" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Captain" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="py-1 px-3 inline-flex text-neutral-950 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 rounded-full">
            ✨$7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Create stunning designs effortlessly using intuitive tools that bring
          your creative ideas to life, making every project impactful and
          unique.
        </p>
        <form className="flex justify-between border border-white/15 p-2 rounded-full mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 w-48 md:flex-1 rounded-full focus:outline-none"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
