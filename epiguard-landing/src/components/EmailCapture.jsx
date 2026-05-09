import { useForm, ValidationError } from "@formspree/react";

function EmailCapture() {
  const [state, handleSubmit] = useForm("mojpgebo");

  if (state.succeeded) {
    return (
      <section className="email" id="email">
        <div className="email__container">
          <h2 className="email__title">Merci ✨</h2>

          <p className="email__subtitle">
            Votre inscription à l’accès anticipé d’EpiGuard a bien été prise en compte.
          </p>

          <p className="email__note">
            Vous recevrez les prochaines informations dès qu’elles seront disponibles.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="email" id="email">
      <div className="email__container">
        <h2 className="email__title">
          Soyez parmi les premiers à tester EpiGuard
        </h2>

        <p className="email__subtitle">
          Accédez en avant-première à l’application et recevez les prochaines
          améliorations conçues pour renforcer votre sécurité au quotidien.
        </p>

        <form className="email__form" onSubmit={handleSubmit}>
          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Votre adresse email"
            className="email__input"
            required
          />

          <button
            type="submit"
            className="email__button"
            disabled={state.submitting}
          >
            {state.submitting
              ? "Envoi en cours..."
              : "Recevoir les prochaines améliorations"}
          </button>

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="email__error"
          />
        </form>

        <p className="email__note">
          Accès prioritaire • Aucun spam • Désinscription possible à tout moment
        </p>
      </div>
    </section>
  );
}

export default EmailCapture;