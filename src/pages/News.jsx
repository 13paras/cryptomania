import { Avatar, Button, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useGetCryptoNewsApiQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import NewsCard from "../components/NewsCard";
import LoadingButton from "../components/LoadingButton";

const News = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const [count, setCount] = useState(12);
  const { data, isFetching } = useGetCryptoNewsApiQuery({ newsCategory, count });
  const { data: cryptos } = useGetCryptosQuery({
    count: 150,
    timePeriod: "24h",
    orderBy: "marketCap",
  });
  const coins = cryptos?.data?.coins;
  const onChangeHandler = e => {
    setNewsCategory(e.target.value);
  };
  return (
    <>
      <div className='my-10 flex items-center justify-between'>
        <h3 className='my-5 flex flex-col text-3xl font-bold text-purple-700'>
          Latest Crypto News{" "}
          <span className='text-sm text-paraText'>
            Insights into the biggest events shaping the crypto industry.
          </span>
        </h3>
        <Select
          onChange={onChangeHandler}
          label='Select Crypto'
          className='max-w-xs'
          color='secondary'
        >
          {coins?.map(coin => (
            <SelectItem
              key={coin.name}
              value={coin.name}
              startContent={<Avatar alt={coin.name} className='h-6 w-6' src={coin.iconUrl} />}
            >
              {coin.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* all news */}
      {data?.value?.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
      <div className='mb-10 flex justify-center'>
        <Button
          isLoading={isFetching}
          onClick={() => setCount(prev => prev + 6)}
          className='px-10 py-2 text-base font-semibold'
          color='secondary'
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default News;
