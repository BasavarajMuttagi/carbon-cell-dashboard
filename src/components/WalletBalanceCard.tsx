// 'use client';
import { Card, DonutChart, List, ListItem } from "@tremor/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "USDT",
    amount: 6730,
    share: "32.1%",
    color: "bg-cyan-500",
  },
  {
    name: "NBST",
    amount: 4120,
    share: "19.6%",
    color: "bg-blue-500",
  },
  {
    name: "EFT",
    amount: 3920,
    share: "18.6%",
    color: "bg-indigo-500",
  },
  {
    name: "WET",
    amount: 3210,
    share: "15.3%",
    color: "bg-violet-500",
  },
];

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

export default function WalletBalance() {
  return (
    <>
      <Card
        style={{ backgroundColor: "#1A1C22" }}
        className="w-full flex-1 rounded-xl py-10 hover:scale-[102%] duration-300"
      >
        <h3 className="text-xl  font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Wallet Balance
        </h3>
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
          valueFormatter={currencyFormatter}
          showTooltip={true}
          colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
        />
        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    "h-2.5 w-2.5 shrink-0 rounded-sm"
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {currencyFormatter(item.amount)}
                </span>
                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {item.share}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}
