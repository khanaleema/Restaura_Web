import { CUSINES } from "../constants";

const Expertise = () => {
  return (
    <section id="expertise" className="py-12">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Expertise</h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-b-4 border-dotted border-neutral-700/40 py-8 md:flex-row md:items-start md:space-x-8"
          >
            <div className="text-center text-2xl font-semibold mb-4 md:mb-0 md:w-1/4">
              {cusine.number}
            </div>
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="w-full h-auto rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-black/50 rounded-3xl md:hidden"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:hidden">
                <h3 className="text-xl font-semibold uppercase tracking-tighter text-rose-300">
                  {cusine.title}
                </h3>
                <p className="mt-2 text-sm">{cusine.description}</p>
              </div>
            </div>
            <div className="hidden md:block md:pl-8 md:w-1/3">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">{cusine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
