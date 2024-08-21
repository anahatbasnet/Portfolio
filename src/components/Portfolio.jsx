import coverecommerce from "../assets/coverecommerce.png";
import coverweather from "../assets/coverweather.png";
import carcompanion from "../assets/carcompanion.png";
import bikerental from "../assets/cover bikerental.jpg";
import meetingscheduler from "../assets/meetingscheduler.jpg";
import membertracker from "../assets/membertracker.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: coverecommerce,
    },
    {
      id: 2,
      src: carcompanion,
    },
    {
      id: 3,

      src: bikerental,
    },
    {
      id: 4,

      src: coverweather,
    },
    {
      id: 5,
      src: meetingscheduler,
    },
    {
      id: 6,
      src: membertracker,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  ">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 md:h-[10rem] md:w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
