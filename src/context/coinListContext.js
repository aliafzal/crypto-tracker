import React, {useEffect,createContext, useState} from "react";
import coinGecko from "../apis/coinGeko"
export const CoinListContext = createContext();

export const CoinListContextProvide = props => {
    const [coinList, setCoinList] = useState([{ath: 64805,
        ath_change_percentage: -30.03054,
        ath_date: "2021-04-14T11:54:46.763Z",
        atl: 67.81,
        atl_change_percentage: 66769.46665,
        atl_date: "2013-07-06T00:00:00.000Z",
        circulating_supply: 18711837,
        current_price: 46092,
        fully_diluted_valuation: 958647852263,
        high_24h: 49826,
        id: "bitcoin",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        last_updated: "2021-05-16T22:18:41.747Z",
        low_24h: 44247,
        market_cap: 854193445331,
        market_cap_change_24h: -51620630568.09363,
        market_cap_change_percentage_24h: -5.69881,
        market_cap_rank: 1,
        max_supply: 21000000,
        name: "Bitcoin",
        price_change_24h: -2463.85433772,
        price_change_percentage_24h: -5.07426,
        price_change_percentage_24h_in_currency: -5.074260438739881,
        roi: null,
        symbol: "btc",
        total_supply: 21000000,
        total_volume: 69461816959}]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get("/coins/markets/", {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 24,
                page: 1,
                price_change_percentage: "24h",
              },
            });
            setCoinList(response.data)
          };
          fetchData();

    },[])

    return(<CoinListContext.Provider value={{coinList}}>
    {props.children}
    </CoinListContext.Provider>);
}