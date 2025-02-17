// components/Statistics.tsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/config/store";
import { fetchOrders } from "@/Redux/slices/ordersSlice";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Statistics() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: orders = [] } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const [chartData, setChartData] = useState({
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Order Status",
        data: [0, 0],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const activeOrders = orders.filter(order => order.active).length;
    const inactiveOrders = orders.length - activeOrders;

    setChartData({
      labels: ["Active", "Inactive"],
      datasets: [
        {
          label: "Order Status",
          data: [activeOrders, inactiveOrders],
          backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
          borderWidth: 1,
        },
      ],
    });
  }, [orders]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order Statistics</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: "Order Status",
            },
          },
        }}
      />
    </div>
  );
}