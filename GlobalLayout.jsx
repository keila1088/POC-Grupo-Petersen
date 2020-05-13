import React from "react";
import { isBrowser, isMobile } from "react-device-detect";

import NavDesktop from "../_layout/_navigation/NavDesktop";
import NavMobile from "../_layout/_navigation/NavMobile";

export default function GlobalLayout({children}) {
  return (
    <>
      {isBrowser && <NavDesktop component={children}/>}
      {isMobile && <NavMobile component={children}/>}
    </>
  );
}
