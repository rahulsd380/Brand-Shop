import { FaArrowRight } from "react-icons/fa";
import { LuView } from 'react-icons/lu';
import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {
    const {img, title,subtitle1,subtitle2, subtitle3, subtitle4 } = category;
    return (
        <div>
                        <div className="w-80 px-6 bg-slate-300 py-4 rounded-lg">
                <div>
                    <img className="w-full" src={img} alt="" />
                    <h1 className="text-2xl font-bold hover:text-blue-600 mb-2">{title}</h1>
                    <ul>
                        <li className="flex items-center gap-3"><FaArrowRight></FaArrowRight>{subtitle1}</li>
                        <li className="flex items-center gap-3"><FaArrowRight></FaArrowRight>{subtitle2}</li>
                        <li className="flex items-center gap-3"><FaArrowRight></FaArrowRight>{subtitle3}</li>
                        <li className="flex items-center gap-3"><FaArrowRight></FaArrowRight>{subtitle4}</li>
                    </ul>
                </div>

                <div className="grid grid-cols-4 mt-3">
                    <div className="bg-slate-200 drop-shadow-lg text-2xl w-10 h-10 rounded-full flex justify-center items-center"><LuView></LuView></div>
                    <div className="bg-slate-200 drop-shadow-lg text-2xl w-10 h-10 rounded-full flex justify-center items-center"><LuView></LuView></div>
                    <div className="bg-slate-200 drop-shadow-lg text-2xl w-10 h-10 rounded-full flex justify-center items-center"><LuView></LuView></div>
                    <div className="bg-slate-200 drop-shadow-lg text-2xl w-10 h-10 rounded-full flex justify-center items-center"><LuView></LuView></div>
                </div>

                <div>
                    <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center justify-center mt-4 drop-shadow-xl w-full">
                    View Items
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;