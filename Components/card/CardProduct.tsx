type CardProductProps = {
    image: string;
    name: string;
    price: number;
    onClick?: () => void;
    seller: string;
}
const CardProduct = ({image, name,seller, price,onClick}:CardProductProps) =>{
    return (

            <section className="card" onClick={onClick}>
                <div className="image-container">
                    <img className="w-full h-full object-cover"
                         src={image} alt={name}/>
                </div>
                <div className="flex flex-col gap-3 p-5">
                    {/*badge*/}
                    <div className="flex items-center gap-2">
                        <p className="badge">Stock Ready</p>
                        <span className="badge">{seller}</span>
                    </div>
                    <h2 className="product-title" title="Best Product Ever">
                        {name}
                    </h2>
                    <div>
                    <span className="text-xl font-bold">
                        ${price}
                    </span>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <button className="button-style">Add to Cart</button>
                    </div>
                </div>
            </section>
    )
}

export default CardProduct;