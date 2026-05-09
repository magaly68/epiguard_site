import { useState } from "react";

import homeImage from "../assets/screenshots/home.jpg";
import infoImage from "../assets/screenshots/info.jpg";
import journalImage from "../assets/screenshots/journal.jpg";
import profilMedicalImage from "../assets/screenshots/profilmedical.jpg";
import urgenceImage from "../assets/screenshots/urgence.jpg";

function ScreenShots() {
  const screenshots = [
    {
      image: homeImage,
      title: "Accueil",
      description:
        "Accédez rapidement aux fonctions principales de l’application depuis l’écran d’accueil.",
    },
    {
      image: journalImage,
      title: "Journal",
      description:
        "Consultez l’historique des événements et gardez une trace des alertes enregistrées.",
    },
    {
      image: urgenceImage,
      title: "Urgence",
      description:
        "Déclenchez rapidement une alerte en cas de besoin grâce à un accès dédié.",
    },
    {
      image: profilMedicalImage,
      title: "Profil médical",
      description:
        "Renseignez vos informations importantes pour une meilleure prise en charge.",
    },
    {
      image: infoImage,
      title: "Informations",
      description:
        "Retrouvez rapidement les informations utiles directement dans l’application.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const current = screenshots[currentIndex];

  return (
    <section className="screenshots">
      <div className="screenshots__container">
        <div className="screenshots__header">
          <p className="screenshots__tag">Aperçu</p>
          <h2 className="screenshots__title">Découvrez l’application</h2>
          <p className="screenshots__subtitle">
            Une interface simple et claire pour accéder rapidement aux fonctions essentielles.
          </p>
        </div>

        <div className="carousel">
          <button className="carousel__btn carousel__btn--left" onClick={prevSlide}>
            ←
          </button>

          <div className="carousel__content">
            <div className="carousel__image-wrapper">
              <img
                src={current.image}
                alt={current.title}
                className="carousel__image"
              />
            </div>

            <h3 className="carousel__title">{current.title}</h3>
            <p className="carousel__description">{current.description}</p>
          </div>

          <button className="carousel__btn carousel__btn--right" onClick={nextSlide}>
            →
          </button>
        </div>

        <div className="carousel__dots">
          {screenshots.map((_, index) => (
            <span
              key={index}
              className={`carousel__dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScreenShots;