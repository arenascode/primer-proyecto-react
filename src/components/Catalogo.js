import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {

  return (
    <>
      <div className="text-xl bg-stone-300 catalogue">
        <h1 className="text-center catalogueTitle">Catálogo</h1>
        <div className=" catalogueItems">
          <ItemListContainer className=" catalogueItems" />
        </div>
      </div>
    </>
  );
}
export default Catalogo