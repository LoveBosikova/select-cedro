import React from 'react';

import { IActionFieldTestData } from '../../mocks/actionSheetMocks';
import IconBox from '../../assets/icon-box.png';

import style from './actionSheet.module.scss';

export interface IActionSheetProps {
    item: IActionFieldTestData,
    isCustomSheetField: boolean
}

function ActionSheet (props: IActionSheetProps) {

    const { item } = props; 

    return (
    <React.Fragment>
    <li className={style.customSheet}>
        <picture className={style.lettersWrap}>
            <img className={style.letters} src={item.src} alt={item.value} />
        </picture>
        <div className={style.textWrap}>
            <h3 className={style.value}>{item.value}</h3>
            <p className={style.type}>{item.type}</p>
        </div>
        <picture className={style.boxWrap}>
            <img className={style.box} src={IconBox} alt='Icon Box' />
        </picture>
    </li>
    </React.Fragment>
    )
}

export default ActionSheet