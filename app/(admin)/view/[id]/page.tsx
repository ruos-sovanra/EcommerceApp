
import UpdatePageLayout from "@/Components/updates/UpdatePageLayout";
import ViewPageLayout from "@/Components/view/ViewPageLayout";

export type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
};
const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const getData = async (id: number) => {
    const res = await fetch(`${BaseUrl}products/${id}/`);
    const data = await res.json();
    console.log(data);
    return data;
};

const ViewPage = async (props:PropsParams) =>{
    let data = await getData(props.params.id);
    console.log(data)
    return(
        <main>
            <ViewPageLayout price={data.price} desc={data.desc} name={data.name}  image={data.image}  seller={data.seller} />
        </main>
    )
}

export default ViewPage;