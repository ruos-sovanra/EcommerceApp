'use client'
import {useEffect, useState} from "react";
import {Product} from "@/libs/difinition";
import CardProduct from "@/Components/card/CardProduct";
import { useRouter } from "next/navigation";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch(`${BaseUrl}products/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.results);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);
    console.log(products);
    const router = useRouter();
    return (
        <section className="container mx-auto">
           <h1 className="text-center text-4xl font-bold my-12">Our Popular Product</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {products.map((product) => (
                    <CardProduct onClick={()=>router.push(`/product/${product.id}`)} key={product.id} image={product.image} name={product.name} price={product.price} seller={product.seller} />
                ))}
            </div>
        </section>
    );
}
export default ProductPage;