
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartProvider";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold mb-4 text-store-navy">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button 
            asChild
            className="bg-store-teal hover:bg-store-teal/90"
          >
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-store-navy">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                </h2>
                <Button 
                  variant="ghost" 
                  className="text-gray-500 hover:text-destructive"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{totalPrice > 100 ? "Free" : "$9.99"}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(totalPrice > 100 ? totalPrice : totalPrice + 9.99).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-store-teal hover:bg-store-teal/90"
                onClick={() => navigate("/checkout")}
              >
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>
              Shipping is free for orders over $100. For orders under $100, 
              a flat shipping rate of $9.99 applies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
