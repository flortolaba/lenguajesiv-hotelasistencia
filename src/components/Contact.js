import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section className="contacto">
      <p className="etiqueta">Contacto</p>
      <h1>Consultá por tu estadía</h1>
      <p className="contacto-lead">
        Escribinos y te respondemos a la brevedad.
      </p>

      <div className="contacto-grilla">
        <form className="contacto-form" onSubmit={manejarEnvio}>
          <label>
            Nombre
            <input type="text" placeholder="Tu nombre" required />
          </label>

          <label>
            Correo electrónico
            <input type="email" placeholder="tucorreo@ejemplo.com" required />
          </label>

          <label>
            Mensaje
            <textarea rows="4" placeholder="Contanos qué necesitás" required />
          </label>

          <button type="submit" className="btn-enviar">
            Enviar mensaje
          </button>

          {enviado && <p className="exito">¡Gracias! Recibimos tu mensaje.</p>}
        </form>

        <aside className="contacto-info">
          <h3>Datos del hotel</h3>
          <p>
            <span>Teléfono</span>
            +54 387 000-0000
          </p>
          <p>
            <span>Correo</span>
            reservas@hotelaurora.com
          </p>
          <p>
            <span>Recepción</span>
            Atención las 24 horas
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Contact;