import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  // console.log("this is user::",user);

  const nabLinks = (
    <>
      <li className="text-base mr-2">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="text-base mr-2">
        <NavLink to="/allarts">All Art & craft Items</NavLink>
      </li>

      <li className="text-base mr-2">
        <NavLink to="/AddCraftItem">Add Craft Item</NavLink>
      </li>
      <li className="text-base mr-2">
        <NavLink to="/MyArtsCraftList">My Art&Craft List</NavLink>
      </li>
    </>
  );

  return (
    <div className="rounded-2xl mt-2 border-2 border-emerald-400   ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nabLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl md:font-extrabold">Painting House</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{nabLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  <div className="w-12">
                    <img className="rounded-full " src={user?.photoURL || "hello"} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="rounded-lg bg-green-300 border-2 border-slate-500">
                    <Link to="/profile" className="font-bold">
                      {user?.displayName || "not found"}
                    </Link>
                  </li>
                  <li className="font-bold">
                    <Link to="/profile">Profile</Link>
                  </li>
                  {/* <li className="font-bold">
                    <Link to="/updateProfile">Update profile</Link>
                  </li> */}
                </ul>
              </div>
              <button 
              onClick={logOut} 
              className="btn btn-error text-white">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="btn bg-violet-400 text-white">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn bg-cyan-400 text-white">
                  Register
                </button>
              </Link>
            </div>
          )}

          {/* <Link className="btn">Login</Link>
          <Link className="btn">Register</Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
