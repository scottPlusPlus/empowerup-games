import { Layout2ColMinLeft } from "@/src/agnostic/components/Layout2ColMinLeft";
import QuoteBox from "@/src/agnostic/components/QuoteBox";
import { gameCss } from "@/src/frontCode/gameCss";
import { overideTailwindCssClasses } from "@/src/agnostic/utils/cssUtils";
import { ReactNode } from "react";
import LayoutImgeLeftOrTop from "@/src/agnostic/components/LayoutImageLeftOrTop";

type Props = {
    imageSrc: string,
    imageAlt: string,
    children: ReactNode,
}

export function ProductPreviewBox(props: Props) {

    //const cssOver = gameCss.bgDark3 + 'bg-indigo-950 p-2';
    //const cssOver = 'bg-indigo-950 p-2 text-white ' + gameCss.textBase2;
    const cssOver = overideTailwindCssClasses(gameCss.textBase2, "text-stone-950");

    // const cssOver = 'outline-orange-500';

    const cssText = "";
    const cssLink = gameCss.textLink;

  
    const cssBox = "shadow-md bg-slate-200 rounded ";

    return (
        <div className={cssBox}>
            <LayoutImgeLeftOrTop imageSrc={props.imageSrc} imageAlt={props.imageAlt}>
                <div className="p-4">
                {props.children}
                </div>
            </LayoutImgeLeftOrTop>
        </div>
    )

}