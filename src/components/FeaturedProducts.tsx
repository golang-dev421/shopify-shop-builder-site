
import React, { useState, useEffect } from "react";
import { Product } from "@/lib/data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fetchProducts } from "@/lib/api";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const products = await fetchProducts();
        const featured = products.filter(product => product.featured).slice(0, 4);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error("Failed to load featured products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-store-navy mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 animate-pulse rounded-lg h-80"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold text-store-navy">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-store-teal hover:text-store-navy flex items-center transition-colors"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
