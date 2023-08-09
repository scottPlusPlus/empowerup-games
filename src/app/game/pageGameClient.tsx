"use client"

import FloatingFooter from "@/src/agnostic/components/FloatingFooter"
import { ButtonProps, CssPropsCommon } from "@/src/frontCode/cssCommon"

import ScrollTextComponent from "@/src/agnostic/components/ScrollTextComponent"
import { CenterMaxWidth } from "@/src/agnostic/components/CenterMaxWidth"
import LayoutImageRightOrBtm from "@/src/agnostic/components/LayoutImageRightOrBtm"
import ImgGameHero from "@/public/images/game/game-hero-1280.png"
import ImgGameHero2 from "@/public/images/game/game-hero-2-1280.png"
import FadeUp from "@/src/agnostic/components/FadeUp"
import EmailFormGame from "./emailFormGame"
import { Signal } from "@/src/agnostic/utils/Signal"
import NamedObserver from "@/src/agnostic/components/NamedObserver"
import { urlWithRef, submitAnalytics, submitEmail } from "@/src/frontCode/dataUtils"
import { useEffect } from "react"
import ParticleButton from "./ParticleButton"
import ButtonStandard from "@/src/agnostic/components/ButtonStandard"
import ButtonGlow from "./ButtonGlow"
import { ThanksPopup } from "@/src/agnostic/components/ThanksPopup"


type Props = {
    beta: boolean
}

const cssCommon = {
    padding: "p-8",
    actionButton: gameActionButton,
    textH1: "text-6xl font-bold mb-4 font-sans",
    textH2: "text-3xl font-bold font-sans",
    textH3: "text-2xl font-bold font-sans",
    textBase: "text-xl whitespace-pre-wrap semi-bold font-semibold",
    textBaseBig: "text-xl whitespace-pre-wrap font-sans",
    textBase2: "text-xl text-slate-300 whitespace-pre-wrap font-sans",
    textLink: "text-blue-500 hover:text-blue-700 cursor-pointer font-sans",
    // bgHero: "bg-gradient-to-t from-gray-800 via-pink-900 to-gray-800",
   // bgHero: "bg-gradient-to-t from-violet-900 to-gray-800 to-50%",
   bgHero: "bg-gradient-to-t from-cyan-600 via-violet-900 via-10% to-gray-800 to-60%",
 //   bgHero: "bg-gradient-to-t from-cyan-600 via-violet-900 via-30% to-gray-800 to-60%",
//    bgFooter: "bg-gradient-to-t from-pink-800 via-gray-800 via-10% via-gray-800 via-80% to-pink-800",
    //bgFooter: "bg-gradient-to-b from-violet-900 to-violet-950",
    bgFooter: "bg-gradient-to-b from-cyan-600 via-violet-900 via-15% to-violet-950",
    // bgDark3: "bg-gradient-to-r from-indigo-900 to-indigo-950",

    bgDark3:  "bg-indigo-950", //"bg-stone-700",  //"bg-gradient-to-b from-stone-800 to-stone-900",
    bgDark2: "bg-gray-800",
    textDark: "text-stone-800",
    btnColorHover: "bg-violet-600",
}

const junk = {
    btnColor: "bg-blue-500"
}

function gameActionButton(props: ButtonProps) {
    return (
        // <ButtonStandard cssOverrides="bg-cyan-500 hover:bg-cyan-700" onClick={props.handle} disabled={props.disabled}>{props.children}</ButtonStandard>
        <ButtonStandard cssOverrides="bg-pink-500 hover:bg-pink-600" onClick={props.handle} disabled={props.disabled}>{props.children}</ButtonStandard>
    )
    // return (
    //     <ButtonGlow handle={props.handle}>{props.children}</ButtonGlow>
    // )
    // return (
    //     <div className="relative">
    //         <div className="absolute -inset-1 rounded-lg bg-white opacity-75 blur"></div>
    //         <button className="relative rounded-lg bg-pink-500 hover:bg-pink-200 px-7 py-4 text-white" onClick={props.handle}>{props.children}</button>
    //     </div>
    // )
    // return (
    //     <ParticleButton />
    // )
}


export function PageGameClient(props: Props) {

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


    const bgNeutral = "bg-neutral-200";
    // const cssTextAlignment = "flex justify-center lg:justify-start";
    const cssTextAlignment = "flex justify-start";

    function ActionLine() {
        return (
            <div>
                <EmailFormGame onSubmitEmail={handleSubmitEmail} cssCommon={cssCommon}></EmailFormGame>
            </div>
        )
    }

    function sectionHero() {
        return (
            <LayoutImageRightOrBtm imageSrc={ImgGameHero.src} imageAlt="flock of tweeting birds">
                <div className={"flex text-white justify-center " + cssCommon.bgHero}>
                    <div className="mt-auto mb-auto">
                        <div className="ml-auto mr-auto">
                            <div className="py-16 px-16">

                                <div className={cssTextAlignment}>
                                    <h1 className={cssCommon.textH1 + "mb-6"}>
                                        the <span className="bg-gradient-to-b from-white to-pink-500 bg-clip-text text-transparent">NEXT LEVEL</span> of<br></br>Gamedev Community
                                    </h1>
                                </div>
                                <div className={`${cssTextAlignment} ${cssCommon.textBaseBig}`}>
                                    the BEST place for indie creators to connect with gamers and each other
                                </div>
                                <div className={cssTextAlignment + " pt-8"}>
                                    {ActionLine()}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutImageRightOrBtm>
        )
    }



    function sectionFeatures() {
        return (
            <LayoutImageRightOrBtm imageSrc={ImgGameHero2.src} imageAlt="flock of tweeting birds">
                <div className={"flex text-white justify-center " + cssCommon.bgDark3}>
                    <div className="mt-auto mb-auto">
                        <div className="ml-auto mr-auto">
                            <div className="py-16 px-16">
                                {featureList()}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutImageRightOrBtm>
        )
    }

    function featureList() {
        return (
            <FadeUp>
                <p className={`${cssCommon.textH2} text-white mb-2`}>Features</p>
                <ul className={"list-disc whitespace-pre-wrap " + cssCommon.textBase + " text-white"}>
                    {/* <ul className="space-y-2"> */}
                    <li>Free, shareable page to post updates about your game</li>
                    <li>Post everything from your elevator pitch, concept art, to playable demos</li>
                    <li>Searchable portfolios of indie devs looking to collaborate</li>
                    <li>Players earn rewards for giving useful feedback about your game</li>
                </ul>
            </FadeUp>
        )
    }

    function sectionFaq() {
        return (
            <div className={cssCommon.bgDark2 + " text-white py-16 px-16"}>
                <div className="max-w-6xl mx-auto pt-4 ">
                    
                        {/* Section header */}
                        <div className="pb-8" data-aos="fade-up" data-aos-delay="200">
                            <h2 className={cssCommon.textH2}>FAQs</h2>
                        </div>

                        {/* Columns */}
                        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
                            {/* Column */}
                            <div className="w-full md:w-1/2 space-y-8">
                                {/* Item */}
                                <FaqCard title="What is This?">
                                    <>
                                        We’re building a platform where indie creators can post about their games-in-progress (long before you have a playable demo) and can connect with passionate players to get feedback and include them in the creation process.
                                        It's exact shape will continue to evolve and be subject to feature creep :)
                                    </>
                                </FaqCard>

                                {/* Item */}
                                <FaqCard title="When will you launch?">
                                    <>
                                    We’re targeting the end of 2023.  We’ll see {"¯\\_(ツ)_/¯"}
                                    </>
                                </FaqCard>

                                {/* Item */}
                                <FaqCard title="Is my email safe? Is it secret?">
                                    <>
                                        All you are signing up for now is the waitlist -- 
                                        We will ONLY use your email to let you know when the platform is ready to launch -- If you want to hear more from us as the platform evolves please follow us on <a className={cssCommon.textLink} href="https://twitter.com/ScottPlusPlus" target="_blank">twitter / x / whatever</a>
                                    </>
                                </FaqCard>
                            </div>

                            {/* Column */}
                            <div className="w-full md:w-1/2 space-y-8">
                                {/* Item */}
                                <FaqCard title="Can I help?">
                                    <>
                                        We want this to be awesome for YOU!  If you have ideas of what would make the ideal indie game dev platform, we want to hear from you!  If you want to help with code or art assets, we want to hear from you! 
                                    </>
                                </FaqCard>

                                {/* Item */}
                                <FaqCard title="I have more questions!">
                                    <>
                                        Please <a className={cssCommon.textLink} href="https://twitter.com/ScottPlusPlus" target="_blank">get in touch</a>
                                    </>
                                </FaqCard>

                            </div>
                        </div>
                    </div>

            </div>
        );
    }

    return (
        <>
            <section>
                {sectionHero()}
            </section>

            <ThanksPopup popupColor="bg-pink-500"  openSignal={thanksPopupSignal}></ThanksPopup>

            <section>
                <div className={`py-16 ${cssCommon.bgDark2}`}>
                    <CenterMaxWidth minXPad={16}>
                        <FadeUp>
                            <p className={`${cssCommon.textH3} text-white`}>
                                You bring your passion and talent to the anvil of creation -- 
                                You weave art, code, music, and blood to build new worlds where we can play, explore, and experience things we’ve never imagined before -- 
                                <b><ScrollTextComponent text=" You do enough.  Let us help make connecting players to your game a few bits easier" bufferTop={-400} bufferBottom={-250} colorBefore="text-white" colorAfter="text-pink-500"></ScrollTextComponent></b>
                            </p>
                        </FadeUp>
                    </CenterMaxWidth>
                </div>
            </section>


            <section>
                {sectionFeatures()}
            </section>


            <NamedObserver name='game-visit-faq' onObserve={handleAnaObserver} />
            <section>
                {sectionFaq()}
            </section>


            <div className='py-8'></div>
            <FloatingFooter showBelowPageYOffset={400} cssOverride={cssCommon.bgFooter} >
                <div className="w-full p-4 flex justify-center">
                    <div className="max-w-s">
                        {ActionLine()}
                    </div>
                </div>
            </FloatingFooter>
            {/* <Cta /> */}
        </>
    )
}

function FaqCard(props: { title: string, children: React.ReactNode }) {
    return (
        <FadeUp>
            <div className="space-y-2">
                <h4 className={cssCommon.textH3}>{props.title}</h4>
                <p className={cssCommon.textBase2}>{props.children}</p>
            </div>
        </FadeUp>
    )
}