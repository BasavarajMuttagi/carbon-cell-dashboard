import BitCoinPrice from "../components/BitCoinPrice";
import PopulationChart from "../components/PopulationChart";
import TodaysMarket from "../components/TodaysMarket";
import WalletBalance from "../components/WalletBalanceCard";

function HomeLayout() {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div className="space-y-2">
          <div className="text-base font-extrabold sm:text-2xl">
            <span className="bg-gradient-to-r from-[#e764a5] to-[#d03a9e]  text-transparent bg-clip-text">
              Hello
            </span>
            <span className="bg-gradient-to-r from-[#db77a7] to-[#ede8e6]  text-transparent bg-clip-text">
              ,
            </span>{" "}
            <span className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00]  text-transparent bg-clip-text">
              Basavaraj S M
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

      <div className="p-3 flex flex-col space-y-4">
        <div className="space-y-4 max-w-sm w-full sm:flex sm:justify-between sm:max-w-full sm:space-y-0 sm:w-full sm:space-x-4">
          <TodaysMarket />
          <BitCoinPrice />
        </div>
        <div className=" space-y-4 h-full w-full sm:flex sm:justify-between sm:items-center sm:space-y-0">
          <WalletBalance />
          <PopulationChart />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
