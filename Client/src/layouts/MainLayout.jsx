import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "60px" }}>
        <Outlet />
      </main>
    </>
  );
}
