
const Hero = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const style = {
    width: "100%",
    height: "100%",
    backgroundImage: `url("./adaptogenosLogo.jpeg")`,
  };

  return (
    <div
      className="hero min-h-screen"
      style={style}>
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to your Adaptogen Store</h1>
          <p className="mb-5">
            Potencia tu mente y cuerpo con ayuda de la naturaleza.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
<img src='./adaptogenosLogo.jpeg'/>