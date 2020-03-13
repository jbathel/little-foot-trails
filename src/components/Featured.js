import React, { useState, useEffect } from 'react'
import Cards from './CardUI'


export const Featured = ({onClickFeatured}) => {
    const [trails, setTrails] = useState([]);

    async function fetchTrails() {
      const results = await fetch("http://localhost:8000/api/trails/?featured=true");
      const trails = await results.json();
      setTrails(trails);
    }

    useEffect(() => {
      fetchTrails();
    }, []);

    function getCardTrail(trailObject) {
        onClickFeatured(trailObject);
    }


    return (
    <div className="container">
      {trails.length > 0 &&
      <div className="row">
        {trails.map((trail, index) => (
            <Cards key={index} trail={trail} onCardClick={getCardTrail} />
        ))}
      </div>
      }
    </div>
    )
}
