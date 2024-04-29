

import { useLoaderData } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Update = () => {
//   const { user } = useAuth();

  const updateArt = useLoaderData();
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
    _id,
  } = updateArt;

  const handelUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const imageURL = form.imageURL.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;

    const addItem = {
      
      item_name,
      subcategory_name,
      short_description,
      customization,
      stockStatus,
      imageURL,
      price,
      rating,
      processing_time,
    };
    console.log(addItem);

    fetch(`https://painting-house-server.vercel.app/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      {/* <h1>Update {updateArt.item_name}</h1> */}
      <div className="mt-6 mb-8">
        <section className="p-6 rounded-2xl bg-emerald-200">
          <form
            onSubmit={handelUpdate}
            noValidate=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-yellow-200">
              <div className="space-y-2 col-span-full lg:col-span-1 text-center mt-0 md:mt-40">
                <p className="font-bold text-3xl ">Painting house Update </p>
                <p className="text-lg">
                  Commencing house painting. Colors swirl, brushes dance, walls
                  narrate tales, turning home into a canvas, vibrant with life.
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Item name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="item_name"
                    defaultValue={item_name}
                    placeholder="Item name"
                    className="w-full p-2 rounded-md "
                    fdprocessedid="joguop"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Subcategory name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="subcategory_name"
                    defaultValue={subcategory_name}
                    placeholder="Subcategory name"
                    className="w-full p-2 rounded-md "
                    fdprocessedid="qvp45n"
                  />
                </div>
                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-sm">
                    Short description
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="short_description"
                    defaultValue={short_description}
                    placeholder="Short description"
                    className="w-full p-2 rounded-md "
                    fdprocessedid="joguop"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Customization
                  </label>

                  <select
                    id=""
                    name="customization"
                    defaultValue={customization}
                    placeholder="Select your customization"
                    type="text"
                    className="w-full p-2 rounded-md "
                  >
                    <option value="celtic">Celtic your customization</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Stock Status
                  </label>

                  <select
                    id=""
                    name="stockStatus"
                    defaultValue={stockStatus}
                    placeholder="Select your Stock Status"
                    type="text"
                    className="w-full p-2 rounded-md "
                  >
                    <option value="celtic">Celtic your Stock Status</option>
                    <option value="inStock">In stock</option>
                    <option value="outOfStock">out of stock</option>
                  </select>
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Image URL
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="imageURL"
                    defaultValue={imageURL}
                    placeholder="Image URL"
                    className="w-full p-2 rounded-md "
                    fdprocessedid="9o4c6o"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-sm">
                    Price
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder=" Price"
                    className="w-full p-2 rounded-md "
                    fdprocessedid="8exqeg"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="state" className="text-sm">
                    Rating
                  </label>
                  <input
                    id="state"
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder=" Rating"
                    className="w-full p-2 rounded-md "
                    fdprocessedid="e2hf8m"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip" className="text-sm">
                    Processing time
                  </label>

                  <input
                    id="zip"
                    type="time"
                    name="processing_time"
                    defaultValue={processing_time}
                    placeholder=" Processing time"
                    className="w-full p-2 rounded-md"
                    fdprocessedid="k2ipla"
                  />
                </div>

                <div className="col-span-full">
                  <input
                    className="btn bg-rose-500 w-full"
                    type="submit"
                    value="Update"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Update;
