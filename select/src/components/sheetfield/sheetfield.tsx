import { Dispatch, SetStateAction } from 'react';

import style from './sheetfield.module.scss';

import type { ISelectItem } from '../dropdawn/dropdawn';

interface IPropsSheetField {
    value: string,
    items: ISelectItem[],
    setValue: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISelectItem[]>>
}
function SheetField (props: IPropsSheetField) {

    const { value, setValue, setIsFocused, setCurrentData, items } = props

    const handleClick = () => { 
        setValue(value); 
        setIsFocused(false)
        setCurrentData(items)
    }; 

    if (!value) return null

    return (
        <li className={style.sheetfield} onClick={handleClick}>
            { value }
        </li>
    )
}

export default SheetField