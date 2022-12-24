import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 "
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px] ">Creamy Hoody Original</h1>
          <p className="pr-[4rem] text-justify mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            blanditiis voluptas, provident veniam aut ipsum non beatae, iste
            quia minus maiores, voluptatibus officia repellendus iure dolore
            qui. Molestiae, dignissimos exercitationem!
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          {/* color variants */}
          <div className="flex flex-2xl mt-7">
            Colors
            <div
              className="bg-red-600 w-[2rem] h-[2rem]
            rounded-full border-2 p-[10px] cursor-pointer
            ml-5"
            >
              1
            </div>
            <div
              className="bg-blue-600 w-[2rem] h-[2rem]
            rounded-full border-2 p-[10px] cursor-pointer
            ml-5"
            >
              2
            </div>
            <div
              className="bg-yellow-400 w-[2rem] h-[2rem]
            rounded-full border-2 p-[10px] cursor-pointer
            ml-5"
            >
              3
            </div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option selected disabled>
                Small
              </option>
              <option selected disabled>
                Medium
              </option>
              <option selected disabled>
                Large
              </option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5">Add to cart</button>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
