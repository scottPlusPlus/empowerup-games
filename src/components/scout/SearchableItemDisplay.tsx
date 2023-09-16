'use client'

import DynamicInputFields from "./DynamicInputFields"
import ItemDisplay from "./ItemDisplay"
import TagCloud from "./TagCloud"
import { useCallback, useEffect, useState } from "react";
import { SearchTermT } from "./SearchTermT";
import { remapItemPriorities } from "./itemUtils";
import { ScoutInfo, ScoutItem } from "@/src/sharedCode/scoutTypes";
import { deepCopyArray } from "@/src/agnostic/utils/arrayUtils";
import { ScoutCss } from "./ScoutCss";

type Props = {
    loadedItems: ScoutItem[],
    initialTerms: SearchTermT[],
    infoMap: Map<string, ScoutInfo>,
    searchTermsUpdatedHandler?: (newTerms: SearchTermT[], oldTerms?: SearchTermT[]) => void,
    forceRenderCounter?: number,
    submitAnalytics: (event: string, data: string) => void,
    scoutCss: ScoutCss,
}

export default function SearchableItemDisplay(props: Props) {

    console.log("SearchableItemDisplay render:");
    const infoCount = Array.from(props.infoMap.entries()).length;
    console.log("infos: " + infoCount);

    const [searchTerms, setSearchTerms] = useState<SearchTermT[]>(props.initialTerms);
    const [sortedItems, setSortedItems] = useState<ScoutItem[]>(props.loadedItems);

    useEffect(() => {
        // console.log("SearchableItemDisplay useEffect");
        // console.log("current search terms: " + JSON.stringify(searchTerms));
        handleSearchUpdate(searchTerms);
        // console.log("done with searchableItemDisplay useEffect");
    }, [props.loadedItems, props.forceRenderCounter ?? 0]);

    useEffect(() => {
        // console.log("SID: initial search terms updated");
        handleSearchUpdate(props.initialTerms);
    }, [props.initialTerms]);

    const handleSearchUpdate = (newTerms: SearchTermT[]) => {
        //console.log("SID: handleSearchUpdate: " + JSON.stringify(newTerms));
        const oldTerms = [...searchTerms];
        const oldTermsStr = JSON.stringify(oldTerms);
        //console.log("SID: current terms = " + oldTermsStr);

        const validTerms = newTerms.filter(term => {
            return term.term.length > 0
        });
        const prioritizedItems = remapItemPriorities(props.loadedItems, props.infoMap, validTerms)
        var sorted = prioritizedItems.sort((a, b) => {
            return b.priority - a.priority;
        });
        if (sorted.length > 0 && validTerms.length > 0) {
            sorted = sorted.filter(i => i.priority > 50);
        }

        const newTermsStr = JSON.stringify(newTerms);
        if (oldTermsStr != newTermsStr) {
            if (props.searchTermsUpdatedHandler != null) {
                props.searchTermsUpdatedHandler(validTerms, oldTerms);
            }
        } else {
            console.log(`old terms ${oldTermsStr} == new terms ${newTermsStr}`);
        }
        setSortedItems(sorted);
        setSearchTerms(newTerms);
    }

    const handleTagClick = (tag: string) => {
        console.log("tag clicked " + tag);
        const newTerms = [...searchTerms];
        const newTerm = { term: tag, priority: 100 };
        newTerms.push(newTerm);
        handleSearchUpdate(newTerms);
    }

    const handleLinkClick = (linkUrl: string) => {
        props.submitAnalytics("link", linkUrl);
    }

    const hiddenItemMsg = () => {
        var count = () => {
            return props.loadedItems.length - sortedItems.length;
        }
        if (count() <= 0) {
            return null;
        }
        return (<p>{count()} Hidden Items</p>)
    }

    return (
        <>
            <div className={props.scoutCss.SECTION_BG}>
                <DynamicInputFields searchTerms={deepCopyArray(searchTerms)} onChange={(x) => { handleSearchUpdate(x) }} />
                <TagCloud items={props.loadedItems} onTagClick={handleTagClick} scoutCss={props.scoutCss} />
                {hiddenItemMsg()}
            </div>

            <div className={"py-4 " + props.scoutCss.BACKGROUND}>
                <div className={props.scoutCss.ITEM_GRID_COLS}>
                    {sortedItems.map(item => (
                        <ItemDisplay
                            key={item.url}
                            item={item}
                            info={props.infoMap.get(item.url)!}
                            onTagClick={handleTagClick}
                            onLinkClick={handleLinkClick}
                            scoutCss={props.scoutCss}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}