import { useCart } from "./context/CartContext"
import Cart from "./Cart"


const BuyForm = ({setBuyer, buyer, sendOrder}) => {
  
  // useEffect(() => {
    
  // }, [])
  

  const udpateBuyer = (event) => {
    
    setBuyer(buyer => ({ ...buyer, [event.target.ariaLabel]: event.target.value })
    
    )
    console.log(buyer);
    console.log(event.target.ariaLabel);

    };

  return (
    <form className="containerFormCompra flex flex-col gap-3">
      <div className="input-group flex-nowrap input-group-sm">
        <span className="input-group-text" id="addon-wrapping">
          Nombre:
        </span>
        <input
          type="text"
          className="input input-bordered input-sm w-full max-w-xs"
          aria-label="nombre"
          required onChange={udpateBuyer}
        />
      </div>
      <div className="input-group flex-nowrap input-group-sm">
        <span className="input-group-text " id="addon-wrapping">
          Whatsapp:
        </span>
        <input
          type="number"
          className="input input-bordered input-sm w-full max-w-xs"
          aria-label="whatsapp"
          placeholder="ej: 11 1234 5678"
          required onChange={udpateBuyer}
        />
      </div>
      <div className="input-group flex-nowrap input-group-sm">
        <span className="input-group-text" id="addon-wrapping">
          Mail
        </span>
        <input
          type="mail"
          className="input input-bordered input-sm w-full max-w-xs"
          aria-label="Mail"
          placeholder="ej: hola420@gmail.com"
          required onChange={udpateBuyer}
        />
      </div>
      <div className="input-group flex-nowrap input-group-sm">
        <span className="input-group-text" id="addon-wrapping">
          Dirección
        </span>
        <input
          type="text"
          className="input input-bordered input-sm w-full max-w-xs"
          aria-label="direccion"
          aria-describedby="addon-wrapping"
          placeholder="ej: Calle Malabia 2854 5D"
          required onChange={udpateBuyer}
        />
      </div>
      <div className="form-check ml-2">
                    <label classNameName="form-check-label mr-2" for="flexCheckDefault">
            Acepto Terminos y Condiciones
        </label>
        <input
            className="checkbox checkbox-xs ml-2"
            type="checkbox"
            value="accept"
            id="flexCheckDefault"
            required
          />

      </div>
      <button className="btn btn-xs btn-success" type="submit" value="enviar" onSubmit={sendOrder}>
        Confirmar
      </button>
    </form>
  );
}
export default BuyForm