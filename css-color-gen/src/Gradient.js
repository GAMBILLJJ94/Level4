import React from 'react'
import Options from './Options'

export default function Gradient () {
    return (
        <div className='body'>
        <div className='leftBox'>
            <div className='gradient'></div>
            <textarea readOnly/>
        </div>
        <Options/>
        </div>
    )
}