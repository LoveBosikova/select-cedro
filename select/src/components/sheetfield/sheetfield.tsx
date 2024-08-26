import { Dispatch, SetStateAction } from 'react';

import style from './sheetfield.module.scss';

import type { ISimpleSelectItem } from '../select/select';

interface IPropsSheetField {
    value: ISimpleSelectItem,
    items: ISimpleSelectItem[],
    setValue: Dispatch<SetStateAction<ISimpleSelectItem>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISimpleSelectItem[]>>
}
function SheetField (props: IPropsSheetField) {

    const { value, setValue, setIsFocused, setCurrentData, items } = props

    const handleClick = () => { 
        setValue(value); 
        setIsFocused(false)
        setCurrentData(items)
    }; 

    if (!value.value) return null

    return (
        <li className={style.sheetfield} onClick={handleClick}>
            { value.value }
        </li>
    )
}

export default SheetField