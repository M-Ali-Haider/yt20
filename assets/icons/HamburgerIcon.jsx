const HamburgerIcon = ({ className }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                className={className}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 6H26V8H6V6ZM6 14H26V16H6V14ZM26 22H6V24H26V22Z"
                    fill="currentColor"
                />
            </svg>
        </>
    )
}

export default HamburgerIcon
