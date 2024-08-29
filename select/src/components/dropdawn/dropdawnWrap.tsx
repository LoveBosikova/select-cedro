import { TYPES } from '../../utils/globals';

import { IPropsDropdawn } from './dropdawn';

import pickDropDownStyle from '../../utils/pickDropDownStyle';

function DropDownWrap (props: IPropsDropdawn) {
    const { 
        type = TYPES.DEFAULT,
        isActive, 
        children} = props

    return (
        <ul className={pickDropDownStyle(isActive, type)}>
            {children}
        </ul>
    )
}

export default DropDownWrap