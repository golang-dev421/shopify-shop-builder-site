
import React from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
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
