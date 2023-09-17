import CircleImage from "@/src/agnostic/components/CircleImage";
import { Layout2ColMinLeft } from "@/src/agnostic/components/Layout2ColMinLeft";
import QuoteBox from "@/src/agnostic/components/QuoteBox";
import HeroSmall from '@/public/images/game/game-hero-512.png';
import Link from "next/link";
import { gameCss } from "@/src/frontCode/gameCss";

export function GameQuoteBox() {

    const cssOver = 'bg-gray-200 p-2';
    // const cssOver = 'outline-orange-500';

    const cssText = "";
    const cssLink = gameCss.textLink;


    return (
        <QuoteBox cssOverrides={cssOver} >
            <Layout2ColMinLeft
                leftContent={(
                    <Link href="./">
                        <CircleImage
                            src={HeroSmall.src}
                            alt="EmpowerUp.Games"
                            // cssBorderOverride={'border-orange-500 border-4'}
                            cssBorderOverride={'border-pink-800 border-2'}
                            radius={100}
                        />
                    </Link>
                )}
                rightContent={(
                    <div className='flex items-center h-full'>
                        <div className={cssText}>
                            <p>We're curating a treasure trove of resources to help indie game developers on their journey.</p>
                            <p>If you want to recommend something for the collection, or make a request, <Link href="https://twitter.com/EmpowerUpGames" className={cssLink}>send us a ping!</Link></p>
                        </div>
                    </div>
                )}
            />
        </QuoteBox>
    )
}