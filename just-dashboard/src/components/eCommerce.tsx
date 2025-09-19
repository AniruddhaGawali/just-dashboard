import { TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";
import React from "react";



const ECommerce = () => {
  return (
    <section className="p-8 flex-1 w-full">
      <h2 className="text-xl font-semibold ">eCommerce</h2>
      <div className="flex flex-col gap-4 mt-2">
        <div className="w-full h-1/3">

          <div className="w-1/2 h-full gap-4 p-4 grid grid-cols-2 grid-rows-2 ">
            <div className="w-full  py-4 px-8 bg-primary text-primary-foreground rounded-2xl min-h-[120px] flex flex-col justify-around items-start">
              <div className="text-md font-semibold">Customer</div>
              <div className="flex gap-4 justify-center items-start">
                <div className="font-semibold text-3xl">3,781</div>
                <div className="text-sm flex gap-2 items-center justify-center">+11.1% <TrendUpIcon size={16} weight="duotone" /></div>
              </div>
            </div>

            <div className="w-full  py-4 px-8 bg-card text-card-foreground rounded-2xl min-h-[120px] flex flex-col justify-around items-start">
              <div className="text-md font-semibold">Order</div>
              <div className="flex gap-4 justify-center items-start">
                <div className="font-semibold text-3xl">1,219</div>
                <div className="text-sm flex gap-2 items-center justify-center">-0.03% <TrendDownIcon size={16} weight="duotone" /></div>
              </div>
            </div>

            <div className="w-full  py-4 px-8 bg-card text-card-foreground rounded-2xl min-h-[120px] flex flex-col justify-around items-start">
              <div className="text-md font-semibold">Revenue</div>
              <div className="flex gap-4 justify-center items-start">
                <div className="font-semibold text-3xl">$695</div>
                <div className="text-sm flex gap-2 items-center justify-center">+15.3% <TrendUpIcon size={16} weight="duotone" /></div>
              </div>
            </div>

            <div className="w-full  py-4 px-8 bg-primary/85 text-primary-foreground  rounded-2xl min-h-[120px] flex flex-col justify-around items-start">
              <div className="text-md font-semibold">Growth</div>
              <div className="flex gap-4 justify-center items-start">
                <div className="font-semibold text-3xl">30.1%</div>
                <div className="text-sm flex gap-2 items-center justify-center">+6.08% <TrendUpIcon size={16} weight="duotone" /></div>
              </div>
            </div>
          </div>

          <div className="w-1/2"></div>
        </div>

        <div className="w-full bg-red-500">
          <div className=""></div>
          <div className=""></div>
        </div>

        <div className="w-full bg-red-500">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
