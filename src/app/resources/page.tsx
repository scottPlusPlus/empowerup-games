import { nowHHMMSS } from '@/agnostic/utils/timeUtils';
import { fetchFromScoutRemix } from '@/serverCode/scoutApi';
import { BasePage } from '@/src/components/basePage';
import { mainMetadata } from '@/src/frontCode/metadata';
import ResourcesPageClient from './ResourcesClient';
import LoadingText from '@/src/agnostic/components/LoadingText';
import { ScoutInfo } from '@/src/sharedCode/scoutTypes';
import { BasePageNeutral } from '@/src/components/basePageNeutral';


export const metadata = mainMetadata

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

async function getServerDtata() {
    const now = nowHHMMSS();
    console.log(`${now} Empower-Kit: getServerData`);

    const pageData = await fetchFromScoutRemix("scott-gamedev", "egames472812379");
    const itemCount = pageData.infos.length;
    console.log(`${itemCount} items from scout`);

    const infoMap = new Map<string, ScoutInfo>();
    pageData.infos.forEach(info => {
        infoMap.set(info.url, info);
    });

    pageData.items = pageData.items.filter(item => {
        const info = infoMap.get(item.url);
        if (!info) {
            //console.log("filtering out " + item.url);
            return false;
        }
        if (!info.image || info.image.length == 0) {
            //console.log("filtering out " + item.url);
            return false;
        }
        if (!info.fullUrl || info.fullUrl.length == 0) {
            //console.log("filtering out " + item.url);
            return false;
        }
        return true;
    });

    return { ...pageData, time: now };
}

export default async function Home({ searchParams }: {
    searchParams: Record<string, unknown> | null;
}) {
    var serverData = await getServerDtata();

    if (serverData.collection == null) {
        return (
            <BasePage>
                <LoadingText></LoadingText>
            </BasePage>
        )
    }

    const scoutCss = {
        SEARCH_SECTION_BG: "text-white shadow-md p-4",
        ITEM_GRID_COLS: "grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6",
        ITEM_TAG: "inline-block bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2",
        BACKGROUND: "",
    }


    return (
        <BasePageNeutral>
            <ResourcesPageClient
                loadedItems={serverData.items}
                infos={serverData.infos}
                scoutCss={scoutCss}
            />
        </BasePageNeutral>
    )
}