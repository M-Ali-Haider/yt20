'use client'
import { useState } from 'react'

const CategoryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('Category')

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        closeDropdown()
    }
    return (
        <div class="relative w-70 inline-block text-left ml-6">
            <button
                id="dropdownAvatarNameButton"
                onClick={toggleDropdown}
                data-dropdown-toggle="dropdownAvatarName"
                class="flex items-center justify-between gap-x-2  px-8 rounded-lg w-70 h-14 text-[#99A2AD]
               bg-white hover:bg-orange-500 hover:text-white dark:hover:text-white md:me-0 "
                type="button"
            >
                <span class="sr-only test-[#99A2AD]">Open user menu</span>
                {/* <FilterCategoryIcon /> */}
                {selectedCategory}
                <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    id="dropdownAvatarName"
                    class="origin-top-right absolute right-0 w-[173px] rounded-md shadow-lg bg-white z-50"
                >
                    <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownAvatarNameButton"
                    >
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                                // onClick={closeDropdown}
                                onClick={() => handleCategoryClick('Games')}
                            >
                                Games
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                                // onClick={closeDropdown}
                                onClick={() => handleCategoryClick('Music')}
                            >
                                Music
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                                // onClick={closeDropdown}
                                onClick={() => handleCategoryClick('Drama')}
                            >
                                Drama
                            </a>
                        </li>
                    </ul>
                    <div class="py-2">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                            //   onClick={closeDropdown}
                            onClick={() => handleCategoryClick('All')}
                        >
                            All
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CategoryDropdown
