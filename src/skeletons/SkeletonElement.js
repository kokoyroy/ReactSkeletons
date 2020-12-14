import React from 'react'
import './skeleton.css';

function SkeletonElement(props) {
    return (
        <div className={'skeleton ' + props.type}>

        </div>
    )
}

export default SkeletonElement
