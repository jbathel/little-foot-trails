import React from 'react';
import image from '../images/Img_01.jpg'


export const Cards = () => {
    return (
        <div class="card m-3" style={{width: '20rem'}}>
            <img className="card-img-top" src={image} alt="trail" />
                <div className="card-body">
                    <h4 className="card-title">Woodland Trail</h4>
                    <p className="card-text text-muted">Some short description of the trail can go here.</p>
                    <a href="#" class="btn btn-info">Explore</a>
                </div>
        </div>
    )
}
