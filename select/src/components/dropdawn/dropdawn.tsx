import SheetField from '../sheetfield/sheetfield';

import { Dispatch, SetStateAction } from 'react';

import type { ISimpleSelectItem } from '../select/select';
import { IActionSheetProps } from '../sheetfield/actionSheet';

import { type ReactNode, type ReactElement } from 'react'

import style from './dropdawn.module.scss';

export interface ISelectItem {
    id: number,
    value: string,
}

interface IPropsDropdawn {
    value: ISimpleSelectItem,
    items: ISimpleSelectItem[],
    isActive: boolean,
    isCustomSheetField: boolean,
    setValue: Dispatch<SetStateAction<ISimpleSelectItem>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISimpleSelectItem[]>>,
    customSheetField?: ReactNode | Element | ReactElement<any, any> | JSX.Element | { key: string; component: (props: IActionSheetProps) => JSX.Element } ,

}

function Dropdawn (props: IPropsDropdawn) {

    const { 
        items,
        value, 
        isActive, 
        setValue, 
        setIsFocused, 
        setCurrentData,
        isCustomSheetField,
        customSheetField,
        ...rest } = props

    if (!items || items.length === 0) return null

    // const ComponentCstomSheetField = customSheetField ?  : null;

    return (
        <ul className={isActive ? style.dropdawn__opened : style.dropdawn__closed}>
            {items.map( item => isCustomSheetField? <></> : <SheetField 
                key={item.id} 
                value={item} 
                setValue={setValue} 
                setCurrentData={setCurrentData} 
                setIsFocused={setIsFocused} 
                isCustomSheetField={isCustomSheetField}
                items={items} 
                {...rest}>
                </SheetField>)}
        </ul>
    )
}

export default Dropdawn