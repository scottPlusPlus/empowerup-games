import Ico from '@/public/images/game/g_ico.ico';
import OgImage from '@/public/images/game/game_soc.png';

export const mainMetadata = {
    title: 'Indie Dev ++',
    description: 'the NEXT LEVEL of indie gamedev community',
    openGraph: {
        images: [{
            url: OgImage.src,
        }],
    },
    icons: { icon: Ico.src },
}
