import "./About.css";

function About() {
  return (
    <section className="about">
      <p className="etiqueta">Nosotros</p>
      <h1>Hospitalidad simple, atención cuidada</h1>

      <p className="about-texto">
        En Hotel Aurora creemos que el mejor lujo es la tranquilidad. Por eso
        diseñamos cada habitación con materiales nobles, tonos suaves y
        espacios despejados, para que puedas descansar y disfrutar de tu
        estadía sin distracciones.
      </p>
      <p className="about-texto">
        Nuestro equipo trabaja para que cada detalle, desde la llegada hasta
        el desayuno, sea sencillo y agradable.
      </p>

      <div className="about-datos">
        <div>
          <strong>4</strong>
          <span>Tipos de habitación</span>
        </div>
        <div>
          <strong>24 h</strong>
          <span>Recepción</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Atención personalizada</span>
        </div>
      </div>
    </section>
  );
}

export default About;