import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const useProgressBar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NProgress.start();

    setTimeout(() => {
      NProgress.done();
      setLoading(false);
    }, 1500); // Simulated delay for effect

    return () => NProgress.remove();
  }, []);

  return loading;
};

export default useProgressBar;