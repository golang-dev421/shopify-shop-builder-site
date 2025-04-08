
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="flex-grow">
            <h3 className="font-medium text-lg hover:text-store-teal transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full bg-store-teal hover:bg-store-teal/90"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
