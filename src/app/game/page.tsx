import { PageGameClient } from './pageGameClient';
import { mainMetadata } from '@/src/frontCode/metadata';

export const metadata = mainMetadata

export default function Home() {
    return (
        <PageGameClient beta={false}></PageGameClient>
    )
}