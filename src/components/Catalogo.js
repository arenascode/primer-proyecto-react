import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {
  // const style = {
  //   width: "100%",
  //   height: "100%",
  //   backgroundImage: `url("./catalogueBg.jpeg")`,
  // };
  return (
    <>
      <div className="text-xl bg-stone-300 catalogue">
        <h1 className="text-center catalogueTitle">Catalogo</h1>
        <div className=" catalogueItems">
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}
export default Catalogo