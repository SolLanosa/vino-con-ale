export default function Bio() {
  return(
      <div className="flex mt-20 items-center max-w-screen-xl m-auto max-md:flex-col max-md:mt-5">
        <div className="w-1/2 max-md:w-full max-md:px-10">
          <img src="/assets/alefoto.jpeg" alt="" className="w-96 m-auto" /> 
        </div>
        <div className="w-1/2 max-md:w-full max-md:p-10">
          <div className="w-4/5 m-auto max-md:w-full">
            <div className="flex items-center max-md:justify-center">
              <h1 className="text-6xl pb-5 max-md:text-center text-[#1f3d69] max-md:text-5xl">QUIEN SOY</h1>
              <img src="/assets/copa.png" alt="" className="w-40 h-32 max-md:hidden"/>
            </div>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas 
              y archivos de texto. Lorem Ipsum ha sido el texto de relleno 
              estándar de las industrias desde el ao 1500, cuando un impresor N. del T. persona que se dedica a la imprenta 
              desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
              quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, 
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software
              de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
  )
}