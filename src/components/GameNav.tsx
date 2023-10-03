import Link from "next/link";
import { BaseWidth } from "./BaseWidth";
import Image from "next/image";
import TwitterLogo from '@/public/images/twitter_logo.svg';
import ArrowSvg from '@/public/images/right-arrow-svgrepo-com.svg';

export function GameNav() {
    return (
        <BaseWidth>
            <div className="flex w-full items-center">
                <div>
                    {Logo()}
                </div>
                <div className='flex-grow'></div>
                <div className="text-white pr-4">
                    {"get in touch "}
                </div>
                <div className="text-white pr-4">
                    <Image src={ArrowSvg} alt="arrow" width={28} height={28} />
                </div>

                <div>
                    {TwitterLink()}
                </div>
            </div>
        </BaseWidth>
    )
}

function Logo() {
    return (
        <Link href="/">
            <div className="text-white text-2xl semi-bold font-semibold">
                emPower
                <span className="text-pink-500">Up</span>
                .games
            </div>
        </Link>
    )
}

function TwitterLink() {
    return (
        <Link href="https://twitter.com/EmpowerUpGames">
            <Image src={TwitterLogo} alt="Twitter Logo" width={28} height={28} />
        </Link>
    )
}