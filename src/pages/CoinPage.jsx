import React , {useState,useEffect}from "react";
import {useParams} from "react-router-dom";
import coinGecko from "../apis/coinGeko";
import CoinStats from  "../components/CoinStats";
import Footer from "../components/Footer";
import Header from "../components/Header";



function CoinPage() {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});

    const formatData = (data) => {
        return data.map((elem) => {
          return {
            time: elem[0],
            prices: elem[1].toFixed(2),
          };
        });
      };

    useEffect(() => {
        const fetchData = async () => {
          const [day, week, year, detail] = await Promise.all([
            coinGecko.get(`/coins/${id}/market_chart/`, {
              params: {
                vs_currency: "usd",
                days: "1",
              },
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
              params: {
                vs_currency: "usd",
                days: "7",
              },
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
              params: {
                vs_currency: "usd",
                days: "365",
              },
            }),
            coinGecko.get("/coins/markets/", {
              params: {
                vs_currency: "usd",
                ids: id,
              },
            }),
          ]);
          console.log(day);
    
          setCoinData({
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data[0],
          });
        };
    
        fetchData();
      },[id]);
    
  return (
    <div>
    <Header />
      <CoinStats data={coinData.detail} />
      <Footer />
    </div>
  );
}

export default CoinPage;
