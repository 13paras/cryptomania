/* eslint-disable react/prop-types */
import { Card, Divider, Tooltip } from "@nextui-org/react";
import { Divide, HelpCircleIcon, TvIcon } from "lucide-react";
import {
  AlertCircle,
  Check,
  CircleDollarSignIcon,
  Hash,
  LucidePiggyBank,
  TrendingUp,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import millify from "millify";

const Stats = ({ coinDetails }) => {
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`,
      icon: <CircleDollarSignIcon />,
      tooltip: null,
    },
    { title: "Rank", value: coinDetails?.rank, icon: <Hash /> },
    {
      title: "24h Volume",
      value: `$ ${coinDetails?.volume && millify(coinDetails?.volume)}`,
      icon: <Zap />,
      tooltip: (
        <Tooltip
          showArrow
          placement='right'
          content={`A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times.`}
          classNames={{
            base: "py-2 px-4 shadow-xl w-[400px] text-paraText bg-gray-900",
            arrow: "bg-gray-900",
          }}
        >
          <HelpCircleIcon size={16} />
        </Tooltip>
      ),
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`,
      icon: <CircleDollarSignIcon />,
      tooltip: (
        <Tooltip
          showArrow
          placement='right'
          content={
            "Market Cap = Current Price x Circulating Supply \n Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)"
          }
          classNames={{
            base: "py-2 px-4 shadow-xl w-[400px] text-paraText bg-gray-900",
            arrow: "bg-gray-900",
          }}
        >
          <HelpCircleIcon size={16} />
        </Tooltip>
      ),
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(coinDetails?.allTimeHigh.price)}`,
      icon: <Trophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinDetails?.numberOfMarkets,
      icon: <TrendingUp />,
    },
    {
      title: "Number Of Exchanges",
      value: coinDetails?.numberOfExchanges,
      icon: <LucidePiggyBank />,
    },
    {
      title: "Aprroved Supply",
      value: coinDetails?.supply.confirmed ? <Check /> : <X />,
      icon: <AlertCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(coinDetails?.supply.total)}`,
      icon: <AlertCircle />,
      tooltip: (
        <Tooltip
          showArrow
          placement='right'
          content={
            "The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market. \n Total Supply = Onchain supply - burned tokens"
          }
          classNames={{
            base: "py-2 px-4 shadow-xl w-[400px] text-paraText bg-gray-900",
            arrow: "bg-gray-900",
          }}
        >
          <HelpCircleIcon size={16} />
        </Tooltip>
      ),
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(coinDetails?.supply.circulating)}`,
      icon: <AlertCircle />,
      tooltip: (
        <Tooltip
          showArrow
          placement='right'
          content={
            "The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments)."
          }
          classNames={{
            base: "py-2 px-4 shadow-xl w-[400px] text-paraText bg-gray-900",
            arrow: "bg-gray-900",
          }}
        >
          <HelpCircleIcon size={16} />
        </Tooltip>
      ),
    },
  ];

  return (
    <>
      <Card className='mx-auto w-full bg-zinc-700/25 py-6 shadow-none'>
        <h3 className='text-center text-2xl font-semibold text-heading'>Bitcoin Statistics</h3>
        <p className='text-center'>An overview showing the stats of Bitcoin</p>
        <ul className='mx-auto mt-6 w-[80%] space-y-5'>
          {stats.map((stat, index) => (
            <>
              <li key={stat.title} className='flex items-center justify-between'>
                <p className='flex items-center space-x-2 text-xl capitalize'>
                  <span className='text-paraText'>{stat.icon}</span>
                  <span className='text-paraText'>{stat.title}</span>
                  <span className='-ml-1 text-sm text-paraText'>{stat.tooltip}</span>
                </p>
                <span className='text-xl font-bold'>{stat.value}</span>
              </li>
              {index !== stats.length - 1 && <Divider />}
            </>
          ))}
        </ul>
      </Card>
      {/* Other Stats */}
      <Card className='mx-auto mt-5 w-full bg-zinc-700/25 py-6 shadow-none lg:mt-0'>
        <h3 className='text-center text-2xl font-semibold text-heading'>Other Statistics</h3>
        <p className='text-center'>An overview showing the stats of all Cryptocurrencies</p>
        <ul className='mx-auto mt-6 w-[80%] space-y-5'>
          {genericStats.map((stat, index) => (
            <>
              <li key={stat.title} className='flex items-center justify-between'>
                <p className='flex items-center space-x-2 text-xl capitalize'>
                  <span className='text-paraText'>{stat.icon}</span>
                  <span className='text-paraText'>{stat.title}</span>
                  <span className='-ml-1 text-sm text-paraText'>{stat.tooltip}</span>
                </p>
                <span className='text-xl font-bold'>{stat.value}</span>
              </li>
              {index !== stats.length - 1 && <Divider />}
            </>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Stats;
