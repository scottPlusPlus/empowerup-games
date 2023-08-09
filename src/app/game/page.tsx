import Ico from '@/public/images/game/g_ico.ico';
import OgImage from '@/public/images/game/game_soc.png';

export const metadata = {
    title: 'Indie Dev ++',
    description: 'the NEXT LEVEL of indie gamedev community',
    openGraph: {
        images: [{
            url: OgImage.src,
        }],
    },
    icons: { icon: Ico.src },
}

import { PageGameClient } from './pageGameClient';

export default function Home() {
    return (
        <PageGameClient beta={false}></PageGameClient>
    )
}