// import { Link, useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";

const CraftItems = ({ item }) => {
  // const addItem = useLoaderData();

  const { 
    item_name,
    imageURL,
    subcategory_name,
    _id
    
   } = item;

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-5 mt-10 ml-3">
      

      <div className="flex flex-col items-center ">
        <div className="max-w-xs p-4 rounded-md shadow-md dark:bg-red-200 dark:text-gray-900">
          <img
            src={imageURL}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600 ">
              Category:  
              <span className="text-sm font-bold tracking-widest uppercase dark:text-default-600">
              {subcategory_name}.
              </span>

            </span>
            <h2 className="text-xl font-extrabold tracking-wide">
             {item_name}
            </h2>
          </div>
          <div>
            <Link to={`/ViewDetails/${_id}`}>
              <button className="btn bg-green-400 rounded-full w-full justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
