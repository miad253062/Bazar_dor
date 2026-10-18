import Image from "next/image";
import { ProductType } from "../types/types";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Link from "next/link";
import ItemCards from "./ItemCards";

interface itemDataProp {
    itemData: ProductType
}



const unitInBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস"
};


function ItemCard({itemData}: itemDataProp) {
    return (
        <Link href={`/products/${itemData.id}`}>
            <div className="border border-gray-200 p-2 rounded-2xl">
                <div className="relative space-y-2">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl bg-gray-200 p-2 rounded-xl">{itemData.image}</h1>
                        <div>
                            <h1 className="font-bold">{itemData.nameBn}</h1>
                            <p className="text-gray-500 text-xs">প্রতি { itemData.unit in unitInBangla? unitInBangla[itemData.unit]: itemData.unit}</p>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-gray-500">আজকের দাম</p>
                        <h1 className="text-2xl">{itemData.today.toLocaleString('bn-BD')} <span className="text-gray-500 text-xs">টাকা</span></h1>
                    </div>
                   <p
  className={`flex items-center rounded-xl text-xs absolute right-0 bottom-0 p-1 ${
    itemData.change.dir === 'up'
      ? 'bg-red-100 text-red-600'
      : itemData.change.dir === 'down'
      ? 'bg-green-100 text-green-600'
      : 'bg-gray-100 text-gray-600'
  }`}
>

  {itemData.change.dir === 'up' && <FaCaretUp className="text-2xl" />}
  {itemData.change.dir === 'down' && <FaCaretDown className="text-2xl" />}
  {itemData.change.dir === 'flat' && '---'}
  <span>
    {Math.abs(itemData.change.pct).toLocaleString('bn-BD')}%
  </span>
</p>
                </div>
            </div>
        </Link>
    )
}


export default ItemCard;