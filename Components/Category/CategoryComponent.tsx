import CategoryCard from "@/Components/card/CategoryCard";

const BaseUrl = process.env.BASE_URL;

const fetchCategory = async () => {
    // Fetch Category
    const res = await fetch(`${BaseUrl}products/categories`);
    const data = await res.json();
    console.log(data);
    return data.results.slice(6, 10);
}
const CategoryComponent = async () => {
    let data = await fetchCategory();

    return (
        <main className="container mx-auto mt-12">
            <h1 className="text-center text-4xl font-bold mb-12">Category</h1>
            <section className="flex flex-wrap container mx-auto justify-center gap-8">
                    {data.map((category: any) => (
                        <CategoryCard key={category.id} image={category.icon} name={category.name} />
                    ))}
            </section>
        </main>
    )
}

export default CategoryComponent;