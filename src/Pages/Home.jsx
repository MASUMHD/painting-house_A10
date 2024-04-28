import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftItems from "../Components/CraftItems";

const Home = () => {
  const addItems = useLoaderData();

  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-5xl font-bold text-center">
          Craft items 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            addItems.slice(0, 6).map((item) => <CraftItems key={item._id} item={item}></CraftItems>)
         }
        </div>
      </div>
      <Link to="/allarts" className="flex justify-center mt-10 mb-10">
        <button className="btn rounded-full bg-rose-500 w-[150px] text-white hover:bg-green-400 hover:text-white  ">View All...</button>
      </Link>

      
    </div>
  );
};

export default Home;
