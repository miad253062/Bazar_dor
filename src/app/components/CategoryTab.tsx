import { CategoryType } from "../types/types"
import NavLink from "./Navlink"


async function CategoryTab () {

    const response = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data: CategoryType[] = await response.json()

    return (
        <div className="p-2">
            {
                <div className="container mx-auto grid grid-cols-4 gap-2 md:flex items-center justify-center md:gap-4">
                    {
                        data.map(item => <NavLink href={`/categories/${item.slug}`} key={item.id}>{item.icon} {item.nameBn}</NavLink>)
                    }
                </div>
            }
        </div>
    )
}


export default CategoryTab