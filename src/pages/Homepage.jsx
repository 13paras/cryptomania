import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import { Link } from "react-router-dom";
import TopGainerz from "../components/TopGainerz";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery({
    count: "10",
    timePeriod: "24h",
    orderBy: "marketCap",
  });
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <div className='mx-4'>
      <h2 className='mb-6 mt-10 text-5xl font-bold text-heading'>Market Overview (Stats) </h2>
      {globalStats && (
        <>
          <p className='pb-6 text-lg'>
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
            <span className='font-semibold text-paraText underline'>
              {globalStats.totalExchanges}
            </span>{" "}
            different exchanges. The total 24-hour volume of cryptocurrency trading is over{" "}
            <span className='font-semibold text-paraText underline'>
              ${millify(globalStats.total24hVolume)}.
            </span>
          </p>
        </>
      )}
      {/* Trending Currencies */}
      <div className='mb-14 mt-6'>
        <h3 className='text-2xl font-bold text-green-500'>📈 Top 6 Gainers </h3>
        <TopGainerz />
      </div>

      {/* Cryptocurrency section */}
      <div className='mb-14 mt-6 '>
        <div className='flex items-center justify-between'>
          <h3 className='my-5 text-3xl font-bold text-heading'>Top 50 Cryptocurrencies</h3>
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
