
import React from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Truck, ThumbsUp, HeartHandshake } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-store-teal" />,
      title: "Curated Selection",
      description: "Each item in our collection is hand-picked for quality and style."
    },
    {
      icon: <Truck className="h-6 w-6 text-store-teal" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $100."
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-store-teal" />,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund."
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-store-teal" />,
      title: "Exceptional Service",
      description: "Our dedicated team is always ready to assist you."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-store-teal/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <FeaturedProducts />
      
      <section className="bg-store-navy/10 py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-store-navy">Transform Your Space</h2>
            <p className="text-gray-600 mb-8">
              Our collection is designed to help you create a home that feels both beautiful and functional.
              From statement furniture pieces to the perfect accent decor, discover items that reflect your 
              unique sense of style.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
