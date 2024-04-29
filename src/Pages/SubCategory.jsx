import { Link, useLoaderData } from "react-router-dom";

const SubCategory = () => {
  const subCategory = useLoaderData();
  console.log(subCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6  mb-10 p-3">
      {subCategory.map((item) => (
        <div className="" key={item._id}>
          <div className=" max-w-[800px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-5 mt-10 ml-0">
            <div className="flex flex-col items-center ">
              <div className="max-w-[800px] p-4 rounded-md shadow-md dark:bg-red-200 dark:text-gray-900">
                <img
                  src={item.imageURL}
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600 ">
                    Category:
                    <span className="text-sm font-bold tracking-widest uppercase dark:text-default-600">
                      {item.subcategory_name}.
                    </span>
                  </span>
                  <h2 className="text-xl font-extrabold tracking-wide">
                    {item.item_name}
                  </h2>
                </div>
                <div>
                  <p className="leading-snug dark:text-gray-600 pb-2">
                    <span className="font-semibold border-b-2 border-red-400 ">
                      {" "}
                      Description:
                    </span>{" "}
                    <br /> {item.short_description.slice(0, 200)}
                  </p>
                </div>
                <div className="flex items-center justify-around mb-8 mt-6">
                  <div className="flex items-center p-2 bg-cyan-300 rounded-full">
                    <h3 className="text-lg font-bold tracking-wide">
                      Price: ${item.price}
                    </h3>
                  </div>
                  <div className="flex items-center p-2 bg-rose-400 rounded-full">
                    <h3 className="text-lg font-bold tracking-wide">
                      Rating: { item.rating}
                    </h3>
                  </div>
                </div>
                <div>
                  <Link to={`/ViewDetails/${item._id}`}>
                    <button className="btn bg-green-400 rounded-full w-full justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategory;
