const { useEffect } = require("react");
const { useState } = require("react");

const useProductsGETAPI = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      "https://warehouse-managment-system-production.up.railway.app/products"
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product, setProduct];
};

export default useProductsGETAPI;
