import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {
  return (
    <>
      <div className="text-xl bg-stone-500">
        <h1>Este es el Catalogo</h1>
        <div className="inline-flex flex-1">
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}
export default Catalogo