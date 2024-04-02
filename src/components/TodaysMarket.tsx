import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

function TodaysMarket() {
  return (
    <div className="p-5 space-y-4 bg-dark-secondary rounded-xl w-full">
      <div className="text-white text-xl font-semibold">Today's Market</div>
      <div className="text-ash-primary font-medium space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-white">BTC</span>
          <span className="flex items-center space-x-2">
            <ArrowDown size={16} weight="bold" className="text-red-400" />
            <span>$65318.2191</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white">Litecoin</span>
          <span className="flex items-center space-x-2">
            <ArrowUp size={16} weight="bold" className="text-green-400" />
            <span>$65318.2191</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white">Ethereum</span>
          <span className="flex items-center space-x-2">
            <ArrowDown size={16} weight="bold" className="text-red-400" />
            <span>$65318.2191</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white">Dogecoin</span>
          <span className="flex items-center space-x-2">
            <ArrowUp size={16} weight="bold" className="text-green-400" />
            <span>$65318.2191</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodaysMarket;
