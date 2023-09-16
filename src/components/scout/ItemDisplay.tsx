import Image3x2 from "@/src/agnostic/components/Image3x2";
import { ScoutInfo, ScoutItem } from "@/src/sharedCode/scoutTypes";
import { ScoutCss } from "./ScoutCss";

type ItemProps = {
    item: ScoutItem,
    info: ScoutInfo,
    onTagClick: (arg0: string) => void,
    onLinkClick?: (url: string) => void,
    scoutCss: ScoutCss
}

export default function ItemDisplay(props: ItemProps) {
    // console.log("Render ItemDisplay for " + props.item.url);
    // console.log("info:  " + JSON.stringify(props.info));

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (props.onLinkClick) {
            props.onLinkClick(props.item.url);
        }
    }

    var thisFullUrl = props.info?.fullUrl;
    if (thisFullUrl === undefined) {
        console.log("error: no full url for: " + props.item.url);
        console.log(JSON.stringify(props.info));
        thisFullUrl = "??";
    }

    var thisDisplayUrl = props.item.url;
    if (thisDisplayUrl.startsWith("www.")) {
        thisDisplayUrl = thisDisplayUrl.substring(4);
    }
    if (thisDisplayUrl.length > 32){
        thisDisplayUrl = thisDisplayUrl.substring(0,30) + "...";
    }

    return (
        <div className="shadow-md bg-white text-black">
            <a onClick={handleLinkClick} href={thisFullUrl} target="_blank">
                <Image3x2 src={props.info.image} />
            </a>
            <div className="p-4">
                <a className="text-blue-700 mb-2 text-sm" onClick={handleLinkClick} href={thisFullUrl} target="_blank">
                    {thisDisplayUrl}
                </a>
                <h2 className="font-bold mb-2">{props.info.title}</h2>
                <p className="text-gray-700 text-base">{props.info.summary}</p>
                <p className="text-gray-700 text-base">- - - - - </p>
                {
                    props.item.status == "pending" && (
                        <button key={"pending"} className={props.scoutCss.ITEM_TAG}>
                            {"pending"}
                        </button>
                    )
                }
                {props.item.tags.map(tag => (
                    <button key={tag} onClick={() => { props.onTagClick(tag) }} className={props.scoutCss.ITEM_TAG}>
                        {tag}
                    </button>
                ))}
                <p className="text-gray-700 text-base">{props.item.comment}</p>
            </div>
        </div>
    );
}