import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/images/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { imageUpload, saveUser } from "../../api/utils";

const Registration = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    const { name, email, photo, password, role } = data;
    const photoURL = await imageUpload(photo[0]);
    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      await saveUser({
        ...result?.user,
        photoURL: photoURL,
        displayName: name,
        role,
      });
      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle()
      await saveUser(data?.user)
      toast.success("Signin Successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg  lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://www.fixtronics.us/wp-content/uploads/2020/12/fixtronics-300x300.png"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Get Your Free Account Now.
          </p>

          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center dark:bg-gray-800 dark:border-gray-600 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50"
          >
            <div className="px-4 py-2">{/* Google SVG */}</div>
            <span className="w-5/6 px-4 py-3 font-bold text-center dark:text-gray-200">
              Sign in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-300 hover:underline">
              or Registration with email
            </div>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required." })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                htmlFor="photo"
              >
                Photo Upload
              </label>
              <input
                id="photo"
                type="file"
                accept=".jpg,.jpeg,.png"
                {...register("photo", {
                  required: "Photo upload is required.",
                  validate: {
                    checkFileType: (value) =>
                      value &&
                      (value[0].type === "image/jpeg" ||
                        value[0].type === "image/png")
                        ? true
                        : "Only JPG, JPEG, or PNG files are allowed.",
                  },
                })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                htmlFor="role"
              >
                Role
              </label>
              <select
                id="role"
                {...register("role", {
                  required: "Role selection is required.",
                })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select a role</option>
                <option value="Worker">Worker</option>
                <option value="Buyer">Buyer</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-200 hover:underline"
            >
              or sign in
            </Link>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Registration;
