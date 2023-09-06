import Link from "next/link";

export default function Hero(){
    return (
        <div className="w-full h-screen flex max-md:flex-col max-md:h-min">
            <div className="w-full h-screen flex items-center justify-center bg-[#1f3d69]">
                <img src="/assets/vinoconale.png" alt="logo" className="w-4/6 max-lg:w-full" />
            </div>
            <div className="w-full flex items-center justify-center bg-[#ece7e4] max-md:h-screen ">
                <div className="max-w-lg m-auto flex flex-col px-6">
                    <div className="mb-6 relative w-full">
                        <Link href={"/components/bio"} className="absolute inset-0 h-full w-full text-base font-medium text-[#1f3d69] slide-in-right">BIO</Link>
                        <p className="font-extralight pt-6 slide-in-right w-full">Vino con Ale, mucho mas que una marca.</p>
                    </div>
                    <div className="mb-6 relative w-full">
                        <Link href={"/components/what"} className="absolute inset-0 h-full w-full text-base font-medium text-[#1f3d69] slide-in-right">QUE HAGO?</Link>
                        <p className="font-extralight pt-6 slide-in-right w-full">Conoce mas acerca de mi trabajo.</p>
                    </div>
                    <div className="mb-6 relative w-full">
                        <Link href={"/components/tips"} className="absolute inset-0 h-full w-full text-base font-medium text-[#1f3d69] slide-in-right">INFORMACION UTIL - ALE TIPS</Link>
                        <p className="font-extralight pt-6 slide-in-right w-full">Queres saber mas sobre?</p>
                    </div>
                    <div className="mb-6 relative w-full">
                        <Link href={"/components/bio"} className="absolute inset-0 h-full w-full text-base font-medium text-[#1f3d69] slide-in-right">CONTACTO</Link>
                        <p className="font-extralight pt-6 slide-in-right w-full">Contactame para catas privadas, gestionar tu cava y muchas cosas mas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}