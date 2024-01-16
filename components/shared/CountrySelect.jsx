import { useEffect, useState } from 'react'
import ReactCountryFlagsSelect from 'react-country-flags-select'
import '@/components/shared/CountrySelect.css'

const CountrySelect = ({ selectedRegion, setSelectedRegion }) => {
    const classes = {
        selectWrapper: 'SelectWrapper rounded-none border-none dark:text-white text-black',
        container: 'Container',
        searchSelect:
            'SearchSelect bg-gradient-to-r from-[#E72825] to-[#F37F1F] bg-white  placeholder-white decoration-inherit borderNone w-full',
        option: 'Option dark:bg-[#19191A] bg-white dark:text-white text-black borderNone',
        // optionsWrapper: 'OptionsWrapper bg-black dark:text-black text-black',
        buttonSelect: 'ButtonSelect',
        buttonSelectText: 'ButtonSelectText',
        // clearIcon: 'ClearIcon bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white',
        // optionFlag: 'OptionFlag bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white',
        // optionText: 'OptionText bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white',
        openIcon: 'OpenIcon color-white',
        closeIcon: 'CloseIcon',
    }

    return (
        <div
            className="Flag_Container z-100 top-16 w-full md:w-72 text-right mobile:px-2 md:px-0  "
            style={{ minWidth: '288px' }}
        >
            <ReactCountryFlagsSelect
                // labelWithCountryCode
                // countries={['US', 'GB', 'FR', 'DE', 'IT']}
                // defaultCountry="US"
                // options={countries}
                clearIcon={false}
                searchable
                searchPlaceholder="Search Country"
                selected={selectedRegion}
                onSelect={setSelectedRegion}
                selectHeight={52}
                selectWidth={'100%'}
                optionSize={16}
                selectedSize={16}
                optionsListMaxHeight={300}
                classes={classes}
                ClassName="CountryFlags"
            />
        </div>
    )
}

export default CountrySelect
