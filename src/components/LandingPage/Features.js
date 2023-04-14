import { Link } from "react-router-dom";
import multiple from "../../images/multiple.png"
import progress from "../../images/progress.png"
import time from "../../images/time.png"

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus
quisquam facere architecto ducimus assumenda saepe consequuntur
dolores nam excepturi laboriosam, natus non reiciendis dicta maxime
id quia ex officia quis. Mollitia obcaecati animi hic accusantium
temporibus corporis molestiae alias.`

const Features = () => {
  return (
    <section className="bg-gray-200 pt-20 pb-40">
      <h2 className="text-center text-2xl font-bold">Features</h2>
      <div className="flex justify-evenly items-center text-purple-900 sm:flex-wrap lg:flex-nowrap">
        <div className="p-20 flex flex-col">
          <img src={multiple} alt="" className="w-20 self-center mb-5" />
          <h2 className="text-center text-xl mb-3">
            Ability to Track Multiple Skills
          </h2>
          <p className="text-gray-500 leading-6">
            {description}
          </p>
          <Link to={"/auth"} state={{isLoggingIn:false}} className="mt-10 text-center">
            Sign Up!
          </Link>
        </div>
        <div className="p-20 flex flex-col">
          <img src={time} alt="" className="w-20 self-center mb-5" />
          <h2 className="text-center text-xl mb-3">
            Log Amount of Time Spent on Each Skill
          </h2>
          <p className="text-gray-500 leading-6">
           {description}
          </p>
          <Link to={"/auth"} state={{isLoggingIn:false}} className="mt-10 text-center">
            Sign Up!
          </Link>
        </div>
        <div className="p-20 flex flex-col">
          <img src={progress} alt="" className="w-20 self-center mb-5" />
          <h2 className="text-center text-xl mb-3">
            Track Your Progress on Each Skill
          </h2>
          <p className="text-gray-500 leading-6">
            {description}
          </p>
          <Link to={"/auth"} state={{isLoggingIn:false}} className="mt-10 text-center">
            Sign Up!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
