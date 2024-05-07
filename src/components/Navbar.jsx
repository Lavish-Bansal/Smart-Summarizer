import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-30 h-10" />
      </nav>
      <h1 className="head_text">
        Summarize your article with <br className="max-md:hidden" />
        <span style={{ color: "rgb(152,105,47)" }}>Smart Summarizer </span>
      </h1>
    </header>
  );
};

export default Navbar;
