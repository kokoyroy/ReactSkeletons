import React, { useEffect, useState } from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

export default function User(props) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json()).then(res => setProfile(res))
        }
            , 3000)
    }, [])
    return (
        <div className='user'>
            <h2>User Details</h2>
            {!profile && <SkeletonProfile theme={props.mode}/>}
            {profile && (
                <div className="profile">
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>

                </div>
            )}
        </div>
    )
}
