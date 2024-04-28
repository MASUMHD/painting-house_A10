import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const vewItem = useLoaderData();
  console.log(vewItem);

  const {
    item_name,
    subcategory_name,
    short_description,
    customization,
    stockStatus,
    imageURL,
    price,
    rating,
    processing_time,
  } = vewItem;

  return (
    <div className="mt-2 mb-8">
      <div>
        <div className="p-4 shadow-md dark:bg-red-100 dark:text-gray-800 rounded-lg">
          <div className="flex justify-between pb-1 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={imageURL}
                alt=""
                className="block object-cover object-center w-full rounded-md h-[550px] dark:bg-gray-500"
              />
              <div className="flex items-center text-xl">
                <span>
                  <span className="font-semibold text-lg">Time:</span>{" "}
                  {processing_time}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-3xl bg-teal-300 w-[300px] text-center p-2 border-b-4 border-red-400 rounded-full -ml-2 font-bold dark:text-default-600">
                  {subcategory_name}
                </h3>
                <hr className=" border-2 border-green-400 mt-5 border-dashed" />
                <h3 className="text-3xl font-bold dark:text-default-600 my-4">
                  <span className="text-2xl border-b-4 border-red-400">
                    Drawing Name:
                  </span>{" "}
                  {item_name}
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-600 pb-2">
                <span className="font-semibold border-b-2 border-red-400 ">
                  {" "}
                  Description:
                </span>{" "}
                <br /> {short_description}
              </p>
              <div className="flex items-center text-xl pb-2">
                <span className="font-semibold border-b-2 border-red-400 ">
                  {" "}
                  Customization:
                </span>{" "} <span className="ml-2 text-2xl">{customization}.</span>
              </div>
              <div className="flex items-center text-xl pb-2">
                <span className="font-semibold border-b-2 border-red-400 ">
                  {" "}
                  Stock Status:
                </span>{" "} <span className="ml-2 text-2xl">{stockStatus}.</span>
              </div>
              <div className="flex items-center bg-green-200 w-[200px] rounded-full px-3 py-2 pb-3">
                <h1 className="text-xl">
                  <span className="font-semibold text-lg">Rating:</span>{" "}
                  {rating}
                </h1>
                <span className="ml-2 text-lg">⭐⭐⭐</span>
              </div>

              <h3 className="text-3xl  bg-rose-400 w-[250px] text-center p-2 border-b-4 border-blue-400 rounded-full -ml-2 font-bold dark:text-default-600">
                Price: ${price}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
