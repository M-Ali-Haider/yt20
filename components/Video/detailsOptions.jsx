export function VidDetailsOptions({ setOption, option, options }) {
    return (
        <>
            <div className="mt-9 md:pl-10 flex items-center gap-4">
                {options.map((item, index) => (
                    <div
                        onClick={() => setOption(index)}
                        key={index}
                        className={`${
                            index === option ? 'text-[#E72825]' : 'text-[#99A2AD]'
                        } md:uppercase font-normal text-center text-xs md:text-sm w-[176px] cursor-pointer pb-5 select-none transition-all duration-300 ease-custom-ease`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="h-[1px] md:pl-10 w-full bg-[#DDDDDD] dark:bg-[#F1F1F5] flex gap-4">
                {options.map((_, index) => (
                    <div
                        key={index}
                        className={`w-[176px] ${
                            index === option && 'bg-[#E72825]'
                        }  transition-all duration-300 ease-custom-ease`}
                    ></div>
                ))}
            </div>
        </>
    )
}
