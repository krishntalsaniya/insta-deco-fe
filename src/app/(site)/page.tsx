import Home from "@/components/Home";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insta Deco",
  description: "",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      {/* <Home /> */}
      <ShopWithSidebar />
    </>
  );
}
