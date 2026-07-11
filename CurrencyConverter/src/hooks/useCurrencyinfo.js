import { useEffect, useState } from "react";

//API Call - (only when people want to use it)
//useEffect need two things i.e call back and dependencies.
    
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`);

        const result = await response.json();

        if (result.result === "success") {
          setData(result.rates);
        } else {
          setData({});
        }
      } catch (error) {
        console.error(error);
        setData({});
      }
    }

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;