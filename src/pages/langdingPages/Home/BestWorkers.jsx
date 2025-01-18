import React from "react";
import SectionTitle from "../Share/SectionTitle";
import { RiCoinsLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../../components/Loading";

const BestWorkers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/best-workers`
      );
      return data;
    },
  });
  if (isLoading) return <Loading />;
  return (
    <>
      {/* pass the section titles */}
      <SectionTitle
        title={"Top 6 Earning Workers"}
        subTitle={
          "Check out the top 6 workers with the highest coins earned. Get inspired and start earning today!"
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-5 pt-5 lg:pt-10">
        {data.map((worker) => (
          <>
            <div key={worker._id} className="flex items-center gap-2">
              <img
                className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-teal-500"
                src={worker.image}
                alt="worker"
              />
              <div>
                <h2 className="flex items-center gap-1 text-lg md:text-3xl text-gray-600 font-semibold">
                  <RiCoinsLine />
                  {worker.coins}
                </h2>
                <p className="text-xs text-gray-500">{worker.name}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default BestWorkers;
