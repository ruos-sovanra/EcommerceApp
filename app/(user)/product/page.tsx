'use client'
import { useEffect, useState } from "react";
import CardProduct from "@/Components/card/CardProduct";
import {useRouter} from "next/navigation";
import {Product} from "@/libs/difinition";



const BASE_URL = "https://store.istad.co/api/";
const PRODUCTS_PER_PAGE = 10; // Update this value based on your API

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [nextPage, setNextPage] = useState<string | null>(`${BASE_URL}products/?page=1`);
    const [prevPage, setPrevPage] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchProducts = async (url: string, pageNumber: number) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            setProducts(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
            setCurrentPage(pageNumber);
            const totalPages = Math.ceil(data.total / PRODUCTS_PER_PAGE); // Use data.total instead of data.count
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }

    };

    useEffect(() => {
        if (nextPage) {
            fetchProducts(nextPage, 1);
        }
    }, []);

    const handlePageChange = (pageNumber: number) => {
        const url = `${BASE_URL}products/?page=${pageNumber}`;
        fetchProducts(url, pageNumber);
    };

    const handleNextPage = () => {
        if (nextPage) {
            const pageNumber = currentPage + 1;
            fetchProducts(nextPage, pageNumber);
        }
    };

    const handlePrevPage = () => {
        if (prevPage) {
            const pageNumber = currentPage - 1;
            fetchProducts(prevPage, pageNumber);
        }
    };



    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    const router = useRouter();
    return (
        <main>
            <h1 className="text-center text-3xl my-8 mt-24">Product Page</h1>

            <section className="container mx-auto flex flex-wrap gap-5 justify-center ">
                {products.map((product,index) => (
                    <CardProduct onClick={()=>router.push(`/product/${product.id}`)} key={index} seller={product.seller} image={product.image} name={product.name} price={product.price}/>
                ))}
            </section>
            <div className="flex justify-center space-x-2 my-4">
                <button onClick={handlePrevPage} disabled={!prevPage} className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-700 transition duration-200 ease-in-out">Previous</button>
                {pageNumbers.map((number) => (
                    <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number} className={`px-2 sm:px-4 py-1 sm:py-2 rounded hidden sm:inline-block ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out`}>
                        {number}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={!nextPage} className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-700 transition duration-200 ease-in-out">Next</button>
            </div>
        </main>
    );
};

export default ProductPage;