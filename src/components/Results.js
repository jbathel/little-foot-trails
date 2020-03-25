import React, {useState, useEffect, useContext} from "react";
import Cards from "./CardUI";

import {Context} from "../Context";

/**
 * Componet which shows the array of filtered Trail Objects
 */
export const Results = () => {
    const [trails,
        setTrails] = useState([]);
    const {tags: [trailTags]} = useContext(Context);

    /**
     * returns a string from an array of tag objects
     * @param  {array} array Array of object ids to be passed as a parameter
     * @param  {string} param Name of the parameter to pass
     */
    function makeQuery(array, param) {
        let jsonObject = Object.assign({}, array);
        var queryString = Object
            .keys(jsonObject)
            .map(key => param + "=" + jsonObject[key])
            .join("&");
        return queryString;
    }

    useEffect(() => {
        async function fetchTrails() {
            let query = makeQuery(trailTags, "tags");
            const results = await fetch("http://localhost:8000/api/trails/?" + query);
            const trails = await results.json();
            setTrails(trails);
        }
        fetchTrails();
    }, [trailTags]);

    return (
        <div className="container mb-5">
            <h2 className="section-heading text-uppercase mt-5">Results</h2>
            {trails.length > 0 && (
                <div className="row">
                    {trails.map((trail, index) => (<Cards key={index} trailInstance={trail}/>))}
                </div>
            )}
        </div>
    );
};
