import CircleImage from "@/src/agnostic/components/CircleImage";
import { Layout2ColMinLeft } from "@/src/agnostic/components/Layout2ColMinLeft";
import QuoteBox from "@/src/agnostic/components/QuoteBox";
import ScottProfile from '@/public/images/scott_square.png';
import Link from "next/link";
import { gameCss } from "@/src/frontCode/gameCss";
import { overideTailwindCssClasses } from "@/src/agnostic/utils/cssUtils";

type Props = {
    handleLinkClick: (arg0: string) => void
}

export function MainQuoteBox(props: Props) {

    //const cssOver = gameCss.bgDark3 + 'bg-indigo-950 p-2';
    //const cssOver = 'bg-indigo-950 p-2 text-white ' + gameCss.textBase2;
    const cssOver = overideTailwindCssClasses(gameCss.textBase2, "text-stone-950");

    // const cssOver = 'outline-orange-500';

    const cssText = "";
    const cssLink = gameCss.textLink;
    const twitterUrl = "https://twitter.com/scottplusplus";

    return (
        <QuoteBox cssOverrides={cssOver} >
            <div className="flex px-4 pt-4 pb-2 justify-left">
                <a className="text-blue-700 text-lg mr-2" onClick={() => props.handleLinkClick(twitterUrl)} href={twitterUrl} target="_blank">
                    <CircleImage src={ScottProfile.src} alt="ScottPlusPlus profile image" radius={64} cssBorderOverride={""}></CircleImage>
                </a>
                <div>
                <a className="text-blue-700 text-lg" onClick={() => props.handleLinkClick(twitterUrl)} href={twitterUrl} target="_blank">
                    @ScottPlusPlus
                </a>
                <br></br>- founder
                </div>

                
            </div>
            <div className='flex items-center'>
                <div className={cssText + " space-y-2"}>
                    <p>I started empowerUp to help indie game devs find the success they deserve.</p>

                    <p>Before mastering web development, I worked for over a decade in games, wearing hats as an artist, game designer, and programmer.  I've worked at large 500 person studios and even failed a <a className={gameCss.textLink} href="https://www.youtube.com/watch?v=J_bg38y_AHw"  target="_blank">kickstarter for my own game</a>.</p>

                    <p>I am constantly impressed by the creativity and passion in the indie game space, and I know how hard it is. I would be honored to craft the sword that helps bring YOUR game to victory.</p>
                </div>
            </div>
        </QuoteBox>
    )
}