import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

const Product = () => {

    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

    const onChangeFunc = (e, type) => {
        if (type == "url") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))

        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }
    // console.log(productInfo, "productInfo")

    const { modal } = useSelector(state => state.modal)
    console.log(modal, "modal")

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.data)
    console.log(data, "data")

    const buttonFunc = () => {
        dispatch(createDataFunc(productInfo))
        dispatch(modalFunc())
    }

    const contentModal = (
        <>
            <Input
                placeholder={"Ürün Ekle"}
                id={"name"}
                type={"text"}
                name={"name"}
                onChange={e => onChangeFunc(e, "name")}
            />
            <Input
                placeholder={"Fiyat Ekle"}
                id={"price"}
                type={"text"}
                name={"price"}
                onChange={e => onChangeFunc(e, "price")}
            />
            <Input
                placeholder={"Resim Seç"}
                id={"url"}
                type={"file"}
                name={"url"}
                onChange={e => onChangeFunc(e, "url")}
            />

            <Button btnText={"Oluştur"} onClick={buttonFunc} />

        </>
    )

    return (
        <div>
            <div className="flex items-center flex-wrap">
                {
                    data?.map((dt, i) => (
                        <ProductCard key={i} dt={dt} />
                    ))
                }
            </div>
            {modal && <Modal content={contentModal} title={"Ürün Başlığı"} />}
        </div>
    )
}

export default Product;