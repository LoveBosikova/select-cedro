import type { ReactNode } from "react"
import style from './title.module.scss'

interface ITitleProps {
    children?: ReactNode
}

function Title (props: ITitleProps) {
    return (
        <h2 className={style.title}>
            {props.children}
        </h2>
    )
}

export default Title