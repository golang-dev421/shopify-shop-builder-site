
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Similar products for recommendations
  const similarProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  useEffect(() => {
    // Find the product based on the URL parameter
    const foundProduct = products.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // If product not found, navigate to products page
      navigate("/products");
    }
    
    // Reset quantity when product changes
    setQuantity(1);
  }, [id, navigate]);
  
  if (!product) {
    return <div>Loading...</div>;
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)} 
        className="mb-8 text-gray-500 hover:text-store-teal"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-store-navy">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          
          <div className="mb-8">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="mx-4 w-8 text-center">{quantity}</span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
          
          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-store-teal hover:bg-store-teal/90 py-6"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-500 mb-1">Category</h4>
                <p>{product.category}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-500 mb-1">SKU</h4>
                <p>SKU-{product.id.toString().padStart(4, '0')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Products */}
      {similarProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-store-navy">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
