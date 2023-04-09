import heroImage from "../../images/skills2.png";

const Hero = () => {
  return (
    <section className="flex items-center flex-col h-screen text-white bg-purple-600 py-40">
      <img src={heroImage} alt="" className="w-56" />
      <h1 className="text-6xl pt-20 font-bold">Skill Tracker</h1>
      <h2 className="text-2xl">Start Learning Something New Today!</h2>
      <button
        className="justify-center cursor-pointer px-5 py-2 my-10 rounded-3xl text-lg bg-white text-purple-600 hover:bg-gray-500 hover:text-black active:bg-gray-600"
        onClick={() => console.log("button clicked")} // Connect to sign-in modal
      >
        Sign Up Now!
      </button>
    </section>
  );
};

export default Hero;
