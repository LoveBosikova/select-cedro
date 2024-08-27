import style from './dropdawnWrap.module.scss';

import { IPropsDropdawn } from './dropdawn';

function DropDownWrap (props: IPropsDropdawn) {
    const { 
        type,
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

        function (isActive, type) {
            if (!isActive) {
                return style.dropdawn__closed;
            }
            if (isActive && type===)
        }

    return (
        <ul className={isActive ? style.dropdawn__opened : style.dropdawn__closed}>
            {children}
        </ul>
    )
}

export default DropDownWrap