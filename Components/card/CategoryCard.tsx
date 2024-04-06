type CardProductProps = {
    image: string;
    name: string;
}
const CategoryCard = ({image, name}:CardProductProps) =>{
    return (
        <section className="card2">
            <div className="image-container">
                <img className="w-full h-full object-cover"
                     src={image} alt={name}/>
            </div>
            <div className="flex flex-col gap-3 p-5">
                {/*badge*/}
                <div className="flex items-center gap-2">
                    <p className="badge">Stock Ready</p>
                    <span className="badge">Official Store</span>
                </div>
                <h2 className="product-title" title="Best Product Ever">
                    {name}
                </h2>
            </div>
        </section>
    )
}

export default CategoryCard;