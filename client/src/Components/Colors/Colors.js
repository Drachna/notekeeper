import React from 'react';
import { Card } from 'react-bootstrap'
import {BsCircleFill } from "react-icons/bs";
import './colors.css'
const Colors = () => {
    return (
        <div>
            <Card style={{ width: '65px' }}>
                <Card.Body>
                    <BsCircleFill className="colors" style={{ color: 'Blue' }} />
                    <BsCircleFill className="colors" style={{ color: 'Yellow' }} />
                    <BsCircleFill className="colors" style={{ color: 'Red' }} />
                </Card.Body>
                <Card.Body>
                    <BsCircleFill className="colors" style={{ color: 'Pink' }} />
                    <BsCircleFill className="colors" style={{ color: 'Black' }} />
                    <BsCircleFill className="colors" style={{ color: 'Green' }} />
                </Card.Body>
            </Card>
        </div>
    );
};

export default Colors;