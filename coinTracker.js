import { useEffect, useState } from "react";

const CoinList = () => {
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState("");
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const coinsFunc = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await res.json();
      const coins = json.slice(0, 20);

      setCoins(coins);
      setCoin(coins[0]);
      setLoading(false);
    };
    coinsFunc();
  }, []);
  const onChange = (e) => {
    const selected = e.target.value;
    const coin = coins.filter((co) => {
      const len = co.name.length;
      const sec = selected.slice(0, len);
      return sec === co.name;
    });
    setCoin(coin[0]);
  };
  const onChan = (e) => {
    const money = Number(e.target.value);
    console.log(money);
    console.log(typeof money);
    setMoney(money);
  };
  return (
    <>
      <h1>CoinList TOP 20</h1>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <select onChange={onChange}>
            {coins.map((coin, idx) => (
              <option key={idx}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
          <label htmlFor="money">how much money do you have</label>
          <input
            id="money"
            value={money}
            onChange={onChan}
            placeholder="dollers"
          />
        </>
      )}

      <hr />
      {coin ? (
        <div>
          <h1>
            {coin.name} ({coin.symbol})
          </h1>
          <p>{coin.last_updated}</p>
          <p>15m {coin.quotes.USD.percent_change_15m}% </p>
          <span>{coin.quotes.USD.price} USD</span>

          {money === 0 || "" || null ? (
            ""
          ) : (
            <h2>you can buy {money / coin.quotes.USD.price}!!!</h2>
          )}
        </div>
      ) : null}
    </>
  );
};

function App() {
  return (
    <div>
      <CoinList />
    </div>
  );
}

export default App;
