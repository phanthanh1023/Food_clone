import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([])
    const [cartItem, setCartItem] = useState({})
    const getFoodList = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            setFoodList(res.data.products)
        } catch {
            console.log("Lỗi")
        }
    }
    useEffect(() => {
        getFoodList();
    }, [])


    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
            toast.success("Đã thêm vào giỏ hàng")

        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            toast.success("Đã thêm vào giỏ hàng")
        }
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        toast.info("Đã xóa khỏi giỏ hàng")

    };
    const getTotalAmount = () => {
        let total = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = foodList.find((product) => product.id === Number(item));
                total += itemInfo.price * cartItem[item];
            }
        }
        return parseFloat(total.toFixed(2));
    }
    const getCartItemCount = () => {
        return Object.values(cartItem).reduce((total, quantity) => total + quantity, 0);
    }

    const contextValue = {
        foodList,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalAmount,
        getCartItemCount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}
export default StoreContextProvider;