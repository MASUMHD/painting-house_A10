import { useLoaderData } from "react-router-dom";
import CraftItems from "../Components/CraftItems";


const AllArts = () => {

    const addItems = useLoaderData();

    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {
            addItems.map((item) => <CraftItems key={item._id} item={item}></CraftItems>)
         }
        </div>
        </div>
    );
};

export default AllArts;