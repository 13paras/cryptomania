import React, { useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import TrendingCurrencies from "./TrendingCurrencies";
import Cryptocurrencies from "./Cryptocurrencies";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // console.log(globalStats);
  if (isFetching) return "Loading...";
  return (
    <div className='mx-4'>
      <h2 className='my-10 text-5xl font-bold text-purple-700'>Market Overview (Stats) </h2>
      <p className='pb-10 text-lg'>
        The cryptocurrency market is a global digital asset market with a total market
        capitalization of over{" "}
        <span className='font-semibold text-paraText underline'>
          ${millify(globalStats.totalMarketCap)}.
        </span>{" "}
        There are over{" "}
        <span className='font-semibold text-paraText underline'>
          {" "}
          {millify(globalStats.totalCoins)}{" "}
        </span>{" "}
        different cryptocurrencies currently in circulation, and they are traded on over{" "}
        <span className='font-semibold text-paraText underline'>{globalStats.totalExchanges}</span>{" "}
        different exchanges. The total 24-hour volume of cryptocurrency trading is over{" "}
        <span className='font-semibold text-paraText underline'>
          ${millify(globalStats.total24hVolume)}.
        </span>
      </p>

      <div className='mb-20 mt-10'>
        <TrendingCurrencies />
      </div>
      <div className='mb-20 mt-10 '>
        <div className='flex items-center justify-between'>
          <h3 className='my-5 text-3xl font-bold text-purple-700'>Top 50 Cryptocurrencies</h3>
          <Link to={"/cryptocurrencies"} className='text-2xl text-paraText hover:underline '>
            Show more
          </Link>
        </div>
        <Cryptocurrencies simplified />
      </div>
    </div>
  );
};

export default Homepage;
