import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { ApiSlides } from "../apifolder/SliderApi";
const Slider = () => {
  // usestate hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftarrow div */}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>
      {/* slide div */}
      <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative bg-[#A39CE0]">
        <div className="slide flex items-center justify-center h-[100%] ">
          <div className="forImage flex flex-1 justify-center items-center h-[100%]">
            <img
              className="h-[100%] object-cover"
              src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8="
              alt="slide_img"
            />
          </div>
          <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
            <h2 className="text-[55px]">Hey there is an awesome deal today</h2>
            <p className="text-[30px]">Upto 40% off</p>
            <button className="btn mt-[10px]">Shop now</button>
          </div>
        </div>
      </div>
      {/* rightarrow div */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;
