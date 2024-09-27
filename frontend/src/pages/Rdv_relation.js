import React, { useState } from 'react';
import Navbar from '../component/Navbar';

const Rdv_relation = () => {

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    specialite: '',
    entrepriseSouhaitee: '',
    informationsSupp: '',
    cv: null,
    dateRendezVous: '',
    heureRendezVous: ''
  });

  const [message, setMessage] = useState('');

  // Liste des entreprises
  const entreprises = [
    "Google", "Facebook", "Microsoft", "Apple", "Amazon", "IBM",
    "Deloitte", "Capgemini", "Accenture", "Airbus", "BNP Paribas",
    "Société Générale", "L'Oréal", "TotalEnergies", "Danone", 
    "Nestlé", "Orange", "Thales", "Peugeot", "Renault"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:relation-ecoles@gmail.com?subject=Demande de rendez-vous&body=${encodeURIComponent(
      `Prénom: ${formData.prenom}\nNom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nSpécialité: ${formData.specialite}\nEntreprise Souhaitée: ${formData.entrepriseSouhaitee}\nInformations supplémentaires: ${formData.informationsSupp}\nDate du Rendez-vous: ${formData.dateRendezVous}\nHeure du Rendez-vous: ${formData.heureRendezVous}`
    )}`;

    window.location.href = mailto;

    setFormData({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      specialite: '',
      entrepriseSouhaitee: '',
      informationsSupp: '',
      cv: null,
      dateRendezVous: '',
      heureRendezVous: ''
    });
  };

  return (

    <>
    <Navbar />
    <div className="App">
      <h1>Inscription pour un Rendez-vous</h1>
      {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="input-pair">
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div className="input-pair">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
        </div>
        <div className="input-pair">
          <input type="text" name="specialite" placeholder="Spécialité" value={formData.specialite} onChange={handleChange} required />
          <select name="entrepriseSouhaitee" value={formData.entrepriseSouhaitee} onChange={handleChange} required>
            <option value="" disabled>Choisissez une entreprise</option>
            {entreprises.map((entreprise, index) => (
              <option key={index} value={entreprise}>{entreprise}</option>
            ))}
          </select>
        </div>

        <label>Informations supplémentaires</label>
        <textarea name="informationsSupp" value={formData.informationsSupp} onChange={handleChange} placeholder="Entrez ici d'autres informations..." />

        <label>Date du Rendez-vous</label>
        <input type="date" name="dateRendezVous" value={formData.dateRendezVous} onChange={handleChange} required />

        <label>Heure du Rendez-vous</label>
        <input type="time" name="heureRendezVous" value={formData.heureRendezVous} onChange={handleChange} required />

        <label>Téléchargez votre CV *</label>
        <div className="file-upload">
          <input type="file" onChange={handleFileChange} />
        </div>

        <div className="submit-section">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Rdv_relation;
