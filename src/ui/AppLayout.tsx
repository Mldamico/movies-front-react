import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const AppLayout = () => {
  return (
    <div className="grid h-full grid-cols-4">
      <div className="col-span-4 bg-red-500">
        <Header />
      </div>
      <Sidebar />
      <main className="col-span-3 bg-green-300">
        <Outlet />
      </main>
    </div>
  );
};
