import React from 'react';
import { Card } from 'react-bootstrap'
import {BsCircleFill ,BsCircle} from "react-icons/bs";
import './colors.css'
const Colors = (props) => {
    return (
        <div>
            {/* #ecb2b2 */}
            <Card style={{ width: '65px' }}>
                <Card.Body>
                <BsCircle className="colors"  onClick={()=>props.setColor('white')}/>
                    <BsCircleFill className="colors" style={{ color: '#cfcfff' }} onClick={()=>props.setColor('#cfcfff')}/>
                    <BsCircleFill className="colors" style={{ color: '#eaea92' }}  onClick={()=>props.setColor('#eaea92')}/>
                   
                </Card.Body>
                <Card.Body>
                <BsCircleFill className="colors" style={{ color: '#ecb2b2' }} onClick={()=>props.setColor('#ecb2b2')}/>
                    <BsCircleFill className="colors" style={{ color: 'Pink' }} onClick={()=>props.setColor('pink')}/>
                    {/* <BsCircleFill className="colors" style={{ color: '#fbc96c' }} onClick={()=>props.setColor('#fbc96c')}/> */}
                    <BsCircleFill className="colors" style={{ color: '#8fd48f' }} onClick={()=>props.setColor('#8fd48f')}/>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Colors;