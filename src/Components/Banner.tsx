import React from 'react'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    title: string;
}

export const Banner = (bannerProps: BannerProps) => {

    const bannerStyles: React.CSSProperties = {
        backgroundImage: `url(${bannerProps.imageUrl})`,
    }

    return (
        <div {...bannerProps} className='banner' style={{...bannerProps.style,  ...bannerStyles}} >
            <h1>{bannerProps.title}</h1>
        </div>
    )
}
