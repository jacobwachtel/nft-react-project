import Header from './components/Header';
import './App.css';
// import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
   const [punkListData, setPunkListData] = useState([]);
   const [selectedPunk, setSelectedPunk] = useState(0);

   useEffect(() => {
      const getMyNft = async () => {
         const openseaData = await axios.get(
            'https://testnets-api.opensea.io/assets?asset_contract_address=0x5E64cEF0A2450d44ff16c06a7BED89C3e509AF99&order_direction=asc'
         );
         console.group(openseaData.data.assets);
         setPunkListData(openseaData.data.assets);
      };

      return getMyNft();
   }, []);

   return (
      <div className="app">
         <Header />
         {punkListData.length > 0 && (
            <>
               <Main punkListData={punkListData} selectedPunk={selectedPunk} />
               <Punklist
                  punkListData={punkListData}
                  setSelectedPunk={setSelectedPunk}
               />
            </>
         )}
      </div>
   );
}

export default App;
