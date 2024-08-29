import { ISimpleSelectItem } from '../select/select'

import closeIcon from '../../assets/icon-close.png'

import { IMultiSelectData } from '../../mocks/multiselectMocks'

import style from './customSimpleBar.module.scss'

interface IProfileBarProps {
    item: ISimpleSelectItem,
    selectedItems: IMultiSelectData[],
    setSelectedItems: React.Dispatch<React.SetStateAction<IMultiSelectData[]>>
}

function CustomSimpleBar (props : IProfileBarProps) {
    const { selectedItems, setSelectedItems } = props
    const { id, value } = props.item

    function handleClose () {
        const updatesSelectedItems =selectedItems.filter((selItem) => selItem.id !== id)
        setSelectedItems(updatesSelectedItems)
    }

    return (
        <li className={style.barWrap}>
            <p className={style.name}>{value}</p>
            <picture role='button' className={style.closeWrap} onClick={handleClose}>
                <img src={closeIcon} alt='icon Close'></img>
            </picture>
        </li>
    )
}

export default CustomSimpleBar