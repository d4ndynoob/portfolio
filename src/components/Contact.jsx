import Boton from './Boton';

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-full flex justify-center items-center p-4 py-[80px]"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email
          </p>
        </div>
          <input type="text" placeholder="Name" name="name" className="bg-[#ccd6f6] p-2 outline-none capitalize"/>
          <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6] outline-none lowercase"/>
          <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2 outline-none"></textarea>
          <Boton texto="Let's Collaborate" className=""/>
      </form>
    </div>
  );
}

export default Contact