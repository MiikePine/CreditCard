import visa from '../images/visa.png';



function CardBack ({cvc}) {
    return (

      <div className="fixed grid w-84 top-2 left-24 pr-2">
          <img src={visa} alt="React Image" className="object-cover " />

          <p className="text-white absolute right-14 top-28 font-space-grotesk text-sm">{cvc}</p>
      </div>
    )
}

export default CardBack