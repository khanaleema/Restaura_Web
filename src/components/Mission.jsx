import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold lg:text-4xl">Our Mission</h2>
        <div className="relative flex items-center justify-center">
          {/* Corrected video tag */}
          <video
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
          >
            <source src={mission} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Black overlay */}
          <div className="absolute top-0 left-0 h-full w-full rounded-3xl bg-black/40"></div>

          {/* Mission Text */}
          <p className="absolute z-10 max-w-lg text-lg font-medium text-white tracking-tighter lg:text-3xl">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
