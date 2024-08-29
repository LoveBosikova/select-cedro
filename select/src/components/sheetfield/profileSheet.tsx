import { IMultiSelectData } from '../../mocks/multiselectMocks';
import style from './profileSheet.module.scss';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import IconBox from '../../assets/icon-box.png';
import IconBoxDisabled from '../../assets/icon-box-disabled.png'
import { ISimpleSelectItem } from '../select/select';

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
    inputValue: string,
    isWithPadding: boolean
}

function ProfileSheet (props: IMultiSelectSheetProps) {

    const { 
        item,
        inputValue,
        setInputValue, 
        setIsFocused, 
        selectedItems = [],
        setSelectedItems,
        isWithPadding
    } = props; 

    if (!item.value.includes(inputValue)) return <></>

    const [ isDisabled , setIsDisabled ] = useState(false);

    function handleClick () {
        if (!selectedItems.find(el => el.id === item.id)) setSelectedItems([...selectedItems, item])
        else setSelectedItems(selectedItems.filter((el) => el.id !== item.id))
        setInputValue(''); 
        setIsDisabled(!isDisabled)
        setIsFocused(false)
    }

    useEffect(()=> {
        if (selectedItems.find(el => el.id === item.id)) setIsDisabled(true);
        else setIsDisabled(false)
    }, [selectedItems])

    console.log('padding', isWithPadding);

    return (
        <li className={style.customSheet}>
            {/* <button className={style.btn} onClick={handleClick} disabled={isDisabled}>
             */}
            <button className={isWithPadding ? style.btn__withPadding : style.btn} onClick={handleClick}>
            <picture className={isDisabled? style.lettersWrap__disabled : style.lettersWrap}>
                <img className={style.letters} src={item?.src} alt={item?.value} />
            </picture>
            <div className={style.textWrap}>
                <h3 className={isDisabled? style.value__disabled : style.value}>{item?.value}</h3>
                <p className={style.email}>{item?.email}</p>
            </div>
            <picture className={style.boxWrap}>
                <img className={style.box} src={isDisabled? IconBoxDisabled : IconBox} alt='Icon Box' />
            </picture>
            </button>
        </li>
        )
}

export default ProfileSheet