import React from "react";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const CartSheet: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const handleClick = () => {
    console.log("Close button clicked");
    onClose();
  };

  // Sample cart items
  const cartItems: CartItem[] = [
    { id: 1, name: "Item 1", quantity: 2, price: 10 },
    { id: 2, name: "Item 2", quantity: 1, price: 15 },
    { id: 3, name: "Item 3", quantity: 3, price: 12 },
  ];

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div
      className={`fixed inset-y-0 right-0 z-20 bg-white w-72 p-4 transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-2 text-gray-500 hover:text-gray-700"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content of the sheet */}
      <h2 className="text-lg font-semibold mb-2 mt-7">Cart Items</h2>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">${item.price}</td>
              <td className="text-center">${item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-right">
              Total:
            </td>
            <td className="text-center">${total}</td>
          </tr>
        </tfoot>
      </table>

      {/* Checkout button */}
      <button className="btn btn-primary w-full mt-4">Check Out</button>
    </div>
  );
};

export default CartSheet;
