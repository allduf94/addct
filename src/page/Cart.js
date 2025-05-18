import "./Cart.scss"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [counts, setCounts] = useState(cartItems.map(() => 1));
  const [selectedItems, setSelectedItems] = useState(new Array(cartItems.length).fill(false));

  const handleIncrease = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const handleSelectItem = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
  };

  const handleSelectAll = () => {
    setSelectedItems(new Array(cartItems.length).fill(true));
  };

  const handleDeleteSelected = () => {
    selectedItems.forEach((isSelected, index) => {
      if (isSelected) {
        removeFromCart(cartItems[index].id);
      }
    });
    setSelectedItems(new Array(cartItems.length).fill(false)); // 선택 해제
  };

  const selectedCount = selectedItems.filter(Boolean).length;

  const totalCost = cartItems.reduce((total, item, index) => {
    const dcValue = parseInt(item.dc.replace(/[^0-9]/g, ''));
    return total + (dcValue * counts[index]);
  }, 0);

  const totalDiscount = cartItems.reduce((total, item) => {
    const costValue = parseInt(item.cost.replace(/[^0-9]/g, ''));
    const dcValue = parseInt(item.dc.replace(/[^0-9]/g, ''));
    return total + (costValue - dcValue);
  }, 0);

  const shippingCost = cartItems.length === 0 ? 0 : (totalCost >= 50000 ? 0 : 3000);
  const totalOrderAmount = totalCost + shippingCost;

  const formatPrice = (price) => price.toLocaleString();

  return (
    <section id="Cart">
      <div className="left">
        <h3>장바구니 상품</h3>
        <div className="container">
          <div className="choose-box">
            <span>{selectedCount}</span>개 선택
            <button onClick={handleSelectAll}>전체 선택</button>
            <button onClick={handleDeleteSelected}>선택 삭제</button>
          </div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li className={`cart-item ${selectedItems[index] ? 'choosen' : ''}`} key={index} onClick={() => handleSelectItem(index)}>
                <div className="box_img">
                  <img src={item.img[0]} />
                </div>
                <div className="wrap">
                  <h3>{item.name[0]}</h3>
                  <h5>{item.feeling}</h5>
                  <div className="wrap_price">
                    <span className="count">{counts[index]}개</span>
                    <span className="price"><del>{item.cost}</del></span>
                    <span className="dc">{item.dc}</span>
                    <div className="wrap_button">
                      <button 
                        className="decrease" 
                        onClick={() => handleDecrease(index)}>
                          <i className="bi bi-dash-lg" />
                      </button>
                      <button 
                        className="increase" 
                        onClick={() => handleIncrease(index)}>
                          <i className="bi bi-plus-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <h3>주문상품</h3>
        <ul>
          <li>총 상품금액 <span>{formatPrice(totalCost)}</span></li>
          <li>총 할인금액 <span>{formatPrice(totalDiscount)}</span></li>
          <li>총 배송비 <span>{formatPrice(shippingCost)}</span></li>
        </ul>
        <h3>총 주문금액 <span>￦{formatPrice(totalOrderAmount)}</span></h3>
        <button>주문하기</button>
      </div>
    </section>
  )
}