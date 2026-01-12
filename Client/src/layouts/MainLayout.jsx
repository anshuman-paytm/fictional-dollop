import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [search,setSearch]=useState("");
  return (
    <>
      <Navbar onSearch={setSearch} />
      <main style={{ paddingTop: "60px" }}>
        <Outlet context={{ search }} />
      </main>
    </>
  );
}
