
import CardBack from "./CardBack"
import CardFront from "./CardFront"
import bgD from '../images/bgD.png';
import bgM from '../images/bgM.png';




function Ty ({cvc, cardHolderName, cardNumber, expiryMonth, expiryYear}) {
    return (
        <div className=" grid md:flex w-screen">
            <section className="w-full md:w-1/3 md:relative -z-50">
                <div className=" md:h-screen">
                        <img src={bgD} alt="React Image" className="hidden md:block object-cover absolute h-full w-full" />
                </div>

                <div className="w-full">
                        <img src={bgM} alt="React Image" className="block md:hidden object-cover h-full w-full" />
                </div>

               <div>
                <div className="relative flex  flex-col justify-center z-10">
                    <CardFront className="z-10"
                        cardHolderName={cardHolderName}
                        cardNumber={cardNumber}
                        expiryMonth={expiryMonth}
                        expiryYear={expiryYear}
                    />
                    </div>
                    
                    <div className="">
                    <CardBack className="z-50"
                         cvc={cvc}
                    />
                    </div>



                </div>
            </section>
        
            <section className="
            mt-24 md:mt-0 lg:mt-10 xl:mt-10 2xl:mt-10 
            w-full md:w-2/3            md:flex items-center justify-center">
                <div className=" grid w-full items-center justify-center">
                    <div className="grid justify-center">
                        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="url(#a)"/>
                            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
                            <defs>
                                <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6348FE"/>
                                    <stop offset="1" stop-color="#610595"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div> 
                    <h1 className="  text-2xl grid justify-center my-8">THANK YOU!</h1>
                    <p className="text-zinc-500 grid justify-center mb-10">We've added your card details</p>
                    <button className="rounded-lg bg-purple-900 text-center text-white w-full p-3 mt-2">Continue</button>
                </div>
            </section>
        </div>
    )
}

export default Ty
