import visa from '../images/visa.png';




function CardBack ({cvc}) {
    return (

      <div className="fixed  
      w-84 md:w-84 lg:w-84 xl:w-84 2xl:w-84 

      top-2 md:top-80 lg:top-96 xl:top-96 2xl:top-96            
      left-10 md:left-8 lg:left-24 xl:left-18 2xl:left-72 
      mt-0 lg:mt-10 xl:mt-10 2xl:mt-10
       ml-6 lg:mx-auto 
      pr-2">
          <img src={visa} alt="React Image" className="object-cover " />

          <p className="text-white absolute 
          right-14 
           top-16 mt-2 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 md:top-28 lg:top-28 xl:top-28 2xl:top-28 
          
          font-space-grotesk  text-sm">{cvc}</p>
      </div>
    )
}

export default CardBack

{/* <section className="fixed top-24 md:top-32 right-8 md:left-8 lg:left-14 xl:left-44 2xl:left-72 pl-4 md:pl-0 ">    */}
