import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocalLogin from "../Components/SocalLogin";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuth();
  const [Error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    // console.log(data)
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        if(result.user){
            navigate(from)
        }
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
      });
        // console.log(result.user);
      })
      .catch((error) => {
        // console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password or Email is not correct. Please register first!",
          footer: '<a href="#">Why do I have this issue?</a>'
      });
        setError(error.message);
      });
  };

  return (
    <div className="mb-10">
      <div className="mx-auto flex mt-5 border-gray-600 border-2 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-2 text-center">
          <h1 className="my-3 text-4xl font-bold">Log in</h1>
          <p className="text-sm dark:text-gray-600">
            Log in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="kkg7uk"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type={ShowPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="q3wrnj"
                {...register("password", { required: true })}
              />
              <span
                className="absolute text-slate-400 mt-2 text-2xl -ml-8"
                onClick={() => setShowPassword(!ShowPassword)}
              >
                {ShowPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div>
              <button className="btn w-full bg-emerald-300">Log in</button>
            </div>
            {Error && <p className="text-red-600 text-center">{Error}</p>}
          </div>
        </form>

        <SocalLogin />
        <div className="space-y-2 mt-8">
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Do not have an account yet?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="hover:underline dark:text-default-600 text-sky-600 font-bold"
            >
              Register
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
