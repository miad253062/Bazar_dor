import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ProductType } from "../types/types";
import Link from "next/link";

async function Marquee () {
    const response = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data:ProductType[] = await response.json()

    console.log(data)
    return (
        <div>
            <div className="marquee-container">
                <div className="marquee-content">
                    <div className="flex items-center">
                        {
                            data.map(item => <Link href={'/#'} className="flex items-center border border-gray-100 gap-2 px-2 py-1" key={item.id}>
                                <span>{item.image}</span>
                                <p>{item.nameBn}</p>
                                <p>{item.today.toLocaleString('bn-BD')} টাকা/কেজি</p>
                                <div className="flex items-center">
                                    {
                                        item.change.dir === 'up'? <FaCaretUp className="text-red-600 text-2xl" /> : <FaCaretDown className="text-2xl text-green-600" />
                                    }
                                    <p className={`${item.change.pct > 0? 'text-red-600': 'text-green-600'}`}>
                                        {
                                           Math.abs(item.change.pct).toLocaleString('bn-BD')
                                        }%
                                    </p>
                                </div>
                            </Link>)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Marquee;