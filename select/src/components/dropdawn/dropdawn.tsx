import SheetField from '../sheetfield/sheetfield';
import DropDownWrap from './dropdawnWrap';

import { Dispatch, SetStateAction } from 'react';

import type { ISimpleSelectItem } from '../select/select';
import { IActionSheetProps } from '../sheetfield/actionSheet';

import { type ReactNode, type ReactElement } from 'react'

import { IMultiSelectData } from '../../mocks/multiselectMocks';

import style from './dropdawn.module.scss';

export interface ISelectItem {
    id: number,
    value: string,
}

export interface IPropsDropdawn {
    type?: string,
    value: ISimpleSelectItem | IMultiSelectData[] | string,
    items: ISimpleSelectItem[],
    isActive: boolean,
    isCustomSheetField?: boolean,
    setValue?: Dispatch<SetStateAction<ISimpleSelectItem | IMultiSelectData[] | SetStateAction<string>>>,
    setInputValue?: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISimpleSelectItem[]>>,
    CustomSheetField?: ReactNode | React.Component | Element | ReactElement<any, any> | JSX.Element | { key: string; component: (props: IActionSheetProps) => JSX.Element },
    children?: ReactNode | ReactNode[],
    selectedItems?: IMultiSelectData[], 
}

function Dropdawn (props: IPropsDropdawn) {

    const { 
        type,
        items,
        value = '', 
        isActive, 
        setValue, 
        setIsFocused, 
        setCurrentData,
        isCustomSheetField = false,
        CustomSheetField,
        ...rest } = props

    if (!items || items.length === 0) return null

    // TODO: добавить возможность кастомного дропдауна - также через children

    return (
        <DropDownWrap {...props}>
            {items.map( (item) =>{
                // Здесь выводим кастомный элемент
                const ComponentAction = (isCustomSheetField ? CustomSheetField : <></>) as React.ElementType
                return (
                    isCustomSheetField ? 
                    <ComponentAction 
                    item={item}
                    key={item.id} 
                    value={value} 
                    setValue={setValue} 
                    setCurrentData={setCurrentData} 
                    setIsFocused={setIsFocused} 
                    isCustomSheetField={isCustomSheetField}
                    items={items} 
                    {...rest}/> 
                    : 
                    <SheetField
                    key={item.id} 
                    value={item} 
                    setValue={setValue} 
                    setCurrentData={setCurrentData} 
                    setIsFocused={setIsFocused} 
                    isCustomSheetField={isCustomSheetField}
                    items={items} 
                    {...rest}>
                    </SheetField>);
                } 
                )
                }
        </DropDownWrap>
    )
}

export default Dropdawn