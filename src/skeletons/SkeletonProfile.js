import React from 'react'
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement'

function SkeletonProfile(props) {
    const themeClass = props.theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div >
                    <SkeletonElement type='avatar' />
                </div>
                <div >
                    <SkeletonElement type='title' />
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                </div>
                <Shimmer/>
            </div>
        </div>
    )
}

export default SkeletonProfile
