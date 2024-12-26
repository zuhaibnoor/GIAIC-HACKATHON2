import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (  
    
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/home-bg.jpeg')"}}
        >
          <div className="bg-[#0D0D0D] opacity-90 h-full pt-5">
          {/* Navigation */}
          {/* <nav className="w-4/5 border m-auto h-[10vh]">
            <div className="text-base font-Helvetica font-bold text-center">
              
              
              <div className="text-[#FF9F0D] inline">Food</div>
              <div className="text-[#FFFFFF] inline">tuck</div>
              <br />         
            </div>
            
            <div className="font-Inter text-[#FFFFFF] font-[400] text-[16px] inline w-full border">
              <Link href = "/" className="m-5">Home</Link>
              <Link href = "/Menu" className="m-5">Menu</Link>
              <Link href = "/Blog" className="m-5">Blog</Link>
              <Link href = "/Pages" className="m-5">Pages</Link>
              <Link href = "/About" className="m-5">About</Link>
              <Link href = "/Shop" className="m-5">Shop</Link>
              <Link href = "/Contact" className="m-5">Contact</Link>      

            </div>

            <div className="border-[1px] border-[#FF9F0D] rounded-full inline p-3">
              
                <input type="text" placeholder="Search..." className="bg-transparent" />  
                <Image 
                src = "/vector.svg"
                width = {24}
                height = {24}              
                alt = "search"
                className='inline'
                />                

            </div>

            <Image 
            src={"/Handbag.svg"}
            width={24}
            height={24}
            alt="handbag"
            className='inline'
            />

          </nav> */}
          
          <nav className="w-4/5 border m-auto h-[10vh] flex items-center justify-between">
  {/* Logo Section */}
  <div className="text-base font-Helvetica font-bold">
    <div className="text-[#FF9F0D] inline">Food</div>
    <div className="text-[#FFFFFF] inline">tuck</div>
  </div>

  {/* Links Section */}
  <div className="font-Inter text-[#FFFFFF] font-[400] text-[16px] flex space-x-5">
    <Link href="/" className="hover:text-[#FF9F0D] ">Home</Link>
    <Link href="/Menu" className="hover:text-[#FF9F0D]">Menu</Link>
    <Link href="/Blog" className="hover:text-[#FF9F0D]">Blog</Link>
    <Link href="/Pages" className="hover:text-[#FF9F0D]">Pages</Link>
    <Link href="/About" className="hover:text-[#FF9F0D]">About</Link>
    <Link href="/Shop" className="hover:text-[#FF9F0D]">Shop</Link>
    <Link href="/Contact" className="hover:text-[#FF9F0D]">Contact</Link>
  </div>

  {/* Search and Handbag Section */}
  <div className="flex items-center space-x-5">
    <div className="border-[1px] border-[#FF9F0D] rounded-full p-3 flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-white outline-none placeholder-gray-400"
      />
      <Image
        src="/vector.svg"
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




        </div>
        </div>
    
  )
}
