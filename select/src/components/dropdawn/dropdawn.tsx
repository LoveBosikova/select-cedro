import SheetField from '../sheetfield/sheetfield';

import { Dispatch, SetStateAction } from 'react';

import type { ISimpleSelectItem } from '../select/select';

import style from './dropdawn.module.scss';

export interface ISelectItem {
    id: number,
    value: string,
}

interface IPropsDropdawn {
    value: ISimpleSelectItem,
    items: ISimpleSelectItem[],
    isActive: boolean,
    setValue: Dispatch<SetStateAction<ISimpleSelectItem>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISimpleSelectItem[]>>
}

function Dropdawn (props: IPropsDropdawn) {

    const { items, value, isActive, setValue, setIsFocused, setCurrentData, ...rest } = props

    items.map((i) => console.log(i))

    if (!items || items.length === 0) return null

    return (
        <ul className={isActive ? style.dropdawn__opened : style.dropdawn__closed}>
            {items.map( item => <SheetField key={item.id} value={value} setValue={setValue} setCurrentData={setCurrentData} setIsFocused={setIsFocused} items={items} {...rest}></SheetField>)}
        </ul>
    )
}

export default Dropdawn