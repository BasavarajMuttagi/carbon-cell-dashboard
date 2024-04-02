import axios from "axios";
import { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import getSymbolFromCurrency from "@dcspark/currency-symbol-map";
import { Card } from "@tremor/react";
import { CountUp } from "use-count-up";
import bitcoin from "../assets/Bitcoin.png";
export default function BitCoinPrice() {
  const [Price, setPrice] = useState<CurrencyData>();
  const getPriceData = async () => {
    const result = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    setPrice(result.data.bpi);
  };

  useEffect(() => {
    getPriceData();
  }, []);

  return (
    <>
      <div className="w-full">
        <Card
          style={{ backgroundColor: "#1A1C22" }}
          className="space-y-3 rounded-xl hover:scale-[102%] duration-300"
        >
          <h3 className="flex items-center space-x-2  text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            <img src={bitcoin} alt="bitcoin icon" className="h-8" />
            <span>Bitcoin</span>
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {Price?.USD.code}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              {(Price?.USD.code && (
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  <span>{getSymbolFromCurrency(Price?.USD.code)} &nbsp;</span>
                  <CountUp
                    isCounting
                    start={Price?.USD.rate_float - 20}
                    end={Price?.USD.rate_float}
                    duration={3}
                  />
                </p>
              )) || <Skeleton baseColor="#282C35" className="w-36" />}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {Price?.EUR.code}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              {(Price?.EUR.code && (
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  <span>{getSymbolFromCurrency(Price?.EUR.code)} &nbsp;</span>
                  <CountUp
                    isCounting
                    start={Price?.EUR.rate_float - 20}
                    end={Price?.EUR.rate_float}
                    duration={3}
                  />
                </p>
              )) || <Skeleton baseColor="#282C35" className="w-36" />}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {Price?.GBP.code}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              {(Price?.GBP.code && (
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  <span>{getSymbolFromCurrency(Price?.GBP.code)} &nbsp;</span>
                  <CountUp
                    isCounting
                    start={Price?.GBP.rate_float - 20}
                    end={Price?.GBP.rate_float}
                    duration={3}
                  />
                </p>
              )) || <Skeleton baseColor="#282C35" className="w-36" />}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

interface Currency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: any;
}

export interface CurrencyData {
  USD: Currency;
  GBP: Currency;
  EUR: Currency;
}
