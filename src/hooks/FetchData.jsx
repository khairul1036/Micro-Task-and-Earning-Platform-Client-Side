import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const FetchData = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch: userRefetch } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading && !user,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      return data;
    },
  });
  return { users, userRefetch };
};

export default FetchData;
