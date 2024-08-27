import React from 'react';
import { Dispatch, SetStateAction } from 'react';

import { ISimpleSelectItem } from '../select/select';

import { IActionFieldTestData } from '../../mocks/actionSheetMocks';
import IconBox from '../../assets/icon-box.png';

import style from './actionSheet.module.scss';

export interface IActionSheetProps {
    item?: IActionFieldTestData,
    items?: IActionFieldTestData[],
    isCustomSheetField?: boolean, 
    value?: IActionFieldTestData,
    setValue: Dispatch<SetStateAction<ISimpleSelectItem | IActionFieldTestData>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<IActionFieldTestData[]>>
}

function ActionSheet (props: IActionSheetProps) {

    const { 
        item, 
        items,
        value,
        setValue, 
        setIsFocused, 
        setCurrentData, 
    } = props; 

    const handleClick = () => { 
        if (item) {
            setValue(item); 
        }
        setIsFocused(false)
        if (items) {
            setCurrentData(items.map((item : IActionFieldTestData) => {
                item.isActive = (item.id === value?.id) ? true : false 
                return item
            }))
        }
    }; 

    return (
    <React.Fragment>
    <li className={style.customSheet} onClick={handleClick}>
        <picture className={style.lettersWrap}>
            <img className={style.letters} src={item?.src} alt={item?.value} />
        </picture>
        <div className={style.textWrap}>
            <h3 className={style.value}>{item?.value}</h3>
            <p className={style.type}>{item?.type}</p>
        </div>
        <picture className={(item?.id === value?.id && item?.value === value?.value) ? style.boxWrap__visible : style.boxWrap__hidden}>
            <img className={style.box} src={IconBox} alt='Icon Box' />
        </picture>
    </li>
    </React.Fragment>
    )
}

export default ActionSheet