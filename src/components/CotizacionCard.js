export const CotizacionCard=({nombre, descripcion, compra, venta,timestamp}) =>{
    return (
        <div className="cotizacion-card">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>

            <div className="precios">
                <h4 className="precio">Compra: {compra}</h4>
                <h4 className="precio">Venta: {venta}</h4>
            </div>

            <div className="footer">
                <p>Última actualización: {timestamp}</p>
            </div>
        </div>
    )
}

