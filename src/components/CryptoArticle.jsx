const CryptoArticle = () => {
  return (
    <article className='mb-10 mt-5 space-y-4'>
      <section>
        <h3 className='text-lg font-bold text-heading'>What is Crypto Market Cap?</h3>
        <p className='pt-2 text-medium text-paraText'>
          Crypto market cap is the total value of all the coins of a particular cryptocurrency that
          have been mined or are in circulation. Market capitalization is used to determine the
          ranking of cryptocurrencies. The higher the market cap of a particular crypto coin, the
          higher its ranking and share of the market. Crypto market cap is calculated by multiplying
          the total number of coins in circulation by its current price. For instance, to calculate
          the market cap of Ethereum, all you need to do is multiply the total number of Ethereum in
          circulation by the current price of one Ethereum and you will get its market cap.
        </p>
      </section>

      <section>
        <h3 className='text-lg font-bold text-heading'>
          How to compare Cryptocurrencies Market Cap?
        </h3>
        <p className='pt-2 text-medium text-paraText'>
          Crypto market cap can be divided into three categories:
        </p>
        <li className=' ml-5 pt-2 text-medium text-paraText'>
          Large-cap cryptocurrencies ({">"}$10 billion)
        </li>
        <li className='ml-5 text-medium text-paraText'>
          Mid-cap Cryptocurrencies ($1 billion - $10 billion)
        </li>
        <li className='ml-5 text-medium text-paraText'>
          Small-cap cryptocurrencies ({"<"}$1 billion).
        </li>
        <p className='pt-2 text-medium text-paraText'>
          As a financial metric, market cap allows you to compare the total circulating value of one
          cryptocurrency with another. Large cap cryptocurrencies such as Bitcoin and Ethereum have
          a market cap of over $10 billion. They typically consist of protocols that have
          demonstrated track records, and have a vibrant ecosystem of developers maintaining and
          enhancing the protocol, as well as building new projects on top of them. While market cap
          is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some
          cryptocurrency projects may appear to have inflated market cap through price swings and
          the tokenomics of their supply. As such, it is best to use this metric as a reference
          alongside other metrics such as trading volume, liquidity, fully diluted valuation, and
          fundamentals during your research process.
        </p>
      </section>

      <section>
        <h4 className='text-lg font-bold text-heading'>
          How does CoinGecko Calculate Cryptocurrency Prices?
        </h4>
        <p className='pt-2 text-medium text-paraText'>
          The price is calculated using a global volume-weighted average price formula which is
          based on the pairings available on different exchanges of a particular crypto asset. For
          examples and more detailed information on how we track cryptocurrency prices and other
          metrics,
        </p>
      </section>
      <section>
        <h4 className='text-lg font-bold text-heading'>
          Why are Cryptocurrency Prices Different on Exchanges?
        </h4>
        <p className='pt-2 text-medium text-paraText'>
          You may notice that cryptocurrencies listed on different exchanges have different prices.
          The reasons for this are complex, but simply put cryptocurrencies are traded on different
          exchanges and across different markets with varying economic conditions, liquidity,
          trading pairs, and offerings (e.g. derivatives / leverage) which all influence price in
          their own way.
        </p>
      </section>
      <section>
        <h4 className='text-lg font-bold text-heading'>Where to Check Cryptocurrency Prices?</h4>
        <p className='pt-2 text-medium text-paraText'>
          You can track over 10,000 crypto prices on CoinGecko across more than 50 currencies.
          Popular cryptocurrency pairs include BTC-USD, ETH-USD, and SLP-PHP. You can also track
          metrics such as 24 hour trading volume, market capitalization, price chart, historical
          performance chart, the circulating supply, and more. Sign up to use CoinGecko’s crypto
          portfolio to track the performance of your portfolio. You may also check out GeckoTerminal
          (currently in beta), our comprehensive multichain on-chain charting tool featuring live
          charts, current trades, market sentiment and more as it happens in real time! CoinGecko
          also has a mobile app that enables you to track cryptocurrencies on Android and iOS.
        </p>
      </section>
      <section>
        <h4 className='text-lg font-bold text-heading'>What is 24h Volume in the Table Above?</h4>
        <p className='pt-2 text-medium text-paraText'>
          The 24h trading volume refers to the amount a cryptocurrency has been bought and sold on
          all exchanges within the last 24 hours on the spot market. For instance, if the 24h volume
          for Ethereum is $15 billion, it means that $15 billion worth of Ether had changed hands
          across all exchanges in the last 24 hours.
        </p>
      </section>
    </article>
  );
};

export default CryptoArticle;
