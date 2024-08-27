import { IMultiSelectData } from '../../mocks/multiselectMocks';
import style from './profileSheet.module.scss';
import React, { Dispatch, SetStateAction } from 'react';
import IconBox from '../../assets/icon-box.png';
import { ISimpleSelectItem } from '../select/select';

export interface IMultiSelectSheetProps {
    item?: IMultiSelectData,
    items?: IMultiSelectData[],
    isCustomSheetField?: boolean, 
    value?: string,
    setValue?: Dispatch<SetStateAction<IMultiSelectData>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    selectedItems?: IMultiSelectData[],
    setSelectedItems: React.Dispatch<React.SetStateAction<IMultiSelectData[]>>,
    isPadding: boolean
}

function ProfileSheet (props: IMultiSelectSheetProps) {

    const { 
        item,
        items,
        value,
        setInputValue, 
        setIsFocused, 
        selectedItems = [],
        setSelectedItems
    } = props; 

    function handleClick () {
        if (item) {
            setInputValue(''); 
            console.log(selectedItems, item);
            // const newSelectedItems = selectedItems?.push(item)
            setSelectedItems(selectedItems.push(item))
        }
        setIsFocused(false)
    }

    return (
        <React.Fragment>
        <li className={style.customSheet} onClick={handleClick}>
            <picture className={style.lettersWrap}>
                <img className={style.letters} src={item?.src} alt={item?.value} />
            </picture>
            <div className={style.textWrap}>
                <h3 className={style.value}>{item?.value}</h3>
                <p className={style.email}>{item?.email}</p>
            </div>
            {/* <picture className={(item?.id === value?.id && item?.value === value?.value) ? style.boxWrap__visible : style.boxWrap__hidden}> */}
            <picture className={style.boxWrap}>
                <img className={style.box} src={IconBox} alt='Icon Box' />
            </picture>
        </li>
        </React.Fragment>
        )
}

export default ProfileSheet