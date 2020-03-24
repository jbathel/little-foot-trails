import React from "react";
import profilePic from "../images/default.png";

export function ReviewUI({review}) {
    let date = review.created_at,
        cdate = (new Date(date)).toLocaleDateString();

    return (
        <div>
            <div className="card mb-3">
                {/* <div className="card-header">Quote</div> */}
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <div className="row justify-content-left">
                            <div className="col-auto">
                                <img
                                    className="img-thumbnail m-0"
                                    style={{
                                    width: "5rem"
                                }}
                                    src={profilePic}
                                    alt="default profile pic"/>
                            </div>
                            <div className="col-7 m-0">
                                <p>{review.name}</p>
                                <p className="text-muted">
                                    {cdate}
                                </p>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-auto">
                                <p>{review.review}</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};
