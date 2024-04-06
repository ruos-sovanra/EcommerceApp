'use client'
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
import style from '@/Components/updates/style.module.css';
import {FormDataUpdate, FormDelete} from "@/libs/difinition";
const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const DeleteComponentLayout = ({
                                   id,
                                   category,
                                   name,
                                   price,
                                   image,
                                   quantity,
                                   desc,
                                   seller,
                               }: FormDelete) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const response = await fetch(`${BaseUrl}products/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.ok) {
                router.push('/dashboard');
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Error during product deletion:', error);
        }
    };

    return (
        <main className={style.container}>
            <Formik initialValues={{}} onSubmit={handleDelete}>
                <Form className="bg-gray-100 p-4 rounded-lg w-96">
                    <h1 className={`${style.title}`}>Delete Product</h1>
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="category">
                            Category
                        </label>
                        <Field
                            type="text"
                            name="category"
                            id="category"
                            value={category}
                            readOnly
                            className={`${style.input}`}
                        />
                    </div>
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="name">
                            Name
                        </label>
                        <Field
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            readOnly
                            className={`${style.input}`}
                        />
                    </div>
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="price">
                            Price
                        </label>
                        <Field
                            type="text"
                            name="price"
                            id="price"
                            value={price}
                            readOnly
                            className={`${style.input}`}
                        />
                    </div>
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="quantity">
                            Quantity
                        </label>
                        <Field
                            type="text"
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            readOnly
                            className={`${style.input}`}
                        />
                    </div>
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="desc">
                            Description
                        </label>
                        <Field
                            type="text"
                            name="desc"
                            value={desc}
                            readOnly
                            className={`${style.input}`}
                        />
                    </div>
                    {seller === 'sovanra ruos' && (
                        <div className="mb-5">
                            <button type="submit" className={`${style.button}`}>
                                Delete
                            </button>
                        </div>
                    )}
                </Form>
            </Formik>
        </main>
    );
};

export default DeleteComponentLayout;
