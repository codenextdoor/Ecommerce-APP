import { Close } from "@mui/icons-material";
import React, { useState } from "react";

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-content"
  );
  return (
    <div>
      <h2>Hurry up its 40% off now</h2>
      <Close className="cursor-pointer" />
    </div>
  );
};

export default Announce;
