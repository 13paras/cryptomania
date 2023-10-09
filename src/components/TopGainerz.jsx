import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Avatar } from "@nextui-org/react";
import millify from "millify";
import { ChevronUp } from "lucide-react";

const TopGainerz = () => {
  const { data } = useGetCryptosQuery({ count: "6", timePeriod: "24h", orderBy: "change" });

  return (
    <div className='mt-6'>
      <ul className='lg:flex lg:flex-wrap lg:gap-4'>
        {data?.data?.coins.map((coin, index) => (
          <li
            key={index + 1}
            className='my-2 flex w-full items-center space-x-3 rounded-lg bg-zinc-700/25 p-3 text-paraText shadow-lg lg:w-[45%]'
          >
            <Avatar size='w-12 h-12 ' src={coin.iconUrl} />
            <div className='flex w-full items-center justify-between font-semibold'>
              <div className='flex flex-col text-base text-paraText'>
                <p className='text-base'> {coin.name} </p>
                <p className='text-base'> $ {millify(coin.price)} </p>
              </div>
              <p className={`flex items-center space-x-2 text-base text-green-600 lg:text-lg`}>
                {" "}
                <ChevronUp /> {coin.change}{" "}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopGainerz;
