import React from 'react';
import { CotizacionCard } from './CotizacionCard';
import { useState, useEffect } from 'react';
import { getCotizaciones } from '../services/api';

export const Card = () => {
    const [cotizaciones, setCotizaciones] = useState([]);

    useEffect(() => {
        getCotizaciones()
        .then(data => setCotizaciones(data))
        .catch(err => console.error(err));
    }, []);

  return (
    <div className="cotizaciones-container">
      <h2 className="cotizacion-title">Todas las Cotizaciones</h2>
      <div className="grid grid-3">
        {cotizaciones.map(cot => (
          <CotizacionCard key={cot.id} {...cot} />
        ))}
      </div>
    </div>
  );
};