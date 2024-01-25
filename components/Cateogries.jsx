import CategoryIcon from '@/assets/icons/CategoryIcon'
import DownArrowIcon from '@/assets/icons/DownArrowIcon'
import useWindowDimensions from '@/utils/CustomHooks'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Categories({ onCategoryChange, selectedCategory }) {
    const { width: windowWidth } = useWindowDimensions()
    const isAboveTablet = windowWidth > 768;

    const handleCategoryClick = (category) => {
        onCategoryChange(category)
    }

    return (
        <div className="z-100 top-16 text-right md:px-0 ">
            <Menu as="div" className="relative text-left">
                <div>
                    <Menu.Button
                        style={{ color: 'white' }}
                        className="d-flex items-center z-100 h-[36px] tablet:h-[46px] bg-red-500 inline-flex w-[90px] tablet:w-[240px]  justify-between rounded-md px-4 py-2 text-[17px] font-medium  bg-gradient-to-r from-[#E72825] to-[#F37F1F]  dark:text-white text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                        {isAboveTablet ? <CategoryIcon /> : ''}
                        <p
                            className="Text font-bold text-clip overflow-hidden "
                            style={{
                                width: '100%',
                                overflow: 'hidden',
                                position: 'relative',
                                margin: '0 5px 0 5px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                textOverflow: isAboveTablet ? 'ellipsis' : '',
                                fontSize: !isAboveTablet ? '12px' : '',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {' '}
                            {!!selectedCategory && isAboveTablet ? `Category : ${selectedCategory}` : 'Category'}
                        </p>
                            <DownArrowIcon
                            className="DownArrow w-4 dark:color-white color-black"
                            sx={{
                                height: '20px !important',
                                width: '20px !important',
                                display: !isAboveTablet ? 'none' : ''
                            }}
                            />
                    </Menu.Button>
                        </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        style={{ left: '0px' }}
                        className="DropDown absolute z-10 right-0 mt-2 w-full origin-top-right divide-y font-medium divide-gray-100 rounded-md  shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-[#19191A] bg-white dark:text-white text-black duration-1000 transition-all"
                    >
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleCategoryClick('All')}
                                        className={`${
                                            selectedCategory === 'All'
                                                ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                : 'dark:text-white text-black'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        All
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleCategoryClick('Now')}
                                        className={`${
                                            active
                                                ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                : `dark:text-white text-black ${
                                                      selectedCategory === 'Now'
                                                          ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                          : ''
                                                  }`
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Now
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleCategoryClick('Music')}
                                        className={`${
                                            active
                                                ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                : `dark:text-white text-black ${
                                                      selectedCategory === 'Music'
                                                          ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                          : ''
                                                  }`
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Music
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleCategoryClick('Gaming')}
                                        className={`${
                                            active
                                                ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                : `dark:text-white text-black ${
                                                      selectedCategory === 'Gaming'
                                                          ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                          : ''
                                                  }`
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Gaming
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleCategoryClick('Movies')}
                                        className={`${
                                            active
                                                ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                : `dark:text-white text-black ${
                                                      selectedCategory === 'Movies'
                                                          ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                          : ''
                                                  }`
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Movies
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
