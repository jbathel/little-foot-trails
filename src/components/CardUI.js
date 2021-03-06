import React, {useContext} from "react";
import {Link} from "react-router-dom";

import {Context} from "../Context";

/**
 * returns card component with details of a Trail
 * @param  {Trail} {trailInstance} Instance of a Trail to display on the Card Component
 */
export default function Cards({trailInstance}) {
    const {
        trail: [trail, setTrail]
    } = useContext(Context)

    /**
     * sets the persistent Trail detail to the current trail instance
     */
    function setTrailObject() {
        setTrail(trailInstance)
    }

    return (
        <div className="ml-4">
            <div
                className="card m-3"
                style={{
                width: "20rem",
                height: "23rem"
            }}>
                <img className="card-img-top" src={trailInstance.picture} alt="trail"/>
                <div className="card-body">
                    <h4 className="card-title">{trailInstance.name}</h4>
                    <p className="card-text text-muted text-truncate">{trailInstance.description}</p>
                    <Link to="/detail" className="btn btn-info" onClick={setTrailObject}>
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    );
}
