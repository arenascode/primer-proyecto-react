import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {

  return (
    <>
      <div className="text-xl">
        <h1 className="text-center catalogueTitle">Catálogo</h1>
        <div className=" catalogueItems catalogue">
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}
export default Catalogo