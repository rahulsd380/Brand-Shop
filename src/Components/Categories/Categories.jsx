import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
// import { FaArrowRight } from "react-icons/fa";
// import { LuView } from "react-icons/lu";
// import { Link } from "react-router-dom";
// import { IconAiFillShoppingName } from "react-icons/ai";
// import { BiSolidCommentDetail } from "react-icons/bi";
// import { BsBookmarkHeartFill } from "react-icons/bs";



const Categories = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/categorydata')
        .then(res => res.json())
        .then(data => {
            setCategoryData(data);
        })
    }, [])
    return (
        <div className="px-20">
            <div className="py-8">
                <h1 className="text-blue-700 text-3xl font-bold mb-4">Hot Categories</h1>
                <div className="flex items-center">
                    <div className="bg-blue-600 w-64 h-1"></div>
                    <div className="bg-slate-400 w-full h-1"></div>
                </div>
            </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                     categoryData.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                 }

           </div>
                
        </div>
    );
};

export default Categories;


// brand-shop
// zHO8F6iAizATKaKh