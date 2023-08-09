import { pointsArrayToPathString } from "@/src/agnostic/utils/svgUtils";
import { ButtonProps } from "@/src/frontCode/cssCommon";

export default function ButtonGlow(props: ButtonProps) {

    return (
        <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
            <button className="relative rounded-lg bg-black px-7 py-4 text-white" onClick={props.handle}>{props.children}</button>
        </div>
    )

}
