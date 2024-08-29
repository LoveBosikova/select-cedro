import { Dispatch, ReactNode, SetStateAction } from 'react';

import type { ISimpleSelectItem } from '../select/select';
;
import { IMultiSelectData } from '../../mocks/multiselectMocks';

import style from './sheetfield.module.scss';

interface IPropsSheetField {
    value: ISimpleSelectItem,
    items: ISimpleSelectItem[],
    isCustomSheetField: boolean,
    CustomSheetField?: ReactNode | ReactNode[] | null, 
    setValue: Dispatch<SetStateAction<ISimpleSelectItem | SetStateAction<string> | IMultiSelectData[]>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISimpleSelectItem[]>>
}

function SheetField (props: IPropsSheetField) {

    const { 
        value,
        setValue, 
        setIsFocused, 
        setCurrentData, 
        isCustomSheetField = false, 
        items, 
        CustomSheetField = <></>,
    } = props

    const handleClick = () => { 
        setValue(value); 
        setIsFocused(false)
        setCurrentData(items)
    }; 

    if (!value.value) return null

    return (
        <>
        {isCustomSheetField ? <></> : <li className={style.sheetfield} onClick={handleClick}> { value.value }</li>}
        </>
    )
}

export default SheetField