import { IMultiSelectData } from '../../mocks/multiselectMocks';
import style from './comboboxSheet.module.scss';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface IMultiSelectSheetProps {
    item: IMultiSelectData,
    items?: IMultiSelectData[],
    isCustomSheetField?: boolean, 
    value?: string,
    setValue?: Dispatch<SetStateAction<IMultiSelectData>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    selectedItems?: IMultiSelectData[],
    setSelectedItems: React.Dispatch<React.SetStateAction<IMultiSelectData[]>>,
    isPadding: boolean,
    inputValue: string
}

function ComboboxSheet (props: IMultiSelectSheetProps) {

    const { 
        item,
        inputValue,
        setInputValue, 
        selectedItems = [],
        setSelectedItems
    } = props; 

    if (!item.value.includes(inputValue)) return <></>

    const [ isDisabled , setIsDisabled ] = useState(false);

    function handleClick () {
        if (!selectedItems.find(el => el.id === item.id)) setSelectedItems([...selectedItems, item])
        else setSelectedItems(selectedItems.filter((el) => el.id !== item.id))
        setInputValue(''); 
        setIsDisabled(!isDisabled)
    }

    useEffect(()=> {
        if (selectedItems.find(el => el.id === item.id)) setIsDisabled(true);
        else setIsDisabled(false)
    }, [selectedItems])

    return (
        <li className={style.customSheet} onClick={handleClick}>
            <button className={style.btn}>
            <div className={style.textWrap}>
                <h3 className={isDisabled? style.value__disabled : style.value}>{item?.value}</h3>
            </div>
            </button>
        </li>
        )
}

export default ComboboxSheet