import type { ReactNode } from "react"

interface ITitleProps {
    children?: ReactNode
}

function Title (props: ITitleProps) {
    // const {text} = props;
    return (
        <h2>
            {props.children}
        </h2>
    )
}

export default Title