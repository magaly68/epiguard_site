function Features() {
  const featuresList = [
    {
      title: "Surveillance de l’activité",
      description:
        "EpiGuard analyse les mouvements de votre téléphone pour repérer une situation inhabituelle.",
    },
    {
      title: "Alerte rapide",
      description:
        "En cas de besoin, un message peut être envoyé à vos contacts pour les prévenir rapidement.",
    },
    {
      title: "Paramétrage personnalisé",
      description:
        "Choisissez vos contacts, le message d’alerte et le délai avant déclenchement selon vos besoins.",
    },
    {
      title: "Historique des événements",
      description:
        "Consultez les alertes passées pour garder une trace des événements enregistrés dans l’application.",
    },
  ]

  return (
    <section className="features">
      <div className="features__header">
        <p className="features__tag">Fonctionnalités</p>
        <h2 className="features__title">Comment EpiGuard vous accompagne</h2>
        <p className="features__subtitle">
          Une application pensée pour vous aider à rester en lien avec vos
          proches et réagir plus vite en cas de situation inhabituelle.
        </p>
      </div>

      <div className="features__grid">
        {featuresList.map((feature, index) => (
          <article className="features__card" key={index}>
            <h3 className="features__card-title">{feature.title}</h3>
            <p className="features__card-description">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features