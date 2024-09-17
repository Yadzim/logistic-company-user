import React, { } from 'react';

type PageHeaderPropType = {
  title: string
  description: string
  tag: string
  img?: { src: string }
}


const PageHeader: React.FC<PageHeaderPropType> = ({ title, description, tag, img }): JSX.Element => {
  // const ref: any = useRef();

  // useEffect(() => {
  //   if(ref?.current){
  //     ref.current.style.backgroundImage = `linear-gradient(to top right, #3b82f6), url(${img})`
  //   }
  // }, [img]);

  return (
    // <div className="h-screen bg-gradient-to-tr from-blue-500 flex items-end p-12 text-white" ref={ref}>
    <div className="h-screen- h-64 bg-no-repeat bg-cover flex items-end p-6 md:p-12 text-white" style={{ backgroundImage: `linear-gradient(35deg, #000C20, rgba(255, 255, 255, 0)), url(${img?.src})` }}>
      <div className="flex flex-col gap-3 lg:w-[75%] xl:w-1/2">
        <div className="w-max d-f gap-2 rounded-full py-1 px-4 text-sm bg-[#1b3659c3]"><div className="w-2 h-2 bg-main rounded-full"></div> home / {tag}</div>
        <h1 className='text-4xl md:text-5xl font-extrabold my-1 max-md:mt-2  md:my-3 line-clamp-3' >{title}</h1>
        <p className='text-md line-clamp-2' >{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;