import Link from "next/link"
import { CategoryType } from "../types/types"

async function CategoryTab () {
    const response = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data: CategoryType[] = await response.json()
    return (
        <div className="p-2">
            {
                <div className="container mx-auto flex items-center justify-center gap-4">
                    {
                        data.map(item => <Link href={`/category/${item.slug}`} key={item.id}>{item.icon} {item.nameBn}</Link>)
                    }
                </div>
            }
        </div>
    )
}


export default CategoryTab