import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from 'react-router-dom'


const Product = () => {

    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

    const onChangeFunc = (e, type) => {
        if (type == "url") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))

        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }
    console.log(productInfo, "productInfo")

    const { modal } = useSelector(state => state.modal)
    console.log(modal, "modal")

    const dispatch = useDispatch()
    const { data, keyword } = useSelector(state => state.data)
    console.log(data, "data")

    const location = useLocation()
    let loc = location?.search.split("=")[1]

    const navigate = useNavigate();

    useEffect(() => {
        setProductInfo(data.find(dt => dt.id == loc))
    }, [loc])

    const buttonFunc = () => {
        dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }))
        dispatch(modalFunc())
    }


    const buttonUpdateFunc = () => {
        dispatch(updateDataFunc({ ...productInfo, id: loc }))
        dispatch(modalFunc())
        navigate("/")
    }

    const contentModal = (
        <>

            <Input
                value={productInfo?.name}
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
                value={productInfo?.price}
                onChange={e => onChangeFunc(e, "price")}
            />
            <Input
                placeholder={"Resim Seç"}
                id={"url"}
                type={"file"}
                name={"url"}
                onChange={e => onChangeFunc(e, "url")}
            />
            <Button btnText={loc ? "Güncelle" : "Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
        </>
    )

    const filtredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword))

    return (
        <div>
            <div className="flex items-center flex-wrap">
                {
                    filtredItems?.map((dt, i) => (
                        <ProductCard key={i} dt={dt} />
                    ))
                }
            </div>
            {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelleme" : "Ürün Başlığı"} />}
        </div>
    )
}

export default Product;