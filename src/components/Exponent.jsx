const Exponent = ({ num, exponent }) => {
    // Calculamos el resultado del exponente
    const result = num ** exponent;
  
    // Generamos la cadena de multiplicación (ej. 2 * 2 o 2 * 2 * 2)
    const multiplication = Array(exponent).fill(num).join(' * ');
  
    return (
      <div className="exponent-counter-container">
        {/* Mostrar el número base con el exponente */}
        <p className="exponent-label">{num}<sup>{exponent}</sup></p>
        
        {/* Mostrar la multiplicación detallada y el resultado */}
        <p className="exponent-result">
          {multiplication} = <span className="total">{result}</span>
        </p>
      </div>
    );
  };
  
  export default Exponent;
  