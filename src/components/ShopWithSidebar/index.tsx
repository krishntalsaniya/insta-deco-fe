"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import CustomSelect from "./CustomSelect";
// import CategoryDropdown from "./CategoryDropdown";
import GenderDropdown from "./GenderDropdown";
import SizeDropdown from "./SizeDropdown";
import ColorsDropdwon from "./ColorsDropdwon";
import PriceDropdown from "./PriceDropdown";
// import shopData from "../Shop/shopData";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";

import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    title: "Modern Sofa Set",
    reviews: 12,
    price: 899.0,
    category: "Furniture",
    discountedPrice: 699.0,
    id: 1,
    imgs: {
      thumbnails: [
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop",
      ],
      previews: [
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  },
  {
    title: "Luxury Chandelier",
    reviews: 8,
    price: 499.0,
    category: "Lighting",
    discountedPrice: 399.0,
    id: 2,
    imgs: {
      thumbnails: [
        "https://plus.unsplash.com/premium_photo-1677798200214-0a0c5f523dd6?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1677798200214-0a0c5f523dd6?w=600&auto=format&fit=crop&q=60",
      ],
      previews: [
        "https://plus.unsplash.com/premium_photo-1677798200214-0a0c5f523dd6?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1677798200214-0a0c5f523dd6?w=600&auto=format&fit=crop&q=60",
      ],
    },
  },
  {
    title: "Minimalist Wooden Dining Table",
    reviews: 10,
    price: 799.0,
    category: "Furniture",
    discountedPrice: 599.0,
    id: 3,
    imgs: {
      thumbnails: [
        "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?w=600&auto=format&fit=crop&q=60",
      ],
      previews: [
        "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?w=600&auto=format&fit=crop&q=60",
      ],
    },
  },
  {
    title: "Elegant Floor Lamp",
    reviews: 6,
    price: 199.0,
    category: "Lighting",
    discountedPrice: 149.0,
    id: 4,
    imgs: {
      thumbnails: [
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
      ],
      previews: [
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
      ],
    },
  },
  {
    title: "Classic Table Lamp",
    reviews: 9,
    price: 159.0,
    category: "Lighting",
    discountedPrice: 129.0,
    id: 6,
    imgs: {
      thumbnails: [
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
      ],
      previews: [
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?w=600&auto=format&fit=crop&q=60",
      ],
    },
  },
  {
    title: "Luxury King Size Bed",
    reviews: 14,
    price: 1299.0,
    category: "Furniture",
    discountedPrice: 999.0,
    id: 5,
    imgs: {
      thumbnails: [
        "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=600&auto=format&fit=crop&q=60",
      ],
      previews: [
        "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=600&auto=format&fit=crop&q=60",
      ],
    },
  },
];

const ShopWithSidebar = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Best Selling", value: "1" },
    { label: "Old Products", value: "2" },
  ];

  const categories = [
    {
      name: "Furniture",
      products: 15,
      isRefined: true,
    },
    {
      name: "Lighting",
      products: 18,
      isRefined: false,
    },
    {
      name: "Wall Decor",
      products: 25,
      isRefined: false,
    },
    {
      name: "Flooring",
      products: 12,
      isRefined: false,
    },
    {
      name: "Curtains & Blinds",
      products: 10,
      isRefined: false,
    },
    {
      name: "Accessories",
      products: 20,
      isRefined: false,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    // closing sidebar while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const filteredProducts =
    selectedCategory === "All"
      ? shopData
      : shopData.filter((product) => product.category === selectedCategory);

  // filter products based on search term
  const filteredSearchProducts = filteredProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* <Breadcrumb
        title={"Explore All Products"}
        pages={["shop", "/", "shop with sidebar"]}
      /> */}
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            {/* <!-- Sidebar Start --> */}
            <div
              className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
                productSidebar
                  ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
                  : "-translate-x-full"
              }`}
            >
              <button
                onClick={() => setProductSidebar(!productSidebar)}
                aria-label="button for product sidebar toggle"
                className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
                  stickyMenu
                    ? "lg:top-20 sm:top-34.5 top-35"
                    : "lg:top-24 sm:top-39 top-37"
                }`}
              ></button>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-6">
                  {/* <!-- filter box --> */}
                  <div className="bg-white shadow-1 rounded-lg py-4 px-5">
                    <div className="flex items-center justify-between">
                      <p>Filters:</p>
                      <button className="text-blue">Clean All</button>
                    </div>
                  </div>

                  {/* <!-- category box --> */}
                  {/* <CategoryDropdown categories={categories} /> */}
                  <CategoryDropdown
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />

                  {/* <!-- gender box --> */}
                  {/* // <!-- size box --> */}
                  {/* <SizeDropdown /> */}

                  {/* // <!-- color box --> */}
                  {/* <ColorsDropdwon /> */}

                  {/* // <!-- price range box --> */}
                  <PriceDropdown />
                </div>
              </form>
            </div>
            {/* // <!-- Sidebar End --> */}

            {/* // <!-- Content Start --> */}
            <div className="xl:max-w-[870px] w-full">
              <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                <div className="flex items-center justify-between">
                  {/* <!-- top bar left --> */}
                  <div className="flex flex-wrap items-center gap-4">
                    <CustomSelect options={options} />

                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border p-2 rounded-md w-64"
                    />
                    {/* <p>
                      Showing <span className="text-dark">9 of 50</span>{" "}
                      Products
                    </p> */}
                  </div>

                  {/* <!-- top bar right --> */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setProductStyle("grid")}
                      aria-label="button for product grid tab"
                      className={`${
                        productStyle === "grid"
                          ? "bg-blue border-blue text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}
                    >
                      <CiGrid41 className="" />
                    </button>

                    <button
                      onClick={() => setProductStyle("list")}
                      aria-label="button for product list tab"
                      className={`${
                        productStyle === "list"
                          ? "bg-blue border-blue text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}
                    >
                      <CiGrid2H />
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Products Grid Tab Content Start --> */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {filteredSearchProducts.length > 0
                  ? filteredSearchProducts.map((item, key) =>
                      productStyle === "grid" ? (
                        <SingleGridItem item={item} key={key} />
                      ) : (
                        <SingleListItem item={item} key={key} />
                      )
                    )
                  : "No Products available"}
              </div>
            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopWithSidebar;

const categories = ["All", "Furniture", "Lighting"];

const CategoryDropdown = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white shadow-1 rounded-lg mb-4 p-8">
      <label className="font-semibold">Category:</label>
      <select
        className="border p-2 w-full"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
