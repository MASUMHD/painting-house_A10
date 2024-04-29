import { Link } from "react-router-dom";

const Categories = ({ item }) => {

    // const handelClick = ( Categories) => {
    //   console.log("Categories");

    //   fetch(`http://localhost:5000/my/${Categories}`
    //   )
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // }

    // onClick={() => handelClick(item.subcategory_name)}

  return (
    <div 
    className=" rounded-full">
      <Link to={`/subcategory/${item.subcategory_name}`}>
        <div className="rounded-xl shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800">
          
          <img
            src={item.imageURL}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="p-3">
            <div>
              <h3 className="text-lg font-semibold"><span className="font-bold"> Category: </span> {item.subcategory_name}</h3>
              <h3 className="text-lg font-semibold"><span className="font-bold"> Painting Name: </span> {item.item_name}</h3>
            </div>
            
           
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
