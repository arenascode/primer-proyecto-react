import React, { useState } from "react";
import Swal from "sweetalert2";

const FormFooter = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked && email !== "") {
      console.log(`Email: ${email}`);

      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Gracias Por compartirnos tu email. Pronto recibirás nuestras novedades",
      });
      setEmail('')
    }
  };

  return (
    <div className="contact-form bg-warning-content">
      <h2 className="form-title">Permanezcamos en contacto</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Te informaremos sobre nuevos productos, promociones, descuentos,
          eventos y noticias relacionadas a tus intereses
        </p>
        <input
          className="form-input"
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label className="form-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          He leído los términos y condiciones y políticas de privacidad
        </label>
        <button className="form-button" type="submit">
          Notifíquenme por Correo!
        </button>
      </form>
    </div>
  );
};

export default FormFooter;
