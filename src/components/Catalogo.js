import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {

  return (
    <>
        <h1 className="text-center catalogueTitle">Nuestros Adaptogenos</h1>
        <div className=" catalogueItems catalogue flex place-content-center pt-8">
          <ItemListContainer />
        </div>
    </>
  );
}
export default Catalogo