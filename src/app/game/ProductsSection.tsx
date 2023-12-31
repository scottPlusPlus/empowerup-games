'use client'

import { BaseWidth } from "@/src/components/BaseWidth";
import { gameCss } from "@/src/frontCode/gameCss";
import { ProductPreviewBox } from "./ProductPreviewBox";
import Link from "next/link";

import ImgProductResources from "@/public/images/p_resources_1280.png"
import ImgProductTeam from "@/public/images/p_team_1280.png"
import ImgProductInfluencers from "@/public/images/p_influencers_1280.png"
import EmailFormGame from "./emailFormGame";
import { useStateWithLocalStorage } from "@/src/app/useStateWithLocalStorage"
import { submitEmail } from "@/src/frontCode/dataUtils";
import { useEffect, useState } from "react";

type Props = {
    handleLinkClick: (str: string) => void
}

export function ProductsSection(props: Props) {


    const flavorTextCss = "text-gray-700 w-full justify-center";

    
    const [communityEmail, saveCommunityEmail] = useStateWithLocalStorage("communityEmail", "");

    function submitCommunityEmail(email:string){
        submitEmail(email, "product-community", "egames");
        saveCommunityEmail(email);
    }
    function clearCommunityEmail(){
        saveCommunityEmail("");
    }

    const [influencerEmail, saveInfluencerEmail] = useStateWithLocalStorage("influencerEmail", "");

    function submitInfluencerEmail(email:string){
        submitEmail(email, "product-community", "egames");
        saveCommunityEmail(email);
    }
    function clearInfluencerEmail(){
        saveCommunityEmail("");
    }

    const GoButton = gameCss.actionButton;

    function flavorText(txt:string){
        return (
            <div className="flex w-full justify-center text-gray-800 pb-4">
                <div>{txt}</div>
            </div>
        )
    }

    function flavorTextHint(txt:string){
        return (
            <div className="flex w-full justify-center text-gray-700 pb-4">
                <div>{txt}</div>
            </div>
        )
    }

    return (
        <div className={gameCss.bgDark2 + " py-16"}>

            <BaseWidth>
                    <h3 className={gameCss.textH3 + " " + gameCss.textColorLight + " pb-4"}>How We Can Help:</h3>

                    <ProductPreviewBox imageSrc={ImgProductResources.src} imageAlt="whatever">
                        <div className="space-y-2">
                            <h3 className={gameCss.textH3}>Resource Kit</h3>
                            <p>We're curating a FREE treasure trove of resources, tools, articles and more to help you along your indie game journey.  Whether you are just starting out with development, need to juice up your game's feel, or looking to power up your game's marketing.</p>
                            <p>All the best tools in one place, regularly updated</p>
                            <div className="py-2"></div>
                            <Link onClick={() => props.handleLinkClick("prod-resources")} href="./loot">
                                <GoButton>FREE Access</GoButton>
                            </Link>
                        </div>
                    </ProductPreviewBox>
                    {flavorText("the Library contained many secrets.  Would they be found?  Would they be harnessed?")}

                    <ProductPreviewBox imageSrc={ImgProductTeam.src} imageAlt="two indie game developers shaking hands">
                        <div className="space-y-2">
                            <h3 className={gameCss.textH3}>Community</h3>
                            <p>Looking to join or start an indie team to create a game?  We're building the best community to connect talented artists, programmers, designers, composers, and more to weave epic games together!</p>
                            <ul className="list-disc ml-4">
                                <li>Searchable portfolios of indie devs looking to collaborate</li>
                                <li>Filter by interested genres, experience level, availability, and more</li>
                                <li>Free, shareable page to post updates about your game</li>
                            </ul>
                            <div className="py-2"></div>
                            {communityEmail.length == 0 && (
                                 <EmailFormGame onSubmitEmail={(email) => submitCommunityEmail(email)} cssCommon={gameCss}></EmailFormGame>
                            )}
                            {communityEmail.length > 0 && (
                                <p><b>{communityEmail}</b> is on the waitlist <a className={gameCss.textLink} onClick={clearCommunityEmail}>(x clear)</a></p>
                            )}
                           
                        </div>
                    </ProductPreviewBox>
                    {flavorText("several Aethercords wound together conduct far more power than you would expect")}
                    
                    <ProductPreviewBox imageSrc={ImgProductInfluencers.src} imageAlt="two indie game developers shaking hands">
                        <div className="space-y-2">
                            <h3 className={gameCss.textH3}>Influencer Database</h3>
                            <p>Easily find the influencers who are most likely to fall in love with your game.</p>
                            <p>Save yourself hours of time looking for the right channels to promote your game. Quickly search through our ever growing list of 500+ active streamers and YouTube channels.</p>
                            <p>Filter by genre, style, and size of the games they cover, as well as the size of their audience.</p>
                            <div className="py-2"></div>
                            {influencerEmail.length == 0 && (
                                 <EmailFormGame onSubmitEmail={(email) => submitInfluencerEmail(email)} cssCommon={gameCss}>
                                    3 Month Access: $10.<span className="text-sm">00</span>
                                 </EmailFormGame>
                            )}
                            {influencerEmail.length > 0 && (
                                <p><b>{influencerEmail}</b> is on the waitlist <a className={gameCss.textLink} onClick={clearCommunityEmail}>(x clear)</a></p>
                            )}
                           
                        </div>
                    </ProductPreviewBox>
                    {flavorText("though spread throughout the 'verse, there was no Influencer who could hide from the artifact")}

            </BaseWidth>
        </div>
    )
}