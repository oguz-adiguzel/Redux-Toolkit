import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store)=>store.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('rastgele'))
  }, []);

  return <>
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  </>;
}
export default App;
