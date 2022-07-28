import React from "react";
import { GoDownSvg } from "./styles";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [backToBottom, setBackToBottom] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {

     if (window.scrollY >= 40) {
       setBackToBottom(true);
     } else {
       setBackToBottom(false);
     }
   });
 }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: 99999,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToBottom && (
        <GoDownSvg
          onClick={scrollDown}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z" />
        </GoDownSvg>
      )}
    </>
  );
};

export default ScrollTop;