function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__content">
          <p className="hero__tag">Application de sécurité personnelle</p>

          <h1 className="hero__title">
            Quand ça arrive, vous ne devriez jamais être seul.
          </h1>

          <p className="hero__subtitle">
            ProxiVeille permet d’alerter rapidement un proche en cas de situation
            inhabituelle, même lorsque vous êtes seul à l’extérieur.
          </p>

          <p className="hero__status">
            Version en cours de validation — accès anticipé ouvert
          </p>

          <div className="hero__cta">
            <a href="#email" className="hero__btn hero__btn--primary">
              Rejoindre l’accès anticipé
            </a>

            <a href="#features" className="hero__btn hero__btn--secondary">
              Voir comment ça fonctionne
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src="/src/assets/screenshots/home.jpg"
            alt="Aperçu application ProxiVeille"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;