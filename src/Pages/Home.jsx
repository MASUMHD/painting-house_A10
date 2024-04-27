import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftItems from "../Components/CraftItems";

const Home = () => {
  const addItems = useLoaderData();

  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-5xl font-bold text-center">
          Craft items {addItems.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            addItems.slice(0, 6).map((item) => <CraftItems key={item._id} item={item}></CraftItems>)
         }
        </div>
         
      </div>

      <h1>This is Home </h1>
    </div>
  );
};

export default Home;
