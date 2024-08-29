import { type ReactNode, type ReactElement } from 'react'

import { SELECT, TYPES } from '../../utils/globals';

import { ISimpleSelectItem } from './select';
import { IActionSheetProps } from '../sheetfield/actionSheet';

import type { IMultiSelectData } from '../../mocks/multiselectMocks';

import style from './selectBasic.module.scss'
export interface ISelectProps {
// Главное, что нужно сделать при создании селекта - написать его тип type = DEFAULT | ACTIONSHEET | MULTISELECT | COMBOBOX
// В зависимости от этого компонент уже будет требовать причитающиеся ему входные данные
    type?: string | undefined,
    name: string, // Для создания любого селекта обязательно нужно указать его имя
    items: ISimpleSelectItem[] | IMultiSelectData[],
    form?: string | undefined, // Флаг form  связывает отдельно стоящий элемент <input> с формой. По умолчанию не связан ни с какой формой
    isDisabled?: boolean,
    isRequired?: boolean, // Флаг isRequired  отвечает за атрибут required. По умолчанию селект не обязателен к заполнению.
    customDropdawn?: ReactNode,
    customLabel?: ReactNode,
    minLength?: number, // Флаг minLength отвечает за минимальную длину ввода. По умолчанию минимальный ввод 0, если только нет флага isRequired.
    maxLength?: number, //  Флаг maxLength отвечает за максимальную длину ввода. По умолчанию максимальный ввод 100. Цифра взята от балды, в реальной жизни обсуждается с заказчиками.
    placeholder?: string | undefined,
    isMultiple?: boolean,
    isCustomSheetField?: boolean, // Нужно ли отображать кастомный элемент списка. По умолчанию false
    customSheetField?: ReactNode | Element | ReactElement<any, any> | JSX.Element | { key: string; component: (props: IActionSheetProps) => JSX.Element }, // Кастомный элемент списка
    isCustomTabs?: boolean, // Нужно ли отображать кастомный элемент таба - выбранного элемента. По умолчанию false
    customTab?: ReactNode | Element | ReactElement<any, any> | JSX.Element | { key: string; component: (props: IActionSheetProps) => JSX.Element } // Кастомный элемент таба
    children?: ReactNode | ReactNode[] 
}

// Это компонент-обёртка, его ответственность - распределить функционал и в зависимости от передаваемого мода type отдать нужный компонент селекта
function SelectBasic (props: ISelectProps) {
    const {
        type = TYPES.DEFAULT,
        name, 
        customLabel, 
        customSheetField,
        } = props

    const SelectComponent = SELECT[type].component;

    return (
    <div className={style.contentWrap}>
        {/* TODO вывести в отдельный компонент */}
        {customLabel? customLabel: <label className={style.label} htmlFor={name}></label>}
        <SelectComponent {...props} customSheetField={customSheetField}/>
    </div>
    )
}
export default SelectBasic