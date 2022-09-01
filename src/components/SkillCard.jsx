const SkillCard = ({ flipType, image, name }) => {
  return (
    <div
      className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
      data-aos={flipType}
    >
      <img src={image} alt={`${image} icon`} className="w-20 mx-auto" />
      <p className="py-4">{name}</p>
    </div>
  );
}

export default SkillCard