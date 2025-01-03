import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/home-bg.jpeg')", 
        backgroundSize: "cover", // Ensures the image covers the screen
        backgroundPosition: "center", // Keeps the focal point centered
        backgroundRepeat: "no-repeat", // Prevents tiling of the image
      }}
    >
      {/* Black overlay */}
      <div className="bg-[#0D0D0D] opacity-90 h-full w-screen">
        {/* Title */}
        <div className="text-base font-Helvetica font-bold mx-auto w-max pt-5">
          <div className="text-[#FF9F0D] inline">Food</div>
          <div className="text-[#FFFFFF] inline">tuck</div>
        </div>

        {/* Navbar */}
        <nav className="w-4/5 m-auto h-[10vh] flex items-center justify-between">
          {/* Logo */}
          
          {/* <div className="text-base font-Helvetica font-bold">
            <div className="text-[#FF9F0D] inline">Food</div>
            <div className="text-[#FFFFFF] inline">tuck</div>
          </div> */}

          {/* Links */}
          <div className="font-Inter text-[#FFFFFF] font-[400] text-[16px] flex space-x-5">
            <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
            <Link href="/Menu" className="hover:text-[#FF9F0D]">Menu</Link>
            <Link href="/Blog" className="hover:text-[#FF9F0D]">Blog</Link>
            <Link href="/Pages" className="hover:text-[#FF9F0D]">Pages</Link>
            <Link href="/About" className="hover:text-[#FF9F0D]">About</Link>
            <Link href="/Shop" className="hover:text-[#FF9F0D]">Shop</Link>
            <Link href="/Contact" className="hover:text-[#FF9F0D]">Contact</Link>
          </div>

          {/* Search and Handbag */}
          <div className="flex items-center space-x-5">
            <div className="border-[1px] border-[#FF9F0D] rounded-full p-3 flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white outline-none placeholder-gray-400"
              />
              <Image
                src="/Vector.svg"
                width={24}
                height={24}
                alt="search"
                className="inline ml-2"
              />
            </div>
            <Image
              src="/Handbag.svg"
              width={24}
              height={24}
              alt="handbag"
              className="inline"
            />
          </div>
        </nav>
        
        {/* social media icons and the image  */}
      <div className='flex lg:flex-row flex-col h-[90%] pt-[2%] '>

        <div className='basis-1/2 pb-[20%] pl-[5%] flex flex-row'>
            
          <div className=''>

            <div className='w-[1px] h-[35%] border-x-[1px] border-r-0'></div>
              <div className='flex flex-col space-y-10 mt-10 mb-10'>
                  <Link href="https://google.com"><Image src="/fblogo.svg" alt="fb-logo" width={10} height={10}/></Link>
                  <Link href="https://google.com"><Image src="/twitter-logo.svg" alt="fb-logo" width={12} height={12}/></Link>
                  <Link href="https://google.com"><Image src="/pinterest-logo.svg" alt="fb-logo" width={12} height={12}/></Link>
              </div>
            <div className='w-[1px] h-[35%] border-x-[1px] border-r-0'></div>
          
          </div>

          <div className='pl-[5%] pt-[5%]'>
            <p className="font-['greatVibes'] font-['cursive'] text-[32px] font-[400] text-[#FF9F0D]">Its Quick & Amusing!</p>
            <p className='text-[60px] font-Helvetica font-[700]'> <div className='inline text-[#FF9F0D]'>Th</div>e Art of speed</p>
            <p className='text-[60px] font-Helvetica font-[700]'> food quality</p>
            <p className='pt-[2%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Consectetur officiis incidunt earum eaque aliquam hic enim </p>
            <div className='ml-0 mt-5 h-[50px] w-[190px] bg-[#FF9F0D] place-content-center text-center rounded-[30px] text-[16px] font-Inter'>See Menu</div>

          </div>

        </div>

        <div className='border-[1px] basis-1/2'>
              {/* image here */}
        </div>


        {/*flex container div for iamge and headline+icons*/}    
      </div>  

      </div>   {/* bg - black div*/}
      
      { /* bg image div*/ }
    </div>  
  );
}
