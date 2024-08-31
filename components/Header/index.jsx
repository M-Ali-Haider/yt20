import HeaderLogo from './logo'
// import HeaderLinks from './links'
import ThemeToggle from './themeToggle'
import BurgerMenu from './burgerMenu'

const Header = () => {
    return (
        <>
            <header
                className="h-[76px]
                    fixed filterBarDim:relative
                    top-0 left-0 right-0 z-[99]
                    py-6 md:py-[30px] lg:py-8 
                    px-[10px] md:px-[20px] lg:px-16 
                    flex items-center justify-between 
                    bg-[#ffffff] dark:bg-[#19191a] xs:transition-all xs:ease-custom-ease xs:duration-500"
            >
                <HeaderLogo />
                {/* <HeaderLinks /> */}
                <div className="flex-1 hidden filterBarDim:flex items-center justify-end">
                    <ThemeToggle />
                </div>
                <BurgerMenu />
            </header>
        </>
    )
}

export default Header

// className="h-[76px]
//                     fixed
//                     py-6 md:py-[30px] lg:py-8
//                     top-0 left-0 right-0 z-50
//                     px-[10px] md:px-[20px] lg:px-16
//                     flex items-center justify-between
//                     bg-[#ffffff] dark:bg-[#19191a] transition-all ease-custom-ease duration-500"
