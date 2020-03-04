import React from 'react'
import Card from './CardUI'

export default function Featured() {
    return (
        <div className="container-fluid d-flex justify-content-center mt-5 mb-5">
            <div className="row">
                <div className="col-md-4">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}
