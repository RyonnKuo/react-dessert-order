const API_BASE_URL = 'http://localhost:3001';

/**
 * 獲取購物車資料
 * @returns {Promise<Object[]>} 返回購物車的所有項目
 */
export const fetchShoppingCart = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/shopping-cart`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching shopping cart data:', error.message);
    throw error;
  }
};

/**
 * 新增購物車項目
 * @param {Object} item - 要新增到購物車的資料
 * @param {number} item.quantity - 選購數量
 * @param {string} item.dessertID - 甜點編號
 * @returns {Promise<Object>} 返回成功新增的項目資料
 */
export const addToShoppingCart = async (item) => {
  try {
    const response = await fetch(`${API_BASE_URL}/shopping-cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding to shopping cart:', error.message);
    throw error;
  }
};
