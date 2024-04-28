import { Link, useLoaderData } from "react-router-dom";

const AllArts = () => {
  const addAllTable = useLoaderData();

  return (
    <div>
      <div>
        <div className="overflow-x-auto mt-5 mb-8 rounded-xl bg-green-200">
          <table className="table">
            {/* head */}
            <thead className="bg-base-300">
              <tr className="text-black text-xl">
                <th></th>
                <th>Name</th>
                <th>Subcategory Name</th>
                <th>Price</th>
                <th>Rating</th>
                <th>More Details</th>
              </tr>
            </thead>

            {/* row 1 */}
            {addAllTable.map((item, index) => (
              <tbody key={item._id}>
                <tr className="bg-base-200 text-lg">
                  <th> {index + 1}</th>
                  <td>{item.item_name}</td>
                  <td>{item.subcategory_name}</td>
                  <td>${item.price}</td>
                  <td>{item.rating}</td>
                  <td>
                    <Link to={`/ViewDetails/${item._id}`}>
                      <button className="btn w-28 rounded-full bg-rose-500 text-white hover:bg-green-400 hover:text-white">Details</button>
                    </Link>
                  </td>
                </tr>
                <hr className="border-2" />
              </tbody>
            ))}
          </table>
        </div>
      </div>

    </div>
  );
};

export default AllArts;
