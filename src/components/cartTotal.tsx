import { useCart } from "@/components/CartContext";

export default function CartTotals() {
  const { cartItems } = useCart();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.quantity * item.unitPrice, 0);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="col-span-4 px-5 sm:px-0 lg:w-[350px] flex flex-col items-center justify-between pt-5 pb-7 gap-5 lg:bg-lightOrange rounded-[8px] h-fit bg-[#F9F1E7]">
      <div className="flex flex-col gap-5 items-start lg:items-center w-full lg:w-[90%]">
        <p className="text-xl font-medium">Cart Totals</p>

        <div className="w-full flex flex-col gap-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <p className="text-sm text-myBlack">{item.productName}</p>
              <p className="text-[#9F9F9F] font-medium text-sm">
                Rs: {item.unitPrice.toLocaleString()} X {item.quantity}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between mt-2 pt-3 border-t border-myOrange">
            <p className="text-myBlack">Total:</p>
            <p className="text-myOrange">Rs: {calculateTotal().toLocaleString()}</p>
          </div>
        </div>
      </div>
   </div>
  );
}
