'use Client'
import CategoryIcon from '@/assets/icons/CategoryIcon'
import DownArrowIcon from '@/assets/icons/DownArrowIcon'
import useWindowDimensions from '@/utils/CustomHooks'
import { useDebounce } from '@/utils/globalFunctions'
import { useGetRegions } from '@/utils/http'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Region({ selectedRegion, setSelectedRegion, country }) {
    const { width: windowWidth } = useWindowDimensions()
    const isAboveTablet = windowWidth > 768;
    const [search, setSearch] = useState('')
    const searchString = useDebounce(search, 100)

    const { data, isLoading } = useGetRegions(searchString)
    const regions = data?.data

    // console.log('search', search)
    // console.log('Regions', regions)
    const handleRegionClick = (region) => {
        // console.log('region clicked', region)
        if (region === selectedRegion) {
            setSelectedRegion('Global')
        } else {
            setSelectedRegion(region)
        }
        // onCategoryChange(category)
    }

    return (
        <div className="z-100 top-16 text-right md:px-0 ">
            <Menu as="div" className="relative text-left">
                    <Menu.Button
                        style={{
                            color: 'white',
                        }}
                        // className="d-flex items-center h-[36px] tablet:h-[46px] z-100 bg-red-500 inline-flex w-full justify-between rounded-md px-4 py-2 text-[17px] font-medium  bg-gradient-to-r from-[#E72825] to-[#F37F1F]  dark:text-white text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 min-w-max"
                        className="d-flex items-center z-100 h-[36px] tablet:h-[46px] bg-red-500 inline-flex w-[90px] tablet:w-[240px]  justify-between rounded-md px-4 py-2 text-[17px] font-medium  bg-gradient-to-r from-[#E72825] to-[#F37F1F]  dark:text-white text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                        {isAboveTablet ? <CategoryIcon /> : ''}
                        <p
                            // className="Text font-bold"
                            className="Text font-bold text-clip overflow-hidden "
                            style={{
                                width: '100%',
                                overflow: 'hidden',
                                position: 'relative',
                                margin: isAboveTablet ? '0 5px 0 5px' : '0px',
                                textAlign:'center',
                                textDecoration: 'none',
                                textOverflow: isAboveTablet ? 'ellipsis' : '',
                                fontSize: !isAboveTablet ? '12px' : '',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {' '}
                            {/* Region */}
                            {!!selectedRegion && isAboveTablet ? `Region: ${selectedRegion}` : 'Region'}
                        </p>
                            <DownArrowIcon
                                className="DownArrow w-4 dark:color-white color-black"
                                sx={{
                                    height: isAboveTablet ? '20px' : '10px',
                                    width: isAboveTablet ? '20px' : '10px',
                                }}
                            />
                    </Menu.Button>
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
                        className="DropDown absolute z-10 right-0 mt-2 w-full origin-top-right divide-y font-medium divide-gray-100 rounded-md  shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-[#19191A] bg-white dark:text-white text-black duration-1000 transition-all"
                        style={{
                            left: '0px',
                            maxHeight: '220px',
                            overflow: 'hidden scroll',
                            maxWidth: '100%',
                            WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
                            WebkitScrollbar: {
                                display: 'none',
                            },
                        }}
                    >
                        <div className="px-1 py-1 ">
                            <div className="SearchDiv" style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <Menu.Item disabled>
                                    {({ active }) => (
                                        <>
                                            <div className="Search_Main_Div">
                                                <input
                                                    type="text"
                                                    className=" bg-white mobile:min-h-[40px] mobile:px-2 mobile:text-[14px] mobile:font-[500] mobile:w-full mobile:p-1 md:text-lg md:w-[426px] md:h-[45px] lg:w-[390px] lg:h-[40px] xl:w-[400px] xl:h-[45px] 2xl:w-[400px] 2xl:h-[30px] 2xl:text-[16px] 2xl:px-2  px-1 md:px-2 font-medium dark:text-white text-black dark:placeholder:text-white placeholder:text-black rounded mobile:rounded-lg md:rounded-lg lg:rounded-md mobile:border-[.1px] border-[1px] border-[gray] outline-solid  outline-[gray] focus:outline-[0px] mobile:focus:outline-[0px]  outline-opacity-80 bg-opacity-20 backdrop-filter backdrop-blur-10 transition-width-[200px] duration-900 ease-in-out hover:opacity-80 hover:transition-transform duration-900"
                                                    placeholder="Search"
                                                    style={{ width: '100%', fontSize: '16px' }}
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                            </div>
                                        </>
                                    )}
                                </Menu.Item>
                            </div>

                            {/* Global Region */}
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleRegionClick(`Global`)}
                                            className={`${
                                                active
                                                    ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                    : `dark:text-white text-black ${
                                                          selectedRegion === 'Global'
                                                              ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                              : 'dark:text-white text-black'
                                                      }`
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Global
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>

                            {regions?.map((region, key) => {
                                return (
                                    <div key={region?.id}>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => handleRegionClick(`${region?.region}`)}
                                                    className={`${
                                                        active
                                                            ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                            : `dark:text-white text-black ${
                                                                  selectedRegion === region?.region
                                                                      ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                                                                      : 'dark:text-white text-black'
                                                              }`
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {region?.region}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                )
                            })}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
