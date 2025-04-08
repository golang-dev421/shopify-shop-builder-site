
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-store-navy/10">
        {/* Using a color overlay instead of an actual image for placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-store-navy/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Elevate Your Home
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover curated furniture and decor pieces that transform your space into a reflection of your unique style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-store-teal hover:bg-store-teal/90 text-white px-8 py-6"
            >
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6"
            >
              <Link to="/products?category=featured">
                Featured Collection
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
