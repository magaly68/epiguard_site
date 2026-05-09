function ForWho() {
  const profiles = [
    "Vous êtes concerné par l’épilepsie et souhaitez plus de sécurité au quotidien.",
    "Vous voulez pouvoir alerter rapidement un proche en cas de malaise.",
    "Vous êtes souvent seul à l’extérieur et cherchez plus de tranquillité d’esprit.",
  ]

  return (
    <section className="for-who">
      <div className="for-who__container">
        <div className="for-who__content">
          <p className="for-who__tag">Pour qui</p>
          <h2 className="for-who__title">Pour qui est EpiGuard ?</h2>
          <p className="for-who__subtitle">
            EpiGuard s’adresse en priorité aux personnes épileptiques qui
            souhaitent se sentir plus en sécurité lorsqu’elles sont seules,
            notamment à l’extérieur.
          </p>

          <ul className="for-who__list">
            {profiles.map((item, index) => (
              <li key={index} className="for-who__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ForWho