import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftItems from "../Components/CraftItems";
import Review from "../Components/Review";
import Castomar from "../Components/Castomar";
import Categories from "../Components/Categories";

const Home = () => {
  const addItems = useLoaderData();

  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-5xl font-bold text-center">Craft items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {addItems.slice(0, 6).map((item) => (
            <CraftItems key={item._id} item={item}></CraftItems>
          ))}
        </div>
      </div>
      <div className="pt-10 pb-10">
        <h1 className="text-5xl font-bold text-center"> Art & Craft Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
          {
            addItems.slice(0,6).map((item) => (
              <Categories key={item._id} item={item}></Categories>
            ))
          }
        </div>
      </div>
      <div>
        <Review />
        <Castomar />
      </div>
    </div>
  );
};

export default Home;
