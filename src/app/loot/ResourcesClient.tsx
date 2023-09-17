'use client'

import { ScoutCss } from "@/src/components/scout/ScoutCss"
import SearchableItemDisplay from "@/src/components/scout/SearchableItemDisplay"
import { submitAnalytics, urlWithRef } from "@/src/frontCode/dataUtils"
import { ScoutInfo, ScoutItem } from "@/src/sharedCode/scoutTypes"
import { useEffect } from "react"

type ResourcesPageProps = {
    loadedItems: ScoutItem[],
    infos: ScoutInfo[],
    scoutCss: ScoutCss,
}

export default function ResourcesPageClient(props: ResourcesPageProps) {

    var anaData = "";
    useEffect(() => {
        anaData = urlWithRef(document);
        handleAnaObserver("game-visit-resources");
    }, []);

    function handleAnaObserver(name: string) {
        submitAnalytics(name, anaData, "egame");
    }

    function scoutSubmitAnalytics(event: string, data: string): void {
        submitAnalytics(event, data, "egames");
    }

    //console.log("Resources page with " + props.infos.length + " infos");
    const infoMap = new Map<string, ScoutInfo>();
    props.infos.forEach(info => {
        // console.log("put " + info.url + " to info Map");
        infoMap.set(info.url, info);
    });

    return (
        <>
            <SearchableItemDisplay
                loadedItems={props.loadedItems}
                initialTerms={[]}
                infoMap={infoMap}
                scoutCss={props.scoutCss}
                submitAnalytics={scoutSubmitAnalytics}
            />
        </>
    )
}