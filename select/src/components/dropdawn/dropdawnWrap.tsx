import { TYPES } from '../../utils/globals';

import { IPropsDropdawn } from './dropdawn';

import pickDropDownStyle from '../../utils/pickDropDownStyle';

function DropDownWrap (props: IPropsDropdawn) {
    const { 
        type = TYPES.DEFAULT,
        items,
        value, 
        isActive, 
        setValue, 
        setIsFocused, 
        setCurrentData,
        isCustomSheetField = false,
        CustomSheetField,
        children,
        ...rest } = props

    return (
        <ul className={pickDropDownStyle(isActive, type)}>
            {children}
        </ul>
    )
}

export default DropDownWrap