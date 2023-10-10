import { Avatar } from "@nextui-org/react";
import React from "react";
import logo from "../assets/icons8-crypto-96.png";
import { Link } from "react-router-dom";
import { GithubIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className='body-font bg-black  text-gray-400'>
      <div className='container mx-auto flex flex-col flex-wrap px-5 py-14 md:flex-row md:flex-nowrap md:items-center lg:items-center'>
        <div className='mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left'>
          <a className='title-font flex items-center justify-center font-medium text-white md:justify-start'>
            <Avatar size='lg' src={logo} />
            <span className='ml-3 text-xl'>Cryptomania</span>
          </a>
          <p className='mt-2 text-sm text-gray-500'>
            CryptoMania provides a fundamental analysis of the crypto market.
          </p>
        </div>
        <div className='-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left'>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-sm font-medium tracking-widest text-white'>
              <Link to={"/"}>Home</Link>
            </h2>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-sm font-medium tracking-widest text-white'>
              <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
            </h2>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-sm font-medium tracking-widest text-white'>
              <Link to={"/news"}>News</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className='bg-black '>
        <div className='container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row'>
          <p className='text-center text-sm text-gray-400 sm:text-left'>
            © 2020 Tailblocks —
            <a
              href='https://twitter.com/knyttneve'
              rel='noopener noreferrer'
              className='ml-1 text-gray-500'
              target='_blank'
            >
              @knyttneve
            </a>
          </p>
          <span className='mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'>
            <a
              href='https://github.com/13paras'
              target='_blank'
              rel='noreferrer'
              className='text-gray-400'
            >
              <GithubIcon />
            </a>

            <a
              href='https://www.instagram.com/sakarwalparas/'
              target='_blank'
              rel='noreferrer'
              className='ml-3 text-gray-400'
            >
              <InstagramIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/paras-sakarwal-06908a287'
              target='_blank'
              rel='noreferrer'
              className='ml-3 text-gray-400'
            >
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='0'
                className='h-6 w-6'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
