import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {

  return (
    <>
        <h1 className="text-center text-white catalogueTitle">Conoce Nuestros Adaptogenos</h1>
        <div className=" catalogueItems catalogue flex place-content-center pt-8">
          <ItemListContainer />
        </div>
    </>
  );
}
export default Catalogo