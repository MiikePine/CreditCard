import Ty from "../Ty"

function CardFront ({cardHolderName, cardNumber, expiryMonth, expiryYear}) {
    return (

        <div className="fixed grid [grid-template-areas:'stack'] top-32 left-2 md:left-44">
                <img src="./src/images/visaF.png" alt="React Image" className="object-cover " />
                <p className="text-white absolute bottom-6 ml-8 font-space-grotesk text-sm">{cardHolderName}</p>
                <p className="text-white absolute bottom-20 ml-8 font-space-grotesk text-2xl">{cardNumber}</p>
                <p className="text-white absolute bottom-6 right-12 font-space-grotesk text-sm">{expiryMonth} / </p>
                <p className="text-white absolute bottom-6 right-6 font-space-grotesk text-sm"> {expiryYear}</p>


        </div>
    )
}

export default CardFront