const API_BASE = process.env.REACT_APP_API_BASE;

export const getCotizaciones = async () => {
      try {
        const response = await fetch(`${API_BASE}`);
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err);
        return [];
      }
    };