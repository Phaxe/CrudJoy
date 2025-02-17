import MyComp from "@/components/MyComponent/MyComp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-[400px] w-full text-center font-semibold my-10">
      DashBoard
      <MyComp />
    </div>
  );
}
