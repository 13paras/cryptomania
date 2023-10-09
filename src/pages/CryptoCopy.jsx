/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  User,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import CryptoArticle from "../components/CryptoArticle";

const columns = [
  { name: "#", uid: "rank", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "MARKET CAP", uid: "marketCap", sortable: true },
  { name: "VOLUME (24H)", uid: "24hVolume" },
  { name: "24H % ", uid: "change" },
];

const orderBy = [
  { value: "Market Cap", uid: "marketCap" },
  { value: "Trading Volume", uid: "['24hVolume']" },
  { value: "Highest price", uid: "price" },
  { value: "Change", uid: "change" },
  { value: "Listed At", uid: "listedAt" },
];

const Cryptocurrencies = ({ simplified }) => {
  const navigate = useNavigate();

  const [order, setOrder] = useState("marketCap");
  const count = simplified ? 50 : 150;
  const { data, isLoading, isError } = useGetCryptosQuery({
    count,
    timePeriod: "24h",
    orderBy: "marketCap",
  });

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const coins = data?.data?.coins;
  const [cryptos, setCryptos] = useState(coins);
  const rowsPerPage = simplified ? 20 : 30;

  const pages = Math.ceil(cryptos?.length / rowsPerPage);

  const filteredCryptos = cryptos?.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const getKeyValue = (crypto, field) => {
    switch (field) {
      case "name":
        return <User avatarProps={{ size: "md", src: crypto.iconUrl }} name={crypto.name} />;
      case "price":
        return `$ ${millify(crypto.price, { precision: 2 })}`;
      case "marketCap":
        return millify(crypto.marketCap, { precision: 1 });
      case "volume24h":
        return millify(crypto.volume24h, { precision: 1 });
      default:
        return crypto[field];
    }
  };

  const searchValue = value => {
    setSearch(value);
  };

  useEffect(() => {
    const filterSearch = cryptos?.filter(
      coin => coin.name.toLowerCase().includes(search.toLowerCase()) && coin
    );
    setCryptos(filterSearch);
  }, [search]);

  useEffect(() => {
    // console.log(order);
    console.log(cryptos);
  }, [order]);

  useEffect(() => {
    // console.log(cryptos);
  }, [search]);

  if (isLoading) return "Loading...";

  const topContent = (
    <div className='flex items-center justify-between gap-4'>
      <Input
        size='lg'
        className=' w-full sm:max-w-[40%] lg:max-w-[35%]'
        placeholder='Search crypto...'
        value={search}
        // onClear={() => onClear()}
        onValueChange={searchValue}
        startContent={<SearchIcon size={28} />}
      />
      {/*       <div className='w-full'>
        <Select
          size='sm'
          label='By Order'
          onChange={e => setOrder(e.target.value)}
          className='w-full text-sm lg:max-w-xs'
        >
          {orderBy.map(order => (
            <SelectItem key={order.uid} value={order.uid}>
              {order.value}
            </SelectItem>
          ))}
        </Select>
      </div> */}
    </div>
  );

  if (isError) return alert("Error fetching data...");
  return (
    <>
      {!simplified && (
        <h2 className='mt-10 text-3xl font-bold text-heading'>All Cryptocurrencies in the world</h2>
      )}
      <Table
        aria-label='Example table with client side pagination'
        topContent={!simplified && topContent}
        bottomContent={
          <div className='flex w-full justify-center'>
            <Pagination
              isCompact
              showControls
              showShadow
              color='secondary'
              page={page}
              total={pages}
              onChange={page => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px] mt-10",
        }}
      >
        <TableHeader>
          {columns.map(field => (
            <TableColumn key={field.uid}>{field.name}</TableColumn>
          ))}
        </TableHeader>
        {cryptos?.length > 0 ? (
          <TableBody>
            {filteredCryptos?.map((crypto, index) => (
              <TableRow
                onClick={() => navigate(`/crypto/${crypto?.uuid}`)}
                key={index}
                className='cursor-pointer rounded-xl hover:bg-[#27272a]'
              >
                {columns.map(field => (
                  <TableCell
                    className={`text-base lg:text-lg ${
                      field.uid === "price" && "font-semibold text-green-600"
                    } ${
                      field.uid === "change" && crypto?.change < 0
                        ? "text-red-700"
                        : "text-green-600"
                    } ${field.uid !== "price" && field.uid !== "change" && "text-neutral-400"} `}
                    key={field.uid}
                  >
                    {getKeyValue(crypto, field.uid)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>No cryptos found</TableBody>
        )}
      </Table>

      {/* Cryptocurrencies article */}
      <CryptoArticle />
    </>
  );
};

export default Cryptocurrencies;
