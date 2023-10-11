import Ico from "@/public/images/game/g_ico.ico";
import OgImage from "@/public/images/empowerup-games-ogimg.png";

export const mainMetadata = {
    title: "EmpowerUp.Games",
    description:
        "Indie game dev community, tools, resources.  Find artists or programmers for your team, get feedback on your game, and more!",
    openGraph: {
        images: [
            {
                url: OgImage.src,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "EmpowerUp.Games",
        description: "Power UP your Indie Game Journey! Assemble your team, ignite buzz, and equip YOUR game for success",
        creator: "@EmpowerUpGames",
        images: [OgImage.src],
      },
    icons: { icon: Ico.src },
    robots: {canonical: "https://empowerup.games"}
};
