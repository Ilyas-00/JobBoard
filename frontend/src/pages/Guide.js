import React from 'react';
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Footer from '../component/Footer'

import '../styles/Guide.css';

const Guide = () => {
  return (
    <>
        <Navbar />
    <div className="container">
      <h1>Comment créer un CV et trouver une alternance</h1>

      <div className="section">
        <h2>1. Conseils pour créer un CV efficace</h2>
        <ul>
          <li>Utilisez un design simple, professionnel et facile à lire.</li>
          <li>Commencez par un en-tête contenant vos informations personnelles (nom, contact).</li>
          <li>Mettez en avant vos expériences professionnelles et formations pertinentes.</li>
          <li>Utilisez des verbes d'action pour décrire vos responsabilités (ex : "Dirigé", "Coordonné").</li>
          <li>Adaptez votre CV à chaque poste auquel vous postulez.</li>
          <li>Faites relire votre CV pour éviter les fautes d'orthographe.</li>
        </ul>
      </div>

      <div className="section">
        <h2>2. Stratégies pour chercher la meilleure alternance</h2>
        <ul>
          <li>Utilisez des sites de recherche d’emploi spécialisés (Indeed, LinkedIn, etc.).</li>
          <li>Développez votre réseau professionnel via les plateformes sociales et les événements locaux.</li>
          <li>Ciblez les entreprises correspondant à votre secteur d’intérêt.</li>
          <li>Personnalisez chaque candidature selon l’entreprise.</li>
          <li>Enregistrez-vous à des alertes d’emploi pour rester informé des nouvelles opportunités.</li>
        </ul>
      </div>

      <div className="section">
        <h2>3. Maximiser vos chances pour décrocher un entretien</h2>
        <ul>
          <li>Rédigez une lettre de motivation claire et convaincante.</li>
          <li>Préparez-vous pour les entretiens en faisant des simulations avec des amis.</li>
          <li>Soignez votre présence sur les réseaux sociaux (ex. LinkedIn) avec un profil complet.</li>
          <li>Restez motivé et ne vous découragez pas après quelques refus.</li>
        </ul>
      </div>

      <div className="section">
        <h2>4. Vidéo récapitulative</h2>
        <p>Voici une vidéo qui résume ces conseils pour créer un CV et trouver une alternance :</p>
        <div className="video-container">
            <iframe
            title="CV et Alternance"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jIkS69pjBRU" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Guide;
