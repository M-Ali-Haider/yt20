const DropdownWrapper = ({ className, children, closeDropDown }) => {
    return (
        <>
            <div
                onClick={() => closeDropDown()}
                className="
                    filterBarDim:hidden
                    fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            <div
                className={` 
                fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
                filterBarDim:translate-x-0 filterBarDim:translate-y-0 filterBarDim:left-auto
                filterBarDim:absolute filterBarDim:right-0 filterBarDim:z-[35] filterBarDim:top-[calc(100%+16px)] 
                bg-[#ffffff] 
                dark:bg-[#19191A] text-base leading-[17.5px] 
                font-normal rounded-2xl ${className}`}
            >
                {children}
            </div>
        </>
    )
}

export default DropdownWrapper
