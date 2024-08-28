import { Dispatch, ReactNode, SetStateAction } from 'react';

import style from './sheetfield.module.scss';

import type { ISimpleSelectItem } from '../select/select';
import { IActionFieldTestData } from '../../mocks/actionSheetMocks';
import { IMultiSelectData } from '../../mocks/multiselectMocks';

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
        ...rest
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