import heroImg from "../assets/wp9124200-4k-pc-car-neon-wallpapers.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[400px] lg:h-[700px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content duration-1000">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl  font-bold lg:font-extrabold text-white duration-700">
              Find Your <span className="text-primary">Perfect</span> Car
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
