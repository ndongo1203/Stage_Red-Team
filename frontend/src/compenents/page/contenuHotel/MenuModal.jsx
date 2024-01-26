import React, { useState } from "react";
import InputModalHotel from "./InputModalHotel";

function MenuModal() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faites quelque chose avec les données du formulaire et l'image sélectionnée (selectedImage)
    console.log("Données du formulaire :", e.target.elements);
    console.log("Image sélectionnée :", selectedImage);
  };

  const handleImageClick = () => {
    // Déclencher l'ouverture du sélecteur de fichiers
    document.getElementById("image").click();
  };

  const handleImageChange = (e) => {
    // Mettre à jour l'état avec le fichier sélectionné
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <div className="modal-body">
        <form className="modalLabel" onSubmit={handleSubmit}>
          <div className="row">
            <InputModalHotel type={"text"} label={"Adresse de l'hotel"} />
            <InputModalHotel type={"text"} label={"Adresse"} />
          </div>
          <div className="row">
            <InputModalHotel type={"email"} label={"E-mail"} />
            <InputModalHotel type={"number"} label={"Numéro de téléphone"} />
          </div>
          <div className="row">
            <InputModalHotel type={"number"} label={"Prix par nuit"} />
            <div className="col">
              <label htmlFor="devise" className="form-label">
                Devise
              </label>
              <select className="form-select" id="devise" defaultValue="F XOF">
                <option>F XOF</option>
                <option>Euro</option>
                <option>Dollar</option>
              </select>
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <div
              className="col p-0 border rounded py-4 d-flex align-items-center justify-content-center flex-column"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <input
                type="file"
                className="form-control visually-hidden"
                id="image"
                onChange={handleImageChange}
              />
              <span className="ms-2 imageModal">
                <i className="bi bi-image fs-1"></i>
              </span>
              <p className="textImg">Ajouter une image</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MenuModal;
