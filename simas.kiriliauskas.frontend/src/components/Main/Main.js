import React, { useState } from 'react'
import './Main.scss';
import Buttons from '../Buttons/Buttons';
import Grid from '../Grid/Grid';

const Main = ( props ) => {

    const [direction, setDirection] = useState(0);
    const [axis, setAxis] = useState({
        x: 0,
        y: 0
    })
    const [pointed, setPointed] = useState({
        point: 'right'
    })

    const directionClick = () => {
        !!(direction > 270) ? setDirection(0) : setDirection(direction + 90);
        if (direction === 0 ) {
            setPointed({
                point: 'down'
            })
        }
        if (direction === 90) {
            setPointed({
                point: 'left'
            })
        }
        if (direction === 180) {
            setPointed({
                point: 'up'
            })
        }
        if (direction === 270) {
            setPointed({
                point: 'right'
            })
        }
    }

    const checkAxis = () => {
        if (axis.x > 240) {
            setAxis({
                y: 0,
                x: 0
            })
        }
        if (axis.y > 240) {
            setAxis({
                y: 0,
                x: 0
            })
        }
        if (axis.x < 0) {
            setAxis({
                y: 0,
                x: 0
            })
        }
        if (axis.y < 0) {
            setAxis({
                y: 0,
                x: 0
            })
        }
    }

    const axisClick = () => {

        if (pointed.point === 'right') {
            setAxis({
                y: axis.y,
                x: axis.x + 30
            })
        }
        if (pointed.point === 'down') {
            setAxis({
                x: axis.x,
                y: axis.y + 30
            })
        }
        if (pointed.point === 'left') {
            setAxis({
                y: axis.y,
                x: axis.x - 30
            })
        }
        if (pointed.point === 'up') {
            setAxis({
                x: axis.x,
                y: axis.y - 30
            })
        }
        checkAxis();

    }

    console.log(direction);
    console.log(pointed);
    console.log(axis.x);

    return (
        <div className='main'>
            <Buttons directionClick={directionClick} direction={direction} axisClick={axisClick}/>
            <Grid direction={direction} axis={axis}/>
        </div>
    )
}

export default Main
