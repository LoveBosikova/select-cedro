import { IMultiSelectData } from '../../mocks/multiselectMocks'
import style from './profileBar.module.scss'

import closeIcon from '../../assets/icon-close.png'

interface IProfileBarProps {
    item: IMultiSelectData
}

function ProfileBar (props : IProfileBarProps) {
    const { value, src } = props.item

    return (
        <li className={style.barWrap}>
            <picture className={style.imgWrap}>
                <img className={style.img} src={src} alt={value} />
            </picture>
            <p className={style.name}>{value}</p>
            <picture role='button' className={style.closeWrap}>
                <img src={closeIcon} alt='icon Close'></img>
            </picture>
        </li>
    )
}

export default ProfileBar