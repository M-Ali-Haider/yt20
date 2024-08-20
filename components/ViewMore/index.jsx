const HeadingAndViewMore = ({ heading, className, setViewMore, isViewMore }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div
                    className={`text-base font-medium 
                 text-[#0A0A0A] dark:text-white transition-all duration-500 ease-custom-ease ${className}`}
                >
                    {heading}
                </div>
                <button
                    onClick={() => setViewMore(!isViewMore)}
                    className="w-[97px] h-[30px] md:w-[127px] md:h-[39px] border-none bg-white dark:bg-[#19191A] flex items-center justify-center gap-[6px] md:gap-[10px] rounded-full transition-all duration-500 ease-custom-ease"
                >
                    <span className="font-light text-[10px] leading-[12.21px] md:text-sm md:leading-[17.09px] text-[#0A0A0A] dark:text-white">
                        {isViewMore ? 'View Less' : 'View More'}
                    </span>
                    <ViewMoreSVG />
                </button>
            </div>
        </>
    )
}

export default HeadingAndViewMore

const ViewMoreSVG = (props) => (
    <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M0.230252 10.7697C0.0828219 10.6223 0 10.4223 0 10.2138C0 10.0052 0.0828219 9.80523 0.230252 9.65775L4.39276 5.49525L0.230252 1.33275C0.0870001 1.18443 0.00773378 0.985779 0.00952556 0.779583C0.0113173 0.573387 0.0940238 0.376144 0.239832 0.230336C0.38564 0.0845283 0.582883 0.00182152 0.789079 2.97285e-05C0.995275 -0.00176206 1.19393 0.0775046 1.34224 0.220757L6.06074 4.93926C6.20818 5.08673 6.291 5.28672 6.291 5.49525C6.291 5.70378 6.20818 5.90377 6.06074 6.05125L1.34224 10.7697C1.19477 10.9172 0.994778 11 0.786249 11C0.577719 11 0.377727 10.9172 0.230252 10.7697Z"
            fill="black"
        />
        <path
            d="M0.230252 10.7697C0.0828219 10.6223 0 10.4223 0 10.2138C0 10.0052 0.0828219 9.80523 0.230252 9.65775L4.39276 5.49525L0.230252 1.33275C0.0870001 1.18443 0.00773378 0.985779 0.00952556 0.779583C0.0113173 0.573387 0.0940238 0.376144 0.239832 0.230336C0.38564 0.0845283 0.582883 0.00182152 0.789079 2.97285e-05C0.995275 -0.00176206 1.19393 0.0775046 1.34224 0.220757L6.06074 4.93926C6.20818 5.08673 6.291 5.28672 6.291 5.49525C6.291 5.70378 6.20818 5.90377 6.06074 6.05125L1.34224 10.7697C1.19477 10.9172 0.994778 11 0.786249 11C0.577719 11 0.377727 10.9172 0.230252 10.7697Z"
            fill="url(#paint0_linear_118_17198)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_118_17198"
                x1={-2.34679e-9}
                y1={5.5679}
                x2={6.291}
                y2={5.5679}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#E72825" />
                <stop offset={1} stopColor="#F37F1F" />
            </linearGradient>
        </defs>
    </svg>
)
