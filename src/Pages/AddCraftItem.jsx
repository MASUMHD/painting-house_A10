const AddCraftItem = () => {
  return (
    <div className="mt-6 mb-8">
      <section className="p-6 rounded-2xl bg-emerald-200">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-sky-300">
            <div className="space-y-2 col-span-full lg:col-span-1 text-center mt-0 md:mt-32">
              <p className="font-bold text-3xl ">Painting house</p>
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
                  placeholder="Item name"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
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
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="qvp45n"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Short description
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="short_description"
                  placeholder="Short description"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="joguop"
                />
              </div>

              {/* done */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="qvp45n"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Customization
                </label>
                {/* <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="joguop"
                /> */}
                <select 
                id=""
                name="customization"
                placeholder="Select your customization"
                type="text"
                className="w-full p-2 rounded-md ">
                  <option value="celtic">Celtic your customization</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="qvp45n"
                />
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
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
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
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
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
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="e2hf8m"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Processing time
                </label>
                {/* <input
                  id="zip"
                  type=""
                  name="processing_time"
                  placeholder=" Processing time"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300"
                  fdprocessedid="k2ipla"
                /> */}
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
