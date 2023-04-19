import React from 'react'

interface BannerProps {
    imageUrl: string;
    title: string;
}

export const Banner = (props: BannerProps) => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${props.imageUrl}` }}>
            <h1>{props.title}</h1>
        </div>
    )
}
