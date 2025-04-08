
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </Link>
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg hover:text-store-teal transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(id, quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="w-10 text-center">{quantity}</span>
          
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-2 text-gray-500 hover:text-destructive"
          onClick={() => removeFromCart(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-6 w-24 text-right">
        <p className="font-semibold">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
