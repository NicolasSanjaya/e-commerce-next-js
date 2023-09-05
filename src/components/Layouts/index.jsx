import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const count = useSelector((state) => state.counter.value);
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.cartQuantity
    })
    return total
  }

  return (
    <div>
      <div className="fixed w-16 h-16 rounded-full bg-amber-300 flex justify-center items-center right-5 bottom-5">
        <button onClick={() => router.push("/cart")}>
          <span className="fixed w-6 h-6 rounded-full bg-white right-12 z-50 bottom-14">{getTotalQuantity() || 0}</span>
          <AiOutlineShoppingCart className="scale-150" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
