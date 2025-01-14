import axios from "axios";
// Upload image and return image url

export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data.data.display_url;
};

export const saveUser = async (user) => {
  // Set role to Worker if undefined
  const role = user?.role || 'Worker';

  await axios.post(`${import.meta.env.VITE_API_URL}/users/${user?.email}?role=${role}`, {
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
    role: role,  // pass the role here as well
  });
};
