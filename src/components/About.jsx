import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="container mx-auto mb-16 px-4" id="about">
      {/* Section Heading */}
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        About Us
      </h2>

      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        {/* Image Section with Zoom-in Effect */}
        <div className="w-full p-4 lg:w-1/2">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={about}
              alt="About Us"
              className="rounded-3xl transform transition-transform duration-500 ease-in-out hover:scale-105 object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full mt-8 px-2 lg:mt-0 lg:w-1/2 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">
            {ABOUT.header}
          </h2>
          <div className="my-4 h-1 w-40 bg-rose-300 lg:my-6"></div>
          <p className="text-lg leading-relaxed tracking-tight text-white-700 lg:max-w-lg lg:text-2xl">
            {ABOUT.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
