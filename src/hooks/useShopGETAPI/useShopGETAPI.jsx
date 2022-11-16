const { useEffect } = require("react");
const { useState } = require("react");

const useShopGETAPI = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-managment-system-production.up.railway.app/sales")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);
  return [shop, setShop];
};
export default useShopGETAPI;
