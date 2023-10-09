import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='body-font bg-black text-heading'>
        <div className='container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row'>
          <a className='mb-4 flex items-center text-2xl font-bold md:mb-0'>
            <span className='ml-3 text-xl'>CRYPTOMANIA</span>
          </a>
          <nav className='flex flex-wrap items-center justify-center text-base md:ml-auto'>
            <Link to={"/"} className='mr-5 text-lg hover:text-paraText'>
              Home
            </Link>
            <Link to={"/cryptocurrencies"} className='mr-5 text-lg hover:text-paraText'>
              Cryptocurrencies
            </Link>
            <Link to={"/news"} className='mr-5 text-lg hover:text-paraText'>
              News
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
