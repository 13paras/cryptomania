import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Avatar } from "@nextui-org/react";

const TrendingCurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery(3);
  // console.log(data);
  if (isFetching) return "Loading...";
  return (
    <div className='mx-auto mt-10 w-[55%] rounded-lg bg-zinc-700/25 p-3 shadow-[0_10px_30px_rgba(8,_112,_184,_0.3)] lg:w-[30%]'>
      <h3 className='text-center text-xl font-semibold text-red-500'>🔥 Trending Coins</h3>
      <ul>
        {data?.data?.coins.map((coin, index) => (
          <li key={index + 1} className='my-5 flex items-center text-paraText'>
            {index + 1}{" "}
            <span className='ml-2 flex items-center space-x-3'>
              <Avatar size='sm' src={coin.iconUrl} />
              <p className='text-base'> {coin.name} </p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCurrencies;
