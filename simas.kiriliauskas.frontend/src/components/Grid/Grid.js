import React, { useState } from 'react'
import './Grid.scss'
import SingleGrid from '../SingleGrid/SingleGrid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Grid = ( props ) => {

    return (
        <div className='grid'>
            <div className='grid-pointer' style={{
                transform: `translateX(${props.axis.x}px) translateY(${props.axis.y}px`
                }}>
                <ArrowForwardIcon style={{
                    transform: `rotate(${props.direction}deg)` 
                }}/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
            <div className='grid-row'>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
                <SingleGrid/>
            </div>
        </div>
    )
}

export default Grid
