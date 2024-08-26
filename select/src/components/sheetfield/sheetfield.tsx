import style from './sheetfield.module.scss';

import type { ISelectItem } from '../dropdawn/dropdawn';

function SheetField (props: ISelectItem) {

    const { value } = props

    if (!value) return null

    return (
        <li className={style.sheetfield}>
            { value }
        </li>
    )
}

export default SheetField