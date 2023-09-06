'use client'
import { Radial } from 'grommet-icons'
import { Sora } from 'next/font/google'

const sora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
})

export default function TipSection() {
    return(
        <div className={`${sora.variable} font-sora`}>
            <div className="bg-[url('/assets/cata.jpg')] w-full h-[95vh] object-cover bg-no-repeat bg-cover text-white bg-center">
                <div className='flex flex-col justify-center h-full max-w-7xl text-5xl pl-11 text-[#1f3d69] font-bold pr-11 max-md:justify-end max-md:pb-[150px] max-md:text-4xl slide-in-right'>
                        INFORMACIÓN UTIL
                    <hr className='color-white h-2 w-[90px]'/>
                </div>
            </div>
            <div className="flex flex-col max-w-screen-xl m-auto py-20 px-10">
            <div>
                <div className="flex items-center"><span className="text-2xl border-r-2 border-[#7e7da7] text-center w-11 py-2 bg-[#efe5e573]">1</span><p className="text-xl pl-2">Como descorchar un vino</p></div>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className='m-auto mt-10'>
                <Radial className='ml-5' color='#533661' size='small'/>
                <Radial className='ml-5' color='#8e2540' size='small'/>
                <Radial className='ml-5' color='#cb6e85' size='small'/>
            </div>
            <div className="mt-10">
                <div className="flex items-center"><span className="text-2xl border-r-2 border-[#533661] text-center w-11 py-2 bg-[#efe5e573]">2</span><p className="text-xl pl-2">Temperatura del vino</p></div>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className='m-auto mt-10'>
                <Radial className='ml-5' color='#8e2540' size='small'/>
                <Radial className='ml-5' color='#533661' size='small'/>
                <Radial className='ml-5' color='#cb6e85' size='small'/>
            </div>
            <div className="mt-10">
                <div className="flex items-center"><span className="text-2xl border-r-2 border-[#cb6e85] text-center w-11 py-2 bg-[#efe5e573]">3</span><p className="text-xl pl-2">Como elegir la copa</p></div>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className='m-auto mt-10'>
                <Radial className='ml-5' color='#cb6e85' size='small'/>
                <Radial className='ml-5' color='#8e2540' size='small'/>
                <Radial className='ml-5' color='#533661' size='small'/> 
            </div>
            <div className="mt-10">
                <div className="flex items-center"><span className="text-2xl border-r-2 border-[#8e2540] text-center w-11 py-2 bg-[#efe5e573]">4</span><p className="text-xl pl-2">Maridaje</p></div>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            </div>
        </div>
    )
}

