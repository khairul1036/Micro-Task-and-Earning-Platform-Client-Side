import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/images/reg.avif";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { imageUpload, saveUser } from "../../api/utils";
import HelmetTitle from "../langdingPages/Share/HelmetTitle";

const Registration = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    signInWithGoogle,
    createUser,
    updateUserProfile,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    const { name, email, photo, password, role } = data;
    const photoURL = await imageUpload(photo[0]);
    setIsSubmitting(true);
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
      setIsSubmitting(false);
      navigate("/dashboard");
    } catch (err) {
      setIsSubmitting(false);
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser(data?.user);
      toast.success("Signin Successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <HelmetTitle favTitle={"Register || TaskEarn"} />
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg  lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/010/360/283/non_2x/earn-money-logo-vector.jpg"
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
            <div className="px-4 py-2">
              {" "}
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
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
                disabled={isSubmitting}
                className={`w-full px-4 py-2 text-sm rounded-full font-bold border-2  border-deepTeal  ${
                  isSubmitting
                    ? "cursor-not-allowed"
                    : "text-deepTeal bg-transparent transition-all ease-in-out duration-300  hover:bg-deepTeal hover:text-white"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                  </div>
                ) : (
                  "Sign Up"
                )}
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
