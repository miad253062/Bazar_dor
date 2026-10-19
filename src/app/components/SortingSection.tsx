'use client';
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";


function SortingSection() {
    const {sort, setSort} = useContext(ProductsContext)
    return (
        <div className="flex items-center justify-end w-full py-4">
            <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">সাজান</span>
                <div className="relative">
                    <select className="appearance-none border border-gray-200 text-gray-500 text-sm rounded-xl pl-4 pr-10 py-2 focus:outline-none  cursor-pointer" value={sort} onChange={(event) => setSort(event.target.value as 'default' |'lowtohigh' | 'hightolow')}>
                        <option value="default">ডিফল্ট</option>
                        <option value="lowtohigh">দাম: কম থেকে বেশি</option>
                        <option value="hightolow">দাম: বেশি থেকে কম</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default SortingSection