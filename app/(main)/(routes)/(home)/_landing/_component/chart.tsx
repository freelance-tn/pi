"use client"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart Configuration
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Pi Coin Price Chart",
    },
  },
};

// Generate Fake Bitcoin Price Data for the Last 12 Months
const generateBitcoinPriceData = (count:number) => {
  const labels = [];
  const data = [];
  const currentDate = new Date();

  // Generate random Bitcoin prices for the last 'count' months
  for (let i = count - 1; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() - i); // Subtract 'i' months from the current date
    const monthName = date.toLocaleString("default", { month: "long" }); // Get the month name
    labels.push(`${monthName}`);
    const randomPrice = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000; // Adjust the price range as needed
    data.push(randomPrice);
  }

  return { labels, data };
};

const { labels, data } = generateBitcoinPriceData(12); // Generate data for the last 12 months

export const CryptoChart = () => {
  return (
    <Line
      options={chartOptions}
      data={{
        labels,
        datasets: [
          {
            label: "Pi Coin Price",
            data,
            borderColor: "rgb(128, 0, 128)",
            backgroundColor: "rgba(128, 0, 128, 0.5)",
            
          },
        ],
      }}
    />
  );
};
