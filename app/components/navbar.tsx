import Image from "next/image";

export default function Navbar( ){
    return (
        <div>

            <div className="flex justify-between p-9">
            <Image
          className="h-[100px] w-[300px]"
          src="/chillguy1 (2).png"
          alt="Next.js logo"
          width={180}
          height={10}
          
        />

        <Image
          className="h-[130px] w-[150px]"
          src="/chillguy1 (1).png"
          alt="Next.js logo"
          width={180}
          height={10}
          
        />
            </div>

        </div>
    )
}