import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const AddCraftItem = () => {
  const { user } = useAuth();

  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const user_Name = form.user_Name.value;
    const user_email = form.user_email.value;
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
      user_Name,
      user_email,
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

    // send data to server
    fetch('https://painting-house-server.vercel.app/addItems',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addItem)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title:'Success!',
                text:'Item added successfully',
                icon:'success',
                confirmButtonText:'Cool'
            })
        }
    })
  };

  return (
    <div className="mt-6 mb-8">
      <section className="p-6 rounded-2xl bg-emerald-200">
        <form
          onSubmit={handelSubmit}
          noValidate=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-sky-300">
            <div className="space-y-2 col-span-full lg:col-span-1 text-center mt-0 md:mt-40">
              <p className="font-bold text-3xl ">Painting house</p>
              <p className="text-lg">
                Commencing house painting. Colors swirl, brushes dance, walls
                narrate tales, turning home into a canvas, vibrant with life.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Your name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="user_Name"
                  defaultValue={user.displayName}
                  placeholder="Your name"
                  className="w-full p-2 rounded-md "
                  fdprocessedid="joguop"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Your email
                </label>
                <input
                  id="lastname"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  defaultValue={user?.email}
                  className="w-full p-2 rounded-md "
                  fdprocessedid="qvp45n"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Item name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="item_name"
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
                  placeholder=" Processing time"
                  className="w-full p-2 rounded-md"
                  fdprocessedid="k2ipla"
                />
              </div>

              <div className="col-span-full">
                <input
                  className="btn bg-rose-500 w-full"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddCraftItem;
