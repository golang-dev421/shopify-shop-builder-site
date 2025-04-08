
// API configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Product API
export const fetchProducts = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fall back to local data for development
    return import('./data').then(module => module.products);
  }
};

export const fetchProductById = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    // Fall back to local data for development
    return import('./data').then(module => 
      module.products.find((p: any) => p.id === id)
    );
  }
};

// Cart API
export const createOrder = async (orderData: any): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create order');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
