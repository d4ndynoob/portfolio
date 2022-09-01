import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg';

import GridItem from './GridItem'

const Work = () => {
  return (
    <div name="work" className="w-full md:full text-gray-300 bg-[#0a192f] py-[80px]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridItem image={WorkImg} name="React JS Application" linkDemo="/" linkCode="/"/>
          <GridItem image={RealEstate} name="React JS Application" linkDemo="/" linkCode="/"/>
          <GridItem image={WorkImg} name="React JS Application" linkDemo="/" linkCode="/"/>
          <GridItem image={RealEstate} name="React JS Application" linkDemo="/" linkCode="/"/>
          <GridItem image={WorkImg} name="React JS Application" linkDemo="/" linkCode="/"/>
          <GridItem image={RealEstate} name="React JS Application" linkDemo="/" linkCode="/"/>        
        </div>
      </div>
    </div>
  );
}

export default Work