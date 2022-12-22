import React from "react";
import { ApiCategories } from "../apifolder/CategoryApi";
import Category from "./Category";
const Categories = () => {
  return (
    <div className="flex items-center justify-between p-5">
      {ApiCategories.map((category, index) => {
        return <Category item={category} key={index} />;
      })}
    </div>
  );
};

export default Categories;
