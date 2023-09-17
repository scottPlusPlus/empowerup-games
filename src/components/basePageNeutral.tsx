import { gameCss } from "../frontCode/gameCss"
import { BaseWidth } from "./BaseWidth"

type Props = {
    children: React.ReactNode,
}

export function BasePageNeutral(props: Props) {
    return (
        <div className={gameCss.bgNeutral}>
            <BaseWidth>
                {props.children}
            </BaseWidth>
        </div>
    )
}