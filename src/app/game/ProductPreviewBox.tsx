import { Layout2ColMinLeft } from "@/src/agnostic/components/Layout2ColMinLeft";
import QuoteBox from "@/src/agnostic/components/QuoteBox";
import { gameCss } from "@/src/frontCode/gameCss";
import { overideTailwindCssClasses } from "@/src/agnostic/utils/cssUtils";
import { ReactNode } from "react";
import Image3x2 from "@/src/agnostic/components/Image3x2";

type Props = {
    imageSrc: string,
    children: ReactNode,
}

export function ProductPreviewBox(props: Props) {

    //const cssOver = gameCss.bgDark3 + 'bg-indigo-950 p-2';
    //const cssOver = 'bg-indigo-950 p-2 text-white ' + gameCss.textBase2;
    const cssOver = overideTailwindCssClasses(gameCss.textBase2, "text-stone-950");

    // const cssOver = 'outline-orange-500';

    const cssText = "";
    const cssLink = gameCss.textLink;


    return (
        <QuoteBox cssOverrides={cssOver} >
            <Layout2ColMinLeft
                leftContent={(
                    // <div className="w-256 h-256">
                    <Image3x2 src={props.imageSrc}></Image3x2>

// </div>
                )}
                rightContent={(
                    <div className='flex h-full items-center'>
                        <div className={cssText + " space-y-2"}>
                            {props.children}
                        </div>
                    </div>
                )}
            />
        </QuoteBox>
    )
}