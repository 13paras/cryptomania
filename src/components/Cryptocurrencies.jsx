import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { useLocation, useNavigate } from "react-router-dom";

const columns = [
  { name: "#", uid: "rank", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "MARKET CAP", uid: "marketCap", sortable: true },
  { name: "VOLUME (24H)", uid: "24hVolume" },
  { name: "24H % ", uid: "change" },
];

const Cryptocurrencies = ({ simplified }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const count = simplified ? 50 : 150;
  const { data, isFetching } = useGetCryptosQuery(count);
  const cryptos = data?.data?.coins;
  const rowsPerPage = simplified ? 6 : 12;

  const pages = Math.ceil(cryptos?.length / rowsPerPage);

  const filteredCryptos = cryptos?.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const getKeyValue = (crypto, field) => {
    switch (field) {
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

  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && (
        <h2 className='mt-10 text-3xl font-bold text-purple-700'>
          All Cryptocurrencies in the world
        </h2>
      )}
      <Table
        aria-label='Example table with client side pagination'
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
        <TableBody>
          {filteredCryptos?.map((crypto, index) => (
            <TableRow
              onClick={() => navigate(`/crypto/${crypto?.uid}`)}
              key={index}
              className='cursor-pointer rounded-xl hover:bg-[#27272a]'
            >
              {columns.map(field => (
                <TableCell
                  className={`text-base lg:text-lg ${
                    field.uid === "price" && "font-semibold text-green-600"
                  } ${
                    field.uid === "change" && crypto?.change < 0 ? "text-red-700" : "text-green-600"
                  } ${field.uid !== "price" && field.uid !== "change" && "text-neutral-400"} `}
                  key={field.uid}
                >
                  {getKeyValue(crypto, field.uid)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Cryptocurrencies;
