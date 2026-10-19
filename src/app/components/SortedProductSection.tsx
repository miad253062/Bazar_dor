'use client'
import { useContext } from "react";
import { ProductType } from "../types/types"
import { ProductsContext } from "@/context/ProductsContext";
import ItemCard from "./ItemCard";

interface AllProductProps {
    allproduct: ProductType[]
}
function SortedProductSection({allproduct}: AllProductProps){
    const {sort} = useContext(ProductsContext)
    const sortedData: ProductType[]  = [... allproduct];
    if(sort === 'lowtohigh'){
        sortedData.sort((a, b) => a.today - b.today)
    }else if(sort === 'hightolow'){
        sortedData.sort((a, b)=> b.today - a.today)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                sortedData.map(product => <ItemCard key={product.id} itemData={product}></ItemCard>)
            }
        </div>
    )
}

export default SortedProductSection;