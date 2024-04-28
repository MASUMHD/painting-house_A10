import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtsCraftList = () => {
  const { user } = useAuth();
  // console.log( user );
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myArts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArts(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/addItems/${_id}`, {
            method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                console.log(data);
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
              const remaining = arts.filter((art) => art._id !== _id);
              setArts(remaining);
            }
          })
        }
      });
      
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
     
      {arts.map((arts) => (
        <p key={arts._id} className="ml-5"><div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-5 mt-10 ">
        <div className="flex flex-col items-center ">
          <div className="max-w-xs p-4 rounded-md shadow-md dark:bg-red-200 dark:text-gray-900">
            <img
              src={ arts.imageURL}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            
            
            <div className="flex items-center justify-between mb-2 mt-6">
                <div className="flex items-center p-2 bg-cyan-300 rounded-full">
                    <h3 className="text-lg font-bold tracking-wide">Price: ${arts.price}</h3>
                </div>
                <div className="flex items-center p-2 bg-rose-400 rounded-full">
                    <h3 className="text-lg font-bold tracking-wide">Rating: {arts.rating}</h3>
                </div>
            </div>
            <div className="mt-2 mb-2">
              <h2 className="text-xl font-extrabold tracking-wide">
                { arts.item_name}
              </h2>
            </div>
            <div className="mb-2">
                <div>
                    <h3 className="text-lg font-bold tracking-wide">Customization: {arts.customization}</h3>
                </div>
                <div>
                    <h3 className="text-lg font-bold tracking-wide">StockStatus: {arts.stockStatus}</h3>
                </div>
            </div>
            
            <div className="flex items-center justify-around">
              <Link to={`/update/${arts._id}`}>
                <button className="btn bg-green-400 rounded-full  justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white">
                  Update
                </button>
              </Link>
              <div to="">
                <button onClick={() => handleDelete(arts._id)}
                 className="btn bg-red-500 rounded-full  justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></p>
      ))}
      
    </div>
  );
};

export default MyArtsCraftList;
