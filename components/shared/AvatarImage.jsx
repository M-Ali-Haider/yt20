import React from 'react'
import Image from 'next/image'
import useWindowDimensions from '@/utils/CustomHooks'

const AvatarImage = ({ src, style, sx }) => {
    const { width: windowWidth } = useWindowDimensions()

    return (
        <div className="AvatarContainer" style={{ ...style }}>
            <Image
                src={src ? src : ''}
                width={50}
                height={50}
                alt={'image'}
                style={{
                    ...sx,
                    minHeight: windowWidth < 1024 ? '40px' : windowWidth < 900 ? '35px' : '50px',
                    width: windowWidth < 1024 ? '40px' : windowWidth < 900 ? '35px' : '50px',
                }}
            />
        </div>
    )
}

export default AvatarImage
