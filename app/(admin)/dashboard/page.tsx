'use client'
import DataTable, { TableColumn } from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { ProductType } from '@/libs/difinition';
import { useRouter } from 'next/navigation';

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const Dashboard = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        fetch(`${BaseUrl}products/`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(products);

    const columns: TableColumn<ProductType>[] = [
        {
            name: 'Product Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
            sortable: true,
        },
        {
            name: 'Category',
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: 'Image',
            selector: (row): any => <img src={row.image} alt={row.name} className="w-16 h-16" />,
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row): any => (
                <div>
                    <button className="text-blue-500 pe-2" onClick={() => handleView(row)}>view</button>
                    <button className="text-yellow-400 pe-2" onClick={() => handleUpdate(row)}>Update</button>
                    <button className="text-red-500" onClick={() => handleDelete(row)}>Delete</button>
                </div>
            ),
        },
    ];

    const handleUpdate = (product: ProductType) => {
        setSelectedProduct(product);
        router.push(`/update/${product.id}`);
    };
    const handleDelete = (product: ProductType) => {
        setSelectedProduct(product);
        router.push(`/delete/${product.id}`);
    };
    const handleView = (product: ProductType) => {
        setSelectedProduct(product);
        router.push(`/view/${product.id}`);
    }

    return (
        <main>
            <DataTable
                className="overflow-x-auto sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible"
                fixedHeader={true}
                columns={columns}
                data={products}
                pagination
                customStyles={customStyles}
                striped
                highlightOnHover
            />

        </main>
    );
};
const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '36px', // override the cell padding for head cells
            paddingRight: '8px',
            fontSize: '1.2rem',
        },
    },
    cells: {
        style: {
            paddingLeft: '36px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};
export default Dashboard;
