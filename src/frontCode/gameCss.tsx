import ButtonStandard from "../agnostic/components/ButtonStandard"
import { ButtonProps } from "./cssCommon"

export const gameCss = {
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
    textColorLight: "text-slate-300",
    bgNeutral: "bg-gradient-to-r from-gray-700 to-gray-900",
    scoutTag: "inline-block bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mt-2"
}

function gameActionButton(props: ButtonProps) {
    return (
        <ButtonStandard cssOverrides="bg-pink-500 hover:bg-pink-600" onClick={props.handle} disabled={props.disabled}>{props.children}</ButtonStandard>
    )
}