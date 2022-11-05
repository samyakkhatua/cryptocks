import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Routes, Route, Switch } from 'react-router-dom';

import Coins from './components/Coins';
import Navbar from './components/Navbar';

import Coin from './routes/Coin';
import Converter from './routes/Converter';
// import Error from './routes/Error';

function App() {
  const [coins, setCoins] = useState([])

  //=========================
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

 //=========================


  return (
    <div className="App">
      <Navbar/>
        <Routes>
      {/* <Switch> */}
          <Route exact path='/' element={<Coins coins={coins} />} />

          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>

          <Route path='/converter' element={<Converter />} />

          {/* <Route path='*' <NoMatch /> */}

          {/* <Route path="*">
              <NoMatch />
            </Route> */}

        </Routes>

      {/* </Switch> */}
    </div>
  );
}

export default App;
