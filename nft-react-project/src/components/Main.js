import React from 'react';
import { useState, useEffect } from 'react';
import './Main.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({ selectedPunk, punkListData }) => {
   const [activePunk, setActivePunk] = useState(punkListData[0]);

   useEffect(() => {
      setActivePunk(punkListData[selectedPunk]);
   }, [punkListData, selectedPunk]);

   return (
      <div className="main">
         <div className="main-content">
            <div className="punk-container">
               <img
                  className="selected-punk"
                  src={activePunk.image_preview_url}
                  alt=""
               />
            </div>
            <div className="punk-highlight">
               <div className="punk-details" style={{ color: '#fff' }}>
                  <div className="title">
                     {activePunk.name}
                     <span className="item-number">
                        •#{activePunk.token_id}
                     </span>
                  </div>
               </div>

               <div className="owner">
                  <div className="owner-image-container">
                     <img src={activePunk.owner.profile_img_url} alt="" />
                  </div>
                  <div className="owner-details">
                     <div className="owner-name-handle">
                        <div>{activePunk.owner.address}</div>
                        <div className="owner-handle">@jw</div>
                     </div>
                     <div className="owner-link">
                        <img src={instagramLogo} alt="" />
                     </div>
                     <div className="owner-link">
                        <img src={twitterLogo} alt="" />
                     </div>
                     <div className="owner-link">
                        <img src={moreIcon} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Main;

// activePunk.image_original_url

// activePunk.name;
