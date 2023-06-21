
import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import bgD from './images/bgD.png';


function Ty ({cvc, cardHolderName, cardNumber, expiryMonth, expiryYear}) {
    return (
        <div className="flex w-screen">
            <section className="w-1/3 relative">
                <div className="h-screen">
                    <img src={bgD} alt="React Image" className="object-cover h-full w-full" />
                </div>
                {/* <div className="sticky">
                    <CardBack className="text-white" cvc={cvc} />
                </div>
         */}
                <div className="sticky mt-10">
                    <CardFront
                        cardHolderName={cardHolderName}
                        cardNumber={cardNumber}
                        expiryMonth={expiryMonth}
                        expiryYear={expiryYear}
                    />
                </div>
            </section>
        
            <section className="w-2/3 flex items-center justify-center border">
                <div className="w-96 items-center justify-center">
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
                    <h1 className="text-2xl grid justify-center my-8">THANK YOU!</h1>
                    <p className="text-zinc-500 grid justify-center mb-10">We've added your card details</p>
                    <button className="rounded-lg bg-purple-900 text-center text-white w-full p-3 mt-2">Continue</button>
                </div>
            </section>
        </div>
    )
}

export default Ty
