import Spacer from "@/ui/Spacer";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <Spacer y={40} />
      <p>BUSINESS NO. 102-19-92389 | TEL 010-1234-56789</p>
      <Spacer y={15} />

      <p className="text-xs">COPYRIGHT© SONNETFILM ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
