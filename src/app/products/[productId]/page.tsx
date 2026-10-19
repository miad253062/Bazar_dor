import { ProductType } from "@/app/types/types";
import Link from "next/link";
import { FaAngleRight, FaCaretDown, FaCaretUp } from "react-icons/fa";

interface ProductProps {
    params: {
        productId: string
    }
}

const unitInBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস"
};


async function ProductDetails ({params}: ProductProps) {
    'use cache'
    const {productId} = await params
    const response = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`)
    const data: ProductType = await response.json()
    return (
        <div className="p-4">
            
            <div className="container mx-auto">
                <div>
                    <p className="flex items-center text-gray-500 py-4 pl-2"><Link href={'/'}>হোম</Link> <FaAngleRight /> <Link href={`/categories/${data.category}`}>{data.categoryNameBn}</Link> <FaAngleRight /> {data.nameBn}</p>
                </div>
                <div className="flex justify-between items-center border p-4 border-gray-200 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <h1 className="bg-gray-100 p-4 rounded-2xl text-2xl md:text-4xl">{data.image}</h1>
                        <div>
                            <h1 className="font-bold text-2xl md:text-4xl">{data.nameBn}</h1>
                            <div>
                                <p className="text-gray-500 text-xs">প্রতি {data.unit in unitInBangla? unitInBangla[data.unit]: data.unit} · {data.categoryNameBn}</p>
                                <p className="text-gray-600">গতকালের তুলনায় আজ দাম {data.yesterday > data.today? "কমেছে" : data.yesterday < data.today ? 'বেড়েছে' : "অপরিবর্তিত রয়েছে"} · {Math.abs((data.yesterday-data.today)).toLocaleString('bn-BD')}টাকা</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-2xl text-center">
                            <p className="text-gray-500">আজকের দাম</p>
                            <h1 className="text-2xl font-semibold md:text-3xl">{(data.today).toLocaleString('bn-BD')}</h1>
                            <p className="text-xs text-gray-500">টাকা / {data.unit in unitInBangla? unitInBangla[data.unit]: data.unit}</p>
                            <div className={`flex items-center justify-center ${
                                    data.change.dir === 'up'
                                    ? 'text-red-600'
                                    : data.change.dir === 'down'
                                    ? ' text-green-600'
                                    : ' text-gray-600'
                                }`}>
                                    {data.change.dir === 'up' && <FaCaretUp className="text-2xl" />}
                                    {data.change.dir === 'down' && <FaCaretDown className="text-2xl" />}
                                    {data.change.dir === 'flat' && '--'}
                                    {Math.abs(data.change.pct).toLocaleString('bn-BD')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl md:text-2xl font-semibold mb-5">দামের সারসংক্ষেপ</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-gray-200 rounded-2xl space-y-1">
                            <p className="text-gray-700">সর্বনিম্ন দাম</p>
                            <h1 className="text-2xl md:text-3xl text-green-600 font-semibold">{Math.min(... data.markets.map(item => item.min)).toLocaleString('bn-BD')} টাকা</h1>
                            <p className="text-gray-700">সবচেয়ে কম দামের বাজার</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-2xl space-y-1">
                            <p className="text-gray-700">সর্বাধিক দাম</p>
                            <h1 className="text-2xl md:text-3xl text-red-600 font-semibold">{Math.max(... data.markets.map(item => item.min)).toLocaleString('bn-BD')} টাকা</h1>
                            <p className="text-gray-700">সবচেয়ে বেশি দামের বাজার</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-2xl space-y-1">
                            <p className="text-gray-700">গড় দাম</p>
                            <h1 className="text-2xl md:text-3xl text-green-600 font-semibold">{Math.round((data.markets.map(item => item.min).reduce((acc, price) => acc + price, 0))/data.markets.length).toLocaleString('bn-BD')} টাকা</h1>
                            <p className="text-gray-700">প্রতি {data.unit in unitInBangla? unitInBangla[data.unit]: data.unit}-এর হিসাবে</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl md:text-2xl font-semibold">বাজারভিত্তিক আজকের দাম</h1>
                    <div className="border border-gray-200 rounded-2xl mt-5">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                <th className="p-3 text-left">বাজার</th>
                                <th className="p-3 text-left">বিভাগ</th>
                                <th className="p-3 text-right">সর্বনিম্ন</th>
                                <th className="p-3 text-right">সর্বাধিক</th>
                                <th className="p-3 text-right">গড়</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.markets.map((market, index) => (
                                <tr
                                    key={market.market}
                                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                                >
                                    <td className="border-t border-gray-200 p-3">{market.market}</td>
                                    <td className="border-t border-gray-200 p-3">{market.division}</td>
                                    <td className="border-t border-gray-200 p-3 text-right">
                                    {market.min.toLocaleString('bn-BD')} টাকা
                                    </td>
                                    <td className="border-t border-gray-200 p-3 text-right">
                                    {market.max.toLocaleString('bn-BD')} টাকা
                                    </td>
                                    <td className="border-t border-gray-200 p-3 text-right font-bold">
                                    {((market.min + market.max) / 2).toLocaleString('bn-BD')} টাকা
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;