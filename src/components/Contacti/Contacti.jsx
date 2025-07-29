import React from 'react';

function Contacti() {
  return (
    <section>
      <div>
        <h2>Ubícanos</h2>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6073285027183!2d-87.20674278582714!3d14.06592439012606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbd99cfa7bd89%3A0xabcde123456!2sNombre%20del%20lugar!5e0!3m2!1ses-419!2shn!4v1623456789123!5m2!1ses-419!2shn"
                width="100%"
                height="300"
                style={{ border:0}}
                allowFullScreen=""
                loading="lazy"
        />  
        <div>
          <p><strong>Dirección:</strong> Residencial San Juan, Tegucigalpa</p>
          <p><strong>Horario:</strong> Lunes a Viernes: 8am - 5pm | Sábado: 8am - 1pm</p>
          <p><strong>Teléfono:</strong> (504) 9870-6266</p>
        </div>
      </div>
    </section>
  );
}

export default Contacti;