import React , {useContext} from "react";
import Card from "../components/Card";
import {CoinListContext} from "../context/coinListContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
//Globals URLS
const webUrl = "wss://ws.coincap.io/prices?assets="

const CoinLandingPage = () => {
    const {coinList} = useContext(CoinListContext);
    console.log(coinList);
    return(<div>
    <Header />
            {coinList.map( coin => {
                return <Card 
                key={coin.id}
                webUrl={webUrl}
                crypto={coin.id}
                image={coin.image}
                percentChange={coin.price_change_percentage_24h}
                current_price={coin.current_price}
                />
            })}
            <Footer/>
    </div>);
}

export default CoinLandingPage;