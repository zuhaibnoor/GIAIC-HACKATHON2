import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
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
      <div className="bg-[#0D0D0D] opacity-90 h-screen w-screen">
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
            <Link href="/Shop" className="hover:text-[#FF9F0D] hidden lg:inline">Shop</Link>
            <Link href="/Contact" className="hover:text-[#FF9F0D] hidden lg:inline">Contact</Link>
          </div>

          {/* Search and Handbag */}
          <div className="flex items-center space-x-5 hidden lg:inline-block">
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
            <p className="font-['cursive'] text-[32px] font-[400] text-[#FF9F0D]">Its Quick & Amusing!</p>
            <div className='text-[60px] font-Helvetica font-[700] tracking-tight  leading-tight'> <div className='inline text-[#FF9F0D]'>Th</div>e Art of speed</div> 
            <p className='text-[60px] font-Helvetica font-[700]  tracking-tight leading-tight'> food quality</p>
            <p className='pt-[2%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Consectetur officiis incidunt earum eaque aliquam hic enim </p>
            <div className='ml-0 mt-5 h-[50px] w-[190px] bg-[#FF9F0D] place-content-center text-center rounded-[30px] text-[16px] font-Inter'>See Menu</div>

          </div>

        </div>

        <div className='basis-1/2 hidden lg:inline'>

            <Image src = "/Image.svg" alt='homepage image' width = {877} height = {670} className='ml-[-15%]'/>
              {/* image here */}
        </div>


        {/*flex container div for iamge and headline+icons*/}    
      </div>  

      </div>   {/* bg - black div*/}
      
      { /* bg image div*/ }
    </div>  
    
    {/* second div start*/}
    <div className='h-screen w-screen bg-[#0D0D0D] p-5 lg:p-20'>

        {/* flex container for second div start*/}
        <div className='flex flex-col lg:flex-row'>
            
            {/* flex item 1 (about us) start */}
            <div className='basis-1/2'>

            <h1 className='font-["cursive"] text-[#FF9F0D] text-[32px]'> About us</h1>
            <div className='text-[#FFFFFF] text-[48px] font-Helvetica leading-tight tracking-tight font-[700]'><div className='text-[#FF9F0D] inline '> We</div> Create the best<br className=''/>foody product</div>
            <div className='pt-4 lg:pr-10 text-justify mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
            
            <ul className='flex flex-col lg:space-y-7'>
              <li> <Image src={"/check.svg"} width={17} height={12} alt='list-style' className='inline pr-2'/> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
              <li> <Image src={"/check.svg"} width={17} height={12} alt='list-style' className='inline pr-2'/>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
              <li> <Image src={"/check.svg"} width={17} height={12} alt='list-style' className='inline pr-2'/> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
              <div className='ml-0 lg:mt-5 h-[50px] w-[190px] bg-[#FF9F0D] place-content-center text-center rounded-[30px] text-[16px] font-Inter'><Link href="/About" className='text-center place-content-center'>Read More</Link></div>
            </ul>

            {/* flex item 1 (about us) end */}
            </div>
            
            
            {/* flex item 2 for images start */}
            <div className='basis-1/2   hidden lg:inline'>
              
              {/* images 1,2 and 3 here start */}
              <div className='grid grid-cols-2 gap-2 '>
                <Image src={"/div2-img1.png"} height={330} width={660} alt="div2-img1.png" className='col-span-2'/>
                <Image src={"/div2-img2.png"} height={330} width={322} alt="div2-img1.png" className=''/>
                <Image src={"/div2-img3.png"} height={330} width={322} alt="div2-img1.png" className='ml-[-8%]'/>

              {/* images 1,2 and 3 here end */}
              </div>
            
            {/* flex item 2 for images end */}
            </div>

        
        {/* flex container for second div end*/}
        </div>       
            

    {/* second div end */}
    </div>

    {/* third div start (choose food items) */}
    <div className='h-screen w-screen bg-[#0D0D0D]'>

      <h1 className='font-["cursive"] text-[#FF9F0D] text-[32px] text-center'> Food Category</h1>
      <div className='text-[#FFFFFF] text-[48px] font-Helvetica leading-tight tracking-tight font-[700] text-center'><div className='text-[#FF9F0D] inline '> Ch</div>oose Food Item</div>
      
      {/* food item images divs start */}
      <div className='grid grid-cols-2 lg:grid-cols-4 p-5 lg:p-20'>

          <Link href="/Menu" className='lg:w-[330px]'><Image src={"/food-item1.png"} height={328} width={330} alt='food-item' className='p-2 lg:p-0 w-[330px]'/></Link>
          <Link href="/About" className='lg:w-[330px]'><Image src={"/food-item2.png"} height={328} width={330} alt='food-item' className='p-2 lg:p-0 w-[330px]'/></Link>
          <Link href="/Menu" className='lg:w-[330px]'><Image src={"/food-item3.png"} height={328} width={330} alt='food-item' className='p-2 lg:p-0 w-[330px]'/></Link>
          <Link href="/Menu" className='lg:w-[330px]'><Image src={"/food-item4.png"} height={328} width={330} alt='food-item' className='p-2 lg:p-0 w-[330px]'/></Link>

      {/* food item images divs end */}
      </div>       

      {/* third div end (choose food items) */} 
    </div>


    {/* fourth div start (why choose us) */}
    <div className='w-screen h-screen bg-[#0D0D0D] flex flex-row p-5 lg:p-20 '>

      {/* images start flex item1*/}
      <div className='basis-1/2'>
            <Image src={"/why-choose.jpg"} width={600} height={400} className='h-[100%] w-[75%] object-cover' alt="img"/>
      </div>
      

      {/* why choose us start flex item2*/}
      <div className='basis-1/2'>
        <h1 className='font-["cursive"] text-[#FF9F0D] text-[32px]'> Why choose us?</h1>                  
        <div className='text-[#FFFFFF] text-[48px] font-Helvetica leading-tight tracking-tight font-[700]'><div className='text-[#FF9F0D] inline '> Ex</div>tra Ordinary Taste <br className='hidden lg: inline md:inline'/>And Experience</div>
        <div className='pt-4 lg:pr-10 text-justify mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
        <div className='w-full border-[1px] flex flex-col lg:flex-row h-[20%]'>
          <div className='flex flex-row '>
              <div className='border-[1px]'></div>
              <div className='border-[1px]'></div>
          </div>
          <div className='flex flex-row'>

          </div>
        </div>
      {/* why choose us end flex item2*/}
      </div>


    {/* fourth div end (why choose us) */}
    </div>
    </>
  );
}
