import Boton from './Boton'

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full max-h-screen h-screen py-[80px]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Daniel Solis
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel
          quae at accusamus nesciunt quas esse officiis, consequatur minima
          veniam perspiciatis aliquid praesentium cumque ea.
        </p>
        <div>
          <Boton texto="View Work"/>
        </div>
      </div>
    </div>
  );
}

export default Home