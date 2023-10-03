'use client'

import { useEffect } from "react";
import { Signal } from "../agnostic/utils/Signal";
import EmailFormGame from "../app/game/emailFormGame"
import { submitAnalytics, submitEmail, urlWithRef } from "../frontCode/dataUtils";
import { gameCss } from "../frontCode/gameCss";
import { BaseWidth } from "./BaseWidth";
import Link from "next/link";
import TwitterLogo from '@/public/images/twitter_logo.svg';
import ArrowSvg from '@/public/images/right-arrow-svgrepo-com.svg';
// import ArrowSvg from '@/public/images/right-arrow-pixels.svg';
import Image from "next/image";
import { GameNav } from "./GameNav";

export function GameHeader() {

    const thanksPopupSignal = new Signal();

    var anaData = "";
    useEffect(() => {
        anaData = urlWithRef(document);
        handleAnaObserver("game-visit-top");
    }, []);

    function handleSubmitEmail(email: string): void {
        submitEmail(email, anaData, "game");
        thanksPopupSignal.trigger();
    }

    function handleAnaObserver(name: string) {
        submitAnalytics(name, anaData, "game");
    }


    function ActionLine() {
        return (
            <div>
                <EmailFormGame onSubmitEmail={handleSubmitEmail} cssCommon={gameCss}></EmailFormGame>
            </div>
        )
    }

    function Logo() {
        return (
            <Link href="/">
                <div className="text-white text-2xl semi-bold font-semibold">
                    emPower
                    <span className="text-pink-500">Up</span>
                    .games
                </div>
            </Link>
        )
    }

    function TwitterLink() {
        return (
            <Link href="https://twitter.com/EmpowerUpGames">
                <Image src={TwitterLogo} alt="Twitter Logo" width={28} height={28} />
            </Link>
        )
    }

    //const bgcss = "bg-gradient-to-b from-cyan-600 via-violet-900 via-15% to-violet-950";
    const bgcss = "bg-gradient-to-t from-cyan-600 via-violet-900 via-15% to-violet-950";

    return (
        <>
            <header className={"fixed top-0 left-0 right-0 w-full flex justify-center shadow-md z-50 py-2 " + bgcss}>
                <GameNav/>
            </header>
            <div className="h-14"></div>
        </>
    )
}

