

const BuyForm = ({ setBuyer, setDisabledBtn, buyer }) => {
  
  // useEffect(() => {
    
  // }, [])
  

  const udpateBuyer = (event) => {
    
    setBuyer(buyer => ({ ...buyer, [event.target.ariaLabel]: event.target.value })
    )
    console.log(typeof event.target.value);

    const buyerNameInput = document.getElementById('buyerName')
    const buyerPhoneInput = document.getElementById('buyerPhone')
    const buyerMailInput = document.getElementById("buyerMail");
    console.log(buyerNameInput.value);
    console.log(buyerPhoneInput.value);
    console.log(buyerMailInput.value);

(buyerNameInput.value === "" || buyerPhoneInput.value === "" || buyerMailInput.value === "") ? setDisabledBtn(true) : setDisabledBtn(false);

  }
  
  return (
    <form className="containerFormCompra flex flex-col gap-3 rounded-md">
      <label className="text-lg font-bold">Tus Datos:</label>
      <div className="input-group flex-nowrap input-group-sm">
        <span className="input-group-text bg-slate-400" id="addon-wrapping">
          Nombre:
        </span>
        <input
          id="buyerName"
          type="text"
          className="input input-bordered input-sm w-full max-w-xs bg-gray-300"
          aria-label="nombre"
          placeholder="tu nombre"
          required
          onChange={udpateBuyer}
        />
      </div>
      <div className="input-group flex-nowrap input-group-sm bg-gray-300">
        <span className="input-group-text bg-slate-400" id="addon-wrapping">
          Whatsapp:
        </span>
        <input
          id="buyerPhone"
          type="number"
          className="input input-bordered input-sm w-full max-w-xs bg-gray-300"
          aria-label="whatsapp"
          placeholder="ej: 11 1234 5678"
          required
          onChange={udpateBuyer}
        />
      </div>
      <div className="input-group flex-nowrap input-group-sm">
        <span className="input-group-text bg-slate-400" id="addon-wrapping">
          Mail
        </span>
        <input
          id="buyerMail"
          type="email"
          className="input input-bordered input-sm w-full max-w-sm bg-gray-300"
          aria-label="Mail"
          placeholder="ej: hola@gmail.com"
          required
          onChange={udpateBuyer}
        />
      </div>
    </form>
  );
}
export default BuyForm