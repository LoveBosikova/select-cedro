import type { ReactNode } from "react"

interface ITitleProps {
    children?: ReactNode
}

function Title (props: ITitleProps) {
    return (
        <h2>
            {props.children}
        </h2>
    )
}

export default Title