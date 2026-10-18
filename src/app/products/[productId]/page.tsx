interface ProductProps {
    params: {
        productId: string
    }
}
async function ProductDetails ({params}: ProductProps) {
    const {productId} = await params
    const response = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`)
    const data = await response.json()
    return (
        <div>
            <div>
                <div>
                    <h1 className="bg-gray-100 p-4 rounded-2xl text-2xl md:text-4xl">{data.image}</h1>
                    <div>
                        <h1>{data.nameBn}</h1>
                        
                    </div>
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductDetails;