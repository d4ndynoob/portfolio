const SocialIcon = ({ bgColor, icon, name }) => {
  return (
    <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 ${bgColor}`}>
      <a href="/" className="flex justify-between items-center w-full text-gray-300" >
        {name} {icon}
      </a>
    </li>
  );
}

export default SocialIcon