

function CardBack ({cvc}) {
    return (

      <div className="fixed grid [grid-template-areas:'stack']  bottom-10 md:bottom-40 top-6 md:top-96 left-10 md:left-64">
          <img src="./src/images/visa.png" alt="React Image" className="object-cover " />
          <p className="text-white absolute right-14 top-28 font-space-grotesk text-sm">{cvc}</p>
      </div>
    )
}

export default CardBack