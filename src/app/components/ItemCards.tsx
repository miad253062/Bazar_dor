import { Suspense } from "react";
import { ProductType } from "../types/types";
import ItemCard from "./ItemCard";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

async function ItemCards () {
    const response = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data: ProductType[] = await response.json()

    const priceIncr: ProductType[] = data.filter(item =>item.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
    const priceDecr: ProductType[] = data.filter(item => item.change.dir ==='down').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
    return(
        <div className="space-y-10">
            <div>
                <div className="flex items-center gap-2 pl-4">
                    <FaCaretUp className="text-red-600 text-2xl"/>
                    <h1 className="text-2xl font-bold">আজ দাম বেড়েছে</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {
                    priceIncr.map(item => <ItemCard key={item.id} itemData={item}></ItemCard>)
                }   
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 pl-4">
                    <FaCaretDown className="text-green-600 text-2xl"/>
                    <h1 className="text-2xl font-bold">আজ দাম কমেছে</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {
                    priceDecr.map(item => <ItemCard key={item.id} itemData={item}></ItemCard>)
                }   
                </div>
            </div>

            <div>
                <div className="pl-5">
                    <h1 className="text-2xl font-bold">সব পণ্য</h1>
                    <p>মোট {data.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {
                    data.map(item => <ItemCard key={item.id} itemData={item}></ItemCard>)
                }   
                </div>
            </div>
            
        </div>
        

    )
}

export default ItemCards;