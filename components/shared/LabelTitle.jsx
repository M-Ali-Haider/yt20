import React from 'react'
import ViewMoreBtn from '@/components/shared/ViewMoreBtn'

const LabelTitle = (title = '') => {
    return (
        <>
            <div className="flex justify-between items-center mobile:py-[2px] mobile:px-3 mobile:mt-3 lg:gap-6 md:pb-1 xl:px-4">
                <h1 className="mobile:text-base md:text-[24px] 2xl:text-[22px] font-semibold text-black dark:text-white">
                    {title}
                </h1>
                <ViewMoreBtn />
            </div>
        </>
    )
}

export default LabelTitle
