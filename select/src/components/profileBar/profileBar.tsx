import { IMultiSelectData } from '../../mocks/multiselectMocks'
import style from './profileBar.module.scss'

import closeIcon from '../../assets/icon-close.png'

interface IProfileBarProps {
    item: IMultiSelectData,
    selectedItems: IMultiSelectData[],
    setSelectedItems: React.Dispatch<React.SetStateAction<IMultiSelectData[]>>
}

function ProfileBar (props : IProfileBarProps) {
    const { item, selectedItems, setSelectedItems } = props
    const { id, value, src } = props.item

    function handleClose () {
        const updatesSelectedItems =selectedItems.filter((selItem) => selItem.id !== id)
        setSelectedItems(updatesSelectedItems)
    }

    return (
        <li className={style.barWrap}>
            <picture className={style.imgWrap}>
                <img className={style.img} src={src} alt={value} />
            </picture>
            <p className={style.name}>{value}</p>
            <picture role='button' className={style.closeWrap} onClick={handleClose}>
                <img src={closeIcon} alt='icon Close'></img>
            </picture>
        </li>
    )
}

export default ProfileBar