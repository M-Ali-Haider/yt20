import HeaderLogoSVG from '@/assets/Header/logo'
import Link from 'next/link'

const HeaderLogo = () => {
    return (
        <>
            <div className="flex-1">
                <Link href={'/'}>
                    <HeaderLogoSVG />
                </Link>
            </div>
        </>
    )
}

export default HeaderLogo
