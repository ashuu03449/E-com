// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";

// Setting up the Poppins font with different font weights and Latin subset
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const AnotherHeroSection = (props:any) => {
  return (
    <div className={`${poppins.className} w-full h-[316px] relative flex flex-col items-center justify-center`}>
      <Image src={'/assets/backgroundimage1.png'} alt="backgroundimage" fill className="object-cover" />
      <Image src={"/assets/logoletter.png"} alt='logo' height={20} width={40}/>
      <p className="text-[48px] font-medium text-black">{props.mainhead}</p>
      <div className='flex gap-2'>
        <p className='font-medium text-[16px]'>{props.homename}</p>
        <Image src={'/assets/greaterarrow.svg'} alt='left arrow' width={8} height={8} />
        <p className='font-light text-[16px]'>{props.currentPage}</p>
      </div>
    </div>
  )
}

export default AnotherHeroSection
