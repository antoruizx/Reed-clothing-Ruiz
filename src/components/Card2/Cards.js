import React, { Component } from 'react';
import Card2 from './CardUI';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                    <div className="col-md-4">
                        <Card2 />
                    </div>
                </div>
            </div>
        );
    };
};

export default Cards;