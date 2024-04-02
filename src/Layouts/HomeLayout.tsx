import BitCoinPrice from "../components/BitCoinPrice";
import BlogCard from "../components/BlogCard";
import PopulationChart from "../components/PopulationChart";
import TodaysMarket from "../components/TodaysMarket";
import WalletBalance from "../components/WalletBalanceCard";
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.avif";
import blog3 from "../assets/blog3.avif";
import blog4 from "../assets/blog4.avif";
import blog5 from "../assets/blog5.avif";
import blog6 from "../assets/blog6.avif";
import blog7 from "../assets/blog7.avif";
import blog8 from "../assets/blog8.avif";
import wave from "../assets/wave.png";
function HomeLayout() {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div className="space-y-2">
          <div className="text-base font-extrabold flex items-center space-x-2 sm:text-2xl">
            <span className="bg-gradient-to-r from-[#e764a5] to-[#d03a9e]  text-transparent bg-clip-text">
              Hello
            </span>
            <span className="bg-gradient-to-r from-[#db77a7] to-[#ede8e6]  text-transparent bg-clip-text">
              ,
            </span>{" "}
            <span className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00]  text-transparent bg-clip-text">
              Basavaraj
            </span>
            <span>
              <img src={wave} alt="wave" className="h-8" />
            </span>
          </div>
          <div className="text-xs font-bold bg-gradient-to-r from-[#a3e771] to-[#d0da2f]  text-transparent bg-clip-text sm:text-xl">
            Welcome to Carbon Cell
          </div>
        </div>
        <button className="p-2 rounded bg-indicator-primary text-white/90 font-semibold h-fit text-sm">
          Start Trading
        </button>
      </div>

      <div className="p-3 flex flex-col space-y-7">
        <div className="space-y-7 sm:grid grid-cols-1 sm:space-y-0 sm:gap-7 min-[930px]:grid-cols-2">
          <TodaysMarket />
          <BitCoinPrice />
          <WalletBalance />
          <PopulationChart />
        </div>

        <div className="space-y-4">
          <div className="text-white text-xl font-semibold">Crypto News</div>
          <div className="flex flex-col items-center space-y-3  min-[850px]:space-y-0 min-[850px]:grid grid-cols-2 gap-7 min-[935px]:grid-cols-3">
            <BlogCard
              imageUrl={blog1}
              heading="Ethereum Could Face 'Hidden Risks' From Ballooning Restaking Market:
            Coinbase"
              Content=" Restaking has grown into the second-largest DeFi sector on the Ethereum
              blockchain and is likely to become a core part of the network’s
              infrastructure, the report said."
            />
            <BlogCard
              imageUrl={blog2}
              heading="Crypto Exchange Figure Markets Has a Plan to Democratize Finance"
              Content="What appears to be another post-FTX trading and custody play with institutions in mind, is really all about visionary disruption."
            />
            <BlogCard
              imageUrl={blog3}
              heading="Telegram's Pivot to TON Payments for Ads Boosts Toncoin"
              Content="The messaging app's switch to TON creates a circular economy for the closely-linked crypto."
            />
            <BlogCard
              imageUrl={blog4}
              heading="How the Bitcoin Halving Could Affect Network Security"
              Content="After the block reward drops to 3.125 bitcoins, miners could power down their less efficient machines."
            />
            <BlogCard
              imageUrl={blog5}
              heading="DeFi Protocol Cega's New Options Product Marries Gold, Ether to Offer Up to 83% Yield"
              Content="The new offering called Gold Rush offers a trifecta of decent return, market exposure and protection from losses."
            />
            <BlogCard
              imageUrl={blog6}
              heading="First Mover Americas: Bitcoin Drops to $65K to Start the Month"
              Content="The latest price moves in bitcoin (BTC) and crypto markets in context for April 2, 2024. First Mover is CoinDesk’s daily newsletter that contextualizes the latest actions in the crypto markets."
            />
            <BlogCard
              imageUrl={blog7}
              heading="Crypto Funds Saw Inflows of $862M Last Week Following $1B of Outflows the Week Before: CoinShares"
              Content="The recovery from the week before coincided with a recovery in BTC's price which sat at just under $70,000 on March 29, up nearly 10% on a week earlier."
            />
            <BlogCard
              imageUrl={blog8}
              heading="TRON Foundation, Justin Sun Ask U.S. Court to Dismiss SEC Lawsuit"
              Content="The TRON Foundation and Justin Sun asked a New York court to dismiss an SEC lawsuit, arguing that the regulator failed to establish that the court has jurisdiction over the foreign defendants."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
