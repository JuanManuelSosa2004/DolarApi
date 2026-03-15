export const CotizacionCard=({nombre, descripcion, compra, venta,timestamp}) =>{
    return (
        <div className="cotizacion-card">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>

            <div className="precios">
                <div className="precio-item compra">
                    <span className="label">COMPRA</span>
                    <span className="valor">${compra}</span>
                </div>
                <div className="precio-item venta">
                    <span className="label">VENTA</span>
                    <span className="valor">${venta}</span>
                </div>
            </div>
        </div>
    )
}

