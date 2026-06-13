function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2 className="footer__logo">ProxiVeille</h2>
          <p className="footer__description">
            Une application pensée pour aider à alerter rapidement un proche en
            cas de situation inhabituelle.
          </p>
        </div>

        <div className="footer__links">
          <a
            href="TON_LIEN_PLAY_STORE"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Télécharger l’application
          </a>

          <a href="#email-capture" className="footer__link">
            Recevoir les mises à jour
          </a>

          <a href="#" className="footer__link">
            Politique de confidentialité
          </a>

          <a href="mailto:wintzer.magaly@gmail.com" className="footer__link">
            Contact
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 ProxiVeille. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;