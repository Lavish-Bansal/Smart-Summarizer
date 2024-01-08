import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </nav>

      <h1 className="head_text">
        Summarize Reading with <br className="max-md:hidden" />
        <span className="orange_gradient">Smart Summarizer </span>
      </h1>
      <h2 className="desc">
        Unleash the power of our advanced AI algorithms to swiftly distill
        complex articles, crafting tailored summaries that capture the wisdom
        within.
      </h2>
    </header>
  );
};

export default Hero;
