import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { user, logOut } = useAuth();
  // console.log("this is user::",user);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);

  const toggleTheme = (e) => {
    if(e.target.checked){
      setTheme("synthwave");
    }
    else{
      setTheme("light");
    }
    
  }
  // console.log(theme);

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
          <a className="btn btn-ghost text-xl md:text-3xl md:font-extrabold">
            Painting House
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{nabLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2 ">


              {/* theme */}
              <div>
                <label className="cursor-pointer grid place-items-center">
                  <input
                    onChange={toggleTheme}
                    type="checkbox"
                    // value="synthwave"
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  />
                  <svg
                    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </div>


              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  <div className="w-12">
                    <img
                      className="rounded-full "
                      src={user?.photoURL || "hello"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 pr-5"
                >
                  <li className="rounded-lg bg-green-300 border-2 border-slate-500">
                    <Link to="/profile" className="font-bold">
                      {user?.displayName || "not found"}
                    </Link>
                  </li>
                  <li className="font-bold">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="font-bold">
                    <Link onClick={logOut} className="btn btn-error text-white">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
              
              
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="btn bg-violet-400 text-white">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn bg-cyan-400 text-white">Register</button>
              </Link>
              <div>
                <label className="cursor-pointer grid place-items-center">
                  <input
                    onChange={toggleTheme}
                    type="checkbox"
                    // value="synthwave"
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  />
                  <svg
                    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </div>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
