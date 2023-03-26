// import Navbar from "../components/Navbar"

const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* HERO SECTION */}
      <section className="flex items-center flex-col text-white bg-purple-600 py-40">
        <h1 className="text-6xl pt-20 font-bold">Skill Tracker</h1>
        <h2 className="text-2xl">Start Learning Something New Today!</h2>
        <button
          className="justify-center border cursor-pointer px-5 py-2 my-10 rounded-3xl text-lg bg-white text-purple-600"
          onClick={() => console.log('button clicked')} // Connect to sign-in modal
        >
          Sign Up Now!
        </button>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 pt-20 pb-40">
        <h2 className="text-center text-2xl font-bold">Features</h2>
        <div className="flex justify- text-purple-900">
          <img src="../public/images/" alt="" />
          <div className="p-20">
            <h2 className="text-center text-xl mb-3">
              Ability to Track Multiple Skills
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi adipisci fuga quasi explicabo beatae saepe, minus
              molestias necessitatibus doloribus quas? Corporis soluta corrupti
              reiciendis, tempora doloremque beatae cumque commodi odit aut
              omnis quos quidem. Obcaecati tenetur voluptas accusamus ullam
              nobis.
            </p>
          </div>
          <div className="p-20">
            <h2 className="text-center text-xl mb-3">
              Log Amount of Time Spent on Each Skill
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              minus quisquam facere architecto ducimus assumenda saepe
              consequuntur dolores nam excepturi laboriosam, natus non
              reiciendis dicta maxime id quia ex officia quis. Mollitia
              obcaecati animi hic accusantium temporibus corporis molestiae
              alias.
            </p>
          </div>
          <div className="p-20">
            <h2 className="text-center text-xl mb-3">Track Your Progress on Each Skill</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              minus quisquam facere architecto ducimus assumenda saepe
              consequuntur dolores nam excepturi laboriosam, natus non
              reiciendis dicta maxime id quia ex officia quis. Mollitia
              obcaecati animi hic accusantium temporibus corporis molestiae
              alias.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="flex flex-col items-center pt-20 pb-40 bg-purple-200">
        <h2 className="text-2xl font-bold mb-10">Testimonials</h2>
        <div className="w-1/4">
          <h3 className="text-xl font-semi-bold ">Testimonial Title</h3>
          <p className="text-gray-600 italic leading-8">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            nesciunt aut laudantium repudiandae laborum placeat. Cupiditate
            temporibus repudiandae quod recusandae quia, praesentium qui minima
            quasi voluptates, magnam quisquam, voluptatibus vitae?"
          </p>
          <p className="mt-2 mb-10 text-right">-Testimonial Author</p>

          <h3 className="text-xl font-semi-bold ">Testimonial Title</h3>
          <p className="text-gray-600 italic leading-8">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            nesciunt aut laudantium repudiandae laborum placeat. Cupiditate
            temporibus repudiandae quod recusandae quia, praesentium qui minima
            quasi voluptates, magnam quisquam, voluptatibus vitae?"
          </p>
          <p className="mt-2 mb-10 text-right">-Testimonial Author</p>

          <h3 className="text-xl font-semi-bold ">Testimonial Title</h3>
          <p className="text-gray-600 italic leading-8">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            nesciunt aut laudantium repudiandae laborum placeat. Cupiditate
            temporibus repudiandae quod recusandae quia, praesentium qui minima
            quasi voluptates, magnam quisquam, voluptatibus vitae?"
          </p>
          <p className="mt-2 mb-10 text-right">-Testimonial Author</p>

          <h3 className="text-xl font-semi-bold ">Testimonial Title</h3>
          <p className="text-gray-600 italic leading-8">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            nesciunt aut laudantium repudiandae laborum placeat. Cupiditate
            temporibus repudiandae quod recusandae quia, praesentium qui minima
            quasi voluptates, magnam quisquam, voluptatibus vitae?"
          </p>
          <p className="mt-2 mb-10 text-right">-Testimonial Author</p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
