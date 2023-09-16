import { gameCommonCss } from "../frontCode/gameCss"
import { BaseWidth } from "./BaseWidth"

type Props = {
    children: React.ReactNode,
}

export function BasePage(props: Props) {
    return (
        <div className={gameCommonCss.bgNeutral}>
            <BaseWidth>
                {props.children}
            </BaseWidth>
        </div>
    )
}