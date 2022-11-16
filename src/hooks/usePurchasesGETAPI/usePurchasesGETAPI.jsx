import { useState } from "react";
import { useEffect } from "react";

const usePurchasesGETAPI = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch(
      "https://warehouse-managment-system-production.up.railway.app/purchases"
    )
      .then((res) => res.json())
      .then((data) => setPurchases(data));
  }, []);

  return [purchases, setPurchases];
};
export default usePurchasesGETAPI;
