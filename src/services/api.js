const API_BASE = process.env.REACT_APP_API_BASE;

export const getCotizaciones = async () => {
  try {
    const response = await fetch(`${API_BASE}`);
    const data = await response.json();
    
    if (Array.isArray(data)) {
      return data;
    }
    if (data?.cotizaciones && Array.isArray(data.cotizaciones)) {
      return data.cotizaciones;
    }
    if (data?.data && Array.isArray(data.data)) {
      return data.data;
    }
    return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Polling automático para detectar cambios
export const watchCotizaciones = (callback, intervalMs = 30000) => {
  getCotizaciones().then(callback);
  
  const interval = setInterval(() => {
    getCotizaciones().then(callback);
  }, intervalMs);
  
  return () => clearInterval(interval);
};