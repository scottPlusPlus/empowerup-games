'use client'

import { useEffect } from "react";
import { Signal } from "../agnostic/utils/Signal";
import EmailFormGame from "../app/game/emailFormGame"
import { submitAnalytics, submitEmail, urlWithRef } from "../frontCode/dataUtils";
import { gameCommonCss } from "../frontCode/gameCss";

export function BaseHeader() {

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
                <EmailFormGame onSubmitEmail={handleSubmitEmail} cssCommon={gameCommonCss}></EmailFormGame>
            </div>
        )
    }

    //const bgcss = "bg-gradient-to-b from-cyan-600 via-violet-900 via-15% to-violet-950";
    const bgcss = "bg-gradient-to-t from-cyan-600 via-violet-900 via-15% to-violet-950";
    
    return (

        <header className={"fixed top-0 left-0 right-0 w-full flex justify-center shadow-md z-50 py-2 " + bgcss}>
            <div className={`flex flex-col w-full 5xl:px-0 max-w-4xl`}>
                <div className="max-w-s">
                    {ActionLine()}
                </div>
            </div>
        </header>
    )
}

