import React from 'react';
import { CotizacionCard } from './CotizacionCard';

const cotizaciones = [
  { id: 1, nombre: "Official", descripcion: "Tipo de cambio oficial del BCRA", compra: "1.370,00", venta: "1.420,00", timestamp: "13 mar 2026, 5:05 p.m.", spread: "3.65%", estado: null },
  { id: 2, nombre: "Blue", descripcion: "Mercado paralelo o informal", compra: "1.395,00", venta: "1.415,00", timestamp: "15 mar 2026, 8:58 p.m.", spread: "1.43%", estado: "Destacado" },
  { id: 1, nombre: "Official", descripcion: "Tipo de cambio oficial del BCRA", compra: "1.370,00", venta: "1.420,00", timestamp: "13 mar 2026, 5:05 p.m.", spread: "3.65%", estado: null },
  { id: 2, nombre: "Blue", descripcion: "Mercado paralelo o informal", compra: "1.395,00", venta: "1.415,00", timestamp: "15 mar 2026, 8:58 p.m.", spread: "1.43%", estado: "Destacado" },
  { id: 1, nombre: "Official", descripcion: "Tipo de cambio oficial del BCRA", compra: "1.370,00", venta: "1.420,00", timestamp: "13 mar 2026, 5:05 p.m.", spread: "3.65%", estado: null },
  { id: 2, nombre: "Blue", descripcion: "Mercado paralelo o informal", compra: "1.395,00", venta: "1.415,00", timestamp: "15 mar 2026, 8:58 p.m.", spread: "1.43%", estado: "Destacado" },
  { id: 1, nombre: "Official", descripcion: "Tipo de cambio oficial del BCRA", compra: "1.370,00", venta: "1.420,00", timestamp: "13 mar 2026, 5:05 p.m.", spread: "3.65%", estado: null }
  
];
  

export const Card = () => {
  return (
    <div className="cotizaciones-container">
      <h2>Todas las Cotizaciones</h2>
      <div className="grid grid-3">
        {cotizaciones.map(cot => (
          <CotizacionCard key={cot.id} {...cot} />
        ))}
      </div>
    </div>
  );
};