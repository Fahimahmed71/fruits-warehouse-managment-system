import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useShopGETAPI from "../../../../hooks/useShopGETAPI/useShopGETAPI";

const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const [shop] = useShopGETAPI();

  let shopData;

  shop.map((shops) => (shopData = shops.cartData));

  useEffect(() => {
    fetch(
      "https://warehouse-managment-system-production.up.railway.app/graphSalesYearly"
    )
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return (
    <section className="flex justify-center gap-10">
      {/* areachart*/}
      <dl>
        <h1 className="text-red-400 text-2xl font-medium mb-5 underline">
          This Year Sales
        </h1>
        <AreaChart width={600} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="earnings"
            stackId="1"
            stroke="#DF212E"
            fill="#DF212E"
          />
          <Area
            type="monotone"
            dataKey="sales"
            stackId="1"
            stroke="#FBB95D"
            fill="#FBB95D"
          />
        </AreaChart>
      </dl>

      {/* ComposedChart */}
      <dl>
        <h1 className="text-red-400 text-2xl font-medium mb-5 underline">
          Top Selling Products
        </h1>
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={shopData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={20} fill="#EB1D36" />
          <Area dataKey="amount" fill="#FF8C8C" stroke="#FF8C8C" />
        </ComposedChart>
      </dl>
    </section>
  );
};

export default Charts;
