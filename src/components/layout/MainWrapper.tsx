import React, { ReactNode } from "react";

type Props = {
  children: ReactNode; //==>리액트 컴포넌트
};
//ssg가 될것

const MainWrapper = ({ children }: Props) => {
  return (
    <main className="bg-[#f4e8ee] m-[10px] p-[10px] flex flex-col items-center ">
      <div className="flex justify-center bg-white mx-4 my-8 py-[60px] w-[900px]">
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
