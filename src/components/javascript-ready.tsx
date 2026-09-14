"use client";

import { useEffect } from "react";

export default function JavascriptReady() {
  useEffect(() => {
    document.documentElement.classList.remove("no-js");
  }, []);

  return null;
}
