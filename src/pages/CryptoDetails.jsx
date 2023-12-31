/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCoinDetailQuery, useGetCoinHistoryQuery } from "../services/cryptoApi";
import millify from "millify";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
import { htmlToText } from "html-to-text";
import LoadingSpinner from "../components/LoadingSpinner";

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const [timePeriod, setTimePeriod] = useState("30d");
  const [coinValue, setCoinValue] = useState("1");
  const { data } = useGetCoinDetailQuery(cryptoId);
  const { data: coinHistory, isLoading } = useGetCoinHistoryQuery({
    cryptoId,
    timePeriod,
  });
  const coinDetails = data?.data?.coin;
  const [priceInUSD, setPriceInUSD] = useState(coinDetails?.price);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  useEffect(() => {
    setPriceInUSD(coinValue * coinDetails?.price);
  }, [coinValue]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <main className='mt-10'>
      {coinDetails && (
        <>
          <div className='flex items-center space-x-2 text-paraText'>
            <Avatar src={coinDetails.iconUrl} />
            <a
              href={coinDetails.websiteUrl}
              target='_blank'
              rel='noreferrer'
              className='pr-2 text-xl font-bold text-heading hover:underline'
            >
              {coinDetails.name}
            </a>{" "}
            {coinDetails.symbol}
          </div>
          <div className='mt-3 flex items-center space-x-2 '>
            <span className='text-4xl font-bold'>${millify(coinDetails.price)}</span>
            <span
              className={`flex items-center space-x-2 ${
                coinDetails.change > 0 ? "text-green-700" : "text-red-700"
              } `}
            >
              {" "}
              {coinDetails.change > 0 ? (
                <ChevronUpIcon color='green' />
              ) : (
                <ChevronDownIcon color='red' />
              )}{" "}
              {coinDetails.change}
            </span>
          </div>

          <div className='mt-6'>
            <Select
              size='sm'
              label='By Time Period'
              onChange={e => setTimePeriod(e.target.value)}
              className='w-full text-sm lg:max-w-xs'
            >
              {time.map(time => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </Select>
          </div>
          {/* Chart */}
          <div className='mt-6'>
            <LineChart coinHistory={coinHistory} coinName={coinDetails.name} />
          </div>

          {/* Converter */}
          <h3 className='mt-6 text-xl font-semibold text-paraText'>
            {" "}
            {coinDetails.name} to USD Converter{" "}
          </h3>
          <ul className='mt-6 flex items-center space-x-6 text-lg font-semibold'>
            <li>
              <p className='uppercase'>{coinDetails.name}</p>
              <input
                type='number'
                min={0}
                value={coinValue}
                onChange={e => setCoinValue(e.target.value)}
                className='w-full rounded-md border border-gray-700 bg-gray-800  px-4 py-2 text-center text-xl text-gray-400 transition duration-150 ease-in-out focus:border-slate-600 focus:bg-gray-800 focus:text-gray-400 '
              />
            </li>
            <li>
              <p>USD</p>
              <input
                disabled
                value={"$" + millify(priceInUSD)}
                className='w-full rounded-md border border-gray-700 bg-gray-800  px-4 py-2 text-center text-xl text-gray-400 transition duration-150 ease-in-out focus:border-slate-600 focus:bg-gray-800 focus:text-gray-400 '
              />
            </li>
          </ul>

          {/* Stats */}
          <div className='my-10 lg:mt-14 lg:flex lg:gap-6'>
            <Stats coinDetails={coinDetails} />
          </div>

          {/* About Coin */}
          <div className='my-10'>
            <h3 className='text-2xl text-heading'>What is {coinDetails.name} </h3>
            <article className='text-paraText'>{htmlToText(coinDetails.description)}</article>
          </div>
        </>
      )}
    </main>
  );
};

export default CryptoDetails;
