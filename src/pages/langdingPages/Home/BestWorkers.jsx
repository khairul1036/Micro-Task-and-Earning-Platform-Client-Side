import React from "react";
import SectionTitle from "../Share/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../../components/Loading";
import { FaCoins } from "react-icons/fa";

const BestWorkers = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/best-workers`
      );
      return data;
    },
  });
  if (isLoading) return <Loading />;
  // console.log(data);
  return (
    <>
      {/* pass the section titles */}
      <SectionTitle title={"Top 6 Earning Workers"} subTitle={"Top Workers"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-5 py-5 lg:pt-10 ">
        {Array.isArray(data) && data?.map((worker, index) => (
          <div key={index} className="flex items-center gap-2">
            <img
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-teal-500"
              src={worker.image}
              alt="worker"
            />
            <div>
              <h2 className="flex items-center gap-1 text-lg md:text-3xl text-gray-600 font-semibold">
                <FaCoins className="text-xl mr-1" />
                {worker.coins}
              </h2>
              <p className="text-xs text-gray-500">{worker.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestWorkers;
