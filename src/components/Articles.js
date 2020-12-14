import React, { useState, useEffect } from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle';

export default function Articles(props) {
    const [Article, setArticle] = useState(null);
    
// console.log(props);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json()).then(res => setArticle(res))
        }
            , 2000)
    }, [])

    return (
        <div className='articles'>
            <h2>Articles</h2>
            
          



            {!Article && [1,2,3,4,5].map((el)=> <SkeletonArticle key={el} theme={props.mode} />) }
            {Article && (
                Article.map(art => (
                    <div key={art.id} className='article'>
                        <h2>{art.title}</h2>
                        <p>{art.body}</p>
                    </div>
                )

                )
            ).slice(0, 10)}
        </div>
    )
}
