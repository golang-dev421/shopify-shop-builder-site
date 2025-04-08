
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, ArrowUpAZ, Sliders } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (categoryParam && categoryParam !== "all") {
      if (categoryParam === "featured") {
        result = result.filter(product => product.featured);
      } else {
        result = result.filter(product => product.category === categoryParam);
      }
    }
    
    // Sort products
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(result);
  }, [categoryParam, sortOption]);

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    setSearchParams(params);
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-store-navy">Our Collection</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Filters */}
        <div className="hidden md:block w-60 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={categoryParam === category.id ? "default" : "ghost"}
                  className={categoryParam === category.id 
                    ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                    : "w-full justify-start text-gray-700"
                  }
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </Button>
              ))}
              <Button
                variant={categoryParam === "featured" ? "default" : "ghost"}
                className={categoryParam === "featured" 
                  ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                  : "w-full justify-start text-gray-700"
                }
                onClick={() => handleCategoryChange("featured")}
              >
                Featured
              </Button>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Sort By</h3>
              <div className="space-y-2">
                <Button
                  variant={sortOption === "default" ? "default" : "ghost"}
                  className={sortOption === "default" 
                    ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                    : "w-full justify-start text-gray-700"
                  }
                  onClick={() => setSortOption("default")}
                >
                  Default
                </Button>
                <Button
                  variant={sortOption === "price-asc" ? "default" : "ghost"}
                  className={sortOption === "price-asc" 
                    ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                    : "w-full justify-start text-gray-700"
                  }
                  onClick={() => setSortOption("price-asc")}
                >
                  Price: Low to High
                </Button>
                <Button
                  variant={sortOption === "price-desc" ? "default" : "ghost"}
                  className={sortOption === "price-desc" 
                    ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                    : "w-full justify-start text-gray-700"
                  }
                  onClick={() => setSortOption("price-desc")}
                >
                  Price: High to Low
                </Button>
                <Button
                  variant={sortOption === "name-asc" ? "default" : "ghost"}
                  className={sortOption === "name-asc" 
                    ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                    : "w-full justify-start text-gray-700"
                  }
                  onClick={() => setSortOption("name-asc")}
                >
                  <ArrowDownAZ className="mr-2 h-4 w-4" />
                  Name: A-Z
                </Button>
                <Button
                  variant={sortOption === "name-desc" ? "default" : "ghost"}
                  className={sortOption === "name-desc" 
                    ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                    : "w-full justify-start text-gray-700"
                  }
                  onClick={() => setSortOption("name-desc")}
                >
                  <ArrowUpAZ className="mr-2 h-4 w-4" />
                  Name: Z-A
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Filters */}
        <div className="md:hidden mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {filteredProducts.length} Products
          </h2>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Sliders className="mr-2 h-4 w-4" />
                Filter & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <h3 className="font-semibold text-lg mb-4 mt-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <SheetClose asChild key={category.id}>
                    <Button
                      variant={categoryParam === category.id ? "default" : "ghost"}
                      className={categoryParam === category.id 
                        ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                        : "w-full justify-start text-gray-700"
                      }
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </Button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    variant={categoryParam === "featured" ? "default" : "ghost"}
                    className={categoryParam === "featured" 
                      ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                      : "w-full justify-start text-gray-700"
                    }
                    onClick={() => handleCategoryChange("featured")}
                  >
                    Featured
                  </Button>
                </SheetClose>
              </div>
              
              <h3 className="font-semibold text-lg mb-4 mt-8">Sort By</h3>
              <div className="space-y-2">
                <SheetClose asChild>
                  <Button
                    variant={sortOption === "default" ? "default" : "ghost"}
                    className={sortOption === "default" 
                      ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                      : "w-full justify-start text-gray-700"
                    }
                    onClick={() => setSortOption("default")}
                  >
                    Default
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant={sortOption === "price-asc" ? "default" : "ghost"}
                    className={sortOption === "price-asc" 
                      ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                      : "w-full justify-start text-gray-700"
                    }
                    onClick={() => setSortOption("price-asc")}
                  >
                    Price: Low to High
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant={sortOption === "price-desc" ? "default" : "ghost"}
                    className={sortOption === "price-desc" 
                      ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                      : "w-full justify-start text-gray-700"
                    }
                    onClick={() => setSortOption("price-desc")}
                  >
                    Price: High to Low
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant={sortOption === "name-asc" ? "default" : "ghost"}
                    className={sortOption === "name-asc" 
                      ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                      : "w-full justify-start text-gray-700"
                    }
                    onClick={() => setSortOption("name-asc")}
                  >
                    <ArrowDownAZ className="mr-2 h-4 w-4" />
                    Name: A-Z
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant={sortOption === "name-desc" ? "default" : "ghost"}
                    className={sortOption === "name-desc" 
                      ? "w-full justify-start bg-store-teal hover:bg-store-teal/90" 
                      : "w-full justify-start text-gray-700"
                    }
                    onClick={() => setSortOption("name-desc")}
                  >
                    <ArrowUpAZ className="mr-2 h-4 w-4" />
                    Name: Z-A
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-500">
                Try changing your filters or check back later for new items.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
