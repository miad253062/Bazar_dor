interface CategoryParamProps {
    params: {
        category: string
    }
}

async function CategoryPage ({params}: CategoryParamProps) {
    const {category} = await params;

    return (
        <div>
            <h1>Category Page {category}</h1>
        </div>
    )
}

export default CategoryPage;