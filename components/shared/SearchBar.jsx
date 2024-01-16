import SearchBarIcon from '@/assets/icons/SearchBarIcon'

const SearchBar = ({ className }) => {
    return (
        <div className={`flex justify-center gap-2 w-full ${className}`}>
            <div className="search flex justify-center mobile:w-[95%] xl:w-[50%] items-center relative">
                <input
                    type="text"
                    className="bg-white mobile:min-h-[40px] mobile:px-2 mobile:text-[14px] mobile:font-[500] mobile:w-full mobile:p-1 md:text-lg md:w-[426px] md:h-[45px] lg:w-[390px] lg:h-[40px] xl:w-[400px] xl:h-[45px] 2xl:w-[400px] 2xl:h-[30px] 2xl:text-[16px] 2xl:px-2  px-1 md:px-2 font-medium text-white placeholder:text-white rounded mobile:rounded-lg md:rounded-lg lg:rounded-md mobile:border-[.1px] border-[1px] border-[gray] outline-solid  outline-[gray] focus:outline-[0px] mobile:focus:outline-[0px]  outline-opacity-80 bg-opacity-20 backdrop-filter backdrop-blur-10 transition-width-[200px] duration-900 ease-in-out hover:opacity-80 hover:transition-transform duration-900"
                    placeholder="Search"
                />
                <button>
                    {/* <SearchBarIcon className="mobile:w-[22px] mobile:h-[22px] text-white  md:w-[24px] md:h-[24px] md:right-[15.5rem] md:top-3 lg:w-[25px] lg:h-[25px] absolute top-1.5 lg:top-2 mobile:right-2 mobile:top-2.5 xl:top-3 xl:right-24 2xl:top-2.5 2xl:right-22" /> */}
                </button>
            </div>
        </div>
    )
}

export default SearchBar
