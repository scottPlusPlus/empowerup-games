import CircleImage from "@/src/agnostic/components/CircleImage";
import { Layout2ColMinLeft } from "@/src/agnostic/components/Layout2ColMinLeft";
import QuoteBox from "@/src/agnostic/components/QuoteBox";
import ScottProfile from '@/public/images/scott_square.png';
import Link from "next/link";
import { gameCss } from "@/src/frontCode/gameCss";
import { overideTailwindCssClasses } from "@/src/agnostic/utils/cssUtils";

export function MainQuoteBox() {

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
                    <div className='flex h-full items-center'>
                    <Link href="https://www.twitter.com/scottplusplus">
                        <CircleImage
                            src={ScottProfile.src}
                            alt="ScottPlusPlus"
                            // cssBorderOverride={'border-orange-500 border-4'}
                            cssBorderOverride={'border-pink-800 border-2'}
                            radius={128}
                        />
                    </Link>
                    </div>
                )}
                rightContent={(
                    <div className='flex h-full items-center'>
                        <div className={cssText + " space-y-2"}>
                            <p>I started empowerUp to help indie game devs find the success they deserve.</p>

                            <p>Before mastering web development, I worked for over a decade in games, wearing hats as an artist, game designer, and programmer.  I've worked at large 500 person studios and even ran a disasterous kickstarter for my own game.</p>

                            <p>I am constantly impressed by the creativity and passion in the indie game space, and I know how hard it is. I would be honored to help make some of these amazing games a reality.</p>
                        </div>
                    </div>
                )}
            />
        </QuoteBox>
    )
}