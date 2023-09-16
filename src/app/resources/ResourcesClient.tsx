'use client'

import { BaseHeader } from "@/src/components/BaseHeader"
import { ScoutCss } from "@/src/components/scout/ScoutCss"
import SearchableItemDisplay from "@/src/components/scout/SearchableItemDisplay"
import { submitAnalytics } from "@/src/frontCode/dataUtils"
import { ScoutInfo, ScoutItem } from "@/src/sharedCode/scoutTypes"

type ResourcesPageProps = {
    loadedItems: ScoutItem[],
    infos: ScoutInfo[],
    scoutCss: ScoutCss,
}

export default function ResourcesPageClient(props: ResourcesPageProps) {

    function scoutSubmitAnalytics(event: string, data: string): void {
        submitAnalytics(event, data, "egames");
    }

    console.log("Resources page with " + props.infos.length + " infos");
    const infoMap = new Map<string, ScoutInfo>();
    props.infos.forEach(info => {
        // console.log("put " + info.url + " to info Map");
        infoMap.set(info.url, info);
    });

    const infoCount = Array.from(infoMap.entries()).length;
    console.log("gorram info count: " + infoCount);

    return (
        <>
            <BaseHeader></BaseHeader>
            <div className="h-12"></div>
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