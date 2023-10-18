import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-3 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="../../../public/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-3 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="../../../public/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-3 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="../../../public/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-3 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="../../../public/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
// 