import React, { useState, createContext, useEffect } from "react";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(2);
  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, []);

  const fetchDetails = async () => {
    let url = ` https://dnc0cmt2n557n.cloudfront.net/products.json`;
    let data = await fetch(url);
    let jsonData = await data.json();
    jsonData.products.forEach((element) => {
      element.quantity = 1;
      element.img =
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    });
    setProducts(jsonData.products);
  };

  const increment = (id) => {
    setTotalQuantity(totalQuantity + 1);
    let updatedCart = products.map((item) => {
      if (item.id === id) {
        if (document.getElementById(id) !== null) {
          document.getElementById(id).hidden = false;
        }
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    setProducts(updatedCart);
  };

  const removeItem = (id, count) => {
    setTotalQuantity(totalQuantity - count);
    let updatedCart = products.map((item) => {
      if (item.id === id) {
        item.quantity = 0;
      }
      return item;
    });
    setProducts(updatedCart);
  };

  const decrement = (id) => {
    let updatedCart = products.map((item) => {
      if (item.id === id) {
        if (item.quantity === 0) {
          window.alert("Products cannot be less than 0");
          return item;
        }
        setTotalQuantity(totalQuantity - 1);
        item.quantity = item.quantity - 1;
        if (document.getElementById(id) !== null) {
          document.getElementById(id).hidden = false;
        }
      }
      return item;
    });
    setProducts(updatedCart);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          increment,
          products,
          decrement,
          totalQuantity,
          removeItem,
        }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
}
