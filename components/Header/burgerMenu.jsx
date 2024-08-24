import BurgerMenuSVG from '../../assets/Header/burgerMenu'

const BurgerMenu = () => {
    return (
        <>
            <div className="flex filterBarDim:hidden flex-1 justify-end items-center">
                <div className="flex items-center justify-center cursor-pointer">
                    <BurgerMenuSVG className={'dark:fill-white fill-[#0A0A0A]'} />
                </div>
            </div>
        </>
    )
}

export default BurgerMenu
