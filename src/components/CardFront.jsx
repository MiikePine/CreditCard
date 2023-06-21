import Ty from "../Ty"
import visa from '../images/visa.png';
import visaF from '../images/visaF.png';



function CardFront ({cardHolderName, cardNumber, expiryMonth, expiryYear, cvc}) {
    return (

        <section className="fixed top-24 md:top-32 right-8 md:left-8 lg:left-14 xl:left-44 2xl:left-72 pl-4 md:pl-0 ">   
                <div className="text-sm md:text-base">
                        <img src={visaF}  alt="React Image" className="object-cover " />
                        <svg className="absolute top-4 left-8  md:top-10 md:left-8 " width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>                
                        <p className="text-white absolute bottom-6 md:top-48 ml-8  font-space-grotesk text-xs md:text-sm">{cardHolderName}</p>
                        <p className="text-white absolute bottom-16 md:top-32 ml-8 font-space-grotesk text-lg md:text-2xl">{cardNumber}</p>
                        <p className="text-white absolute bottom-6 md:top-48 right-10 ml-0 md:ml-28 md:left-64 font-space-grotesk text-xs md:text-sm">{expiryMonth}  / </p>
                        <p className="text-white absolute bottom-6 md:top-48 right-6 ml-0 md:ml-20 md:left-80 font-space-grotesk text-xs md:text-sm"> {expiryYear}</p>
                </div>


                <div className=" hidden md:block ml-24 mt-8">
                    <img src={visa} alt="React Image" className="object-cover" />
                    <p className="text-white absolute right-14 top-28 font-space-grotesk text-sm">{cvc}</p>
                 </div>


        
        </section>
    )
}

export default CardFront