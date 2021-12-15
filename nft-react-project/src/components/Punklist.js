import React from 'react';
import CollectionCard from './CollectionCard';
import './Punklist.css';

const Punklist = ({ punkListData, setSelectedPunk }) => {
   return (
      <div className="punk-list">
         {punkListData.map((punk, index) => (
            <div
               key={index}
               onClick={() => {
                  setSelectedPunk(punk.token_id);
               }}
            >
               <CollectionCard
                  id={punk.token_id}
                  name={punk.name}
                  traits={punk.traits}
                  image={punk.image_preview_url}
               />
            </div>
         ))}
      </div>
   );
};

export default Punklist;
