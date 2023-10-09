/* eslint-disable react/prop-types */
import { Avatar, Card, Image } from "@nextui-org/react";
import demoImage from "../assets/newsletter_bg_dark.svg";
import moment from "moment";

const NewsCard = ({ news }) => {
  return (
    <>
      <Card className='body-font my-12 overflow-hidden p-5 text-heading lg:mx-auto lg:w-[80%]'>
        <div className='flex w-[80%] items-center '>
          <Image
            width={300}
            height={200}
            isBlurred
            src={
              news?.image?.thumbnail?.contentUrl ? news?.image?.thumbnail?.contentUrl : demoImage
            }
            alt='Image Description'
          />
          <h3 className='ml-4 cursor-pointer text-lg font-bold text-heading hover:underline '>
            <a href={news.url} target='_blank' rel='noreferrer'>
              {news.name}
            </a>
          </h3>
        </div>
        <div className='py-4 md:py-5'>
          <p className='mt-1 line-clamp-5 text-gray-400 '>{news.description}</p>
          <div className='mt-4 flex items-center justify-between'>
            <p className='flex items-center'>
              <Avatar
                className=''
                src={
                  news.provider?.[0]?.image?.thumbnail?.contentUrl
                    ? news.provider?.[0]?.image?.thumbnail?.contentUrl
                    : demoImage
                }
              />
              <span className='pl-2 text-base'> {news.provider[0].name} </span>
            </p>
            <p className='text-xs text-gray-500 '>
              Last updated {moment(news.datePublished).fromNow()}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default NewsCard;
