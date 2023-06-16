import React from 'react';
import './App.css';
import CardBack from './components/CardBack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CardFront from './components/CardFront';
import Ty from './Ty';
import { useState } from 'react';






  
  const validationSchema = Yup.object().shape({

   


    cardHolderName: Yup.string()
    .label('Name on card')
    .required("Holder's Card Name is required"),


    cardNumber: Yup.string()
    .label('Card number')
    .matches(/^\d+$/, {
      message: 'Card number must contain only numbers',
      excludeEmptyString: true,
    })
    .max(16)
    .required('Card number is required'),


    cvc: Yup.string()
      .label('CVC')
      .matches(/^\d+$/, {
        message: "Can't be blank",
        excludeEmptyString: true,
      })
      .min(3)
      .max(4)
      .required("Can't be blank"),



    expiryMonth: Yup.string()
      .label('Expiry month')
      .min(2)
      .max(2)
      .required("Can't be blaeeeeeeenk"),




    expiryYear: Yup.string()
      .label('Expiry year')
      .min(2)
      .max(2)
      .required("Can't be blank"),
  });


  const App = () => {

    const [showTy, setShowTy] = useState(false);
   
    
const handleClick = () => {
  setShowTy(true);
};

  const { handleSubmit, watch, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const cardHolderName = watch('cardHolderName', 'JANE APPLESSED');
  const cardNumber = watch('cardNumber', '0000 0000 0000 0000');
  const expiryMonth = watch('expiryMonth', '00');
  const expiryYear = watch('expiryYear', '00');
  const cvc = watch('cvc', '000');


  
  const onSubmitHandler = (data) => {
    console.log({ data });
    handleClick();
  };



  if (showTy) {
    return <Ty cvc={cvc} cardHolderName={cardHolderName} cardNumber={cardNumber} expiryMonth={expiryMonth}  expiryYear={expiryYear} />;
  }

  return (
    <div className=" md:flex md:w-screen">
      <section className=" md:w-1/3 md:relative">


        <div className=" md:h-screen">
          <img src="./src/images/bgD.png" alt="React Image" className="hidden md:block object-cover absolute h-full w-full" />
        </div>

        <div className="w-full">
          <img src="./src/images/bgM.png" alt="React Image" className="block md:hidden object-cover h-full w-full" />
        </div>

        
        <div className="fixed">
          <CardBack className="text-white" cvc={cvc}/>
        </div>

        <div className="fixed">
          <CardFront className="text-white" cardHolderName={cardHolderName} cardNumber={cardNumber} expiryMonth={expiryMonth}  expiryYear={expiryYear}/>
        </div>

      </section>


{/* FORM */}
      <section className="mx-10 md:mx-0 md:w-2/3 flex mt-10 md:mt-0 items-center justify-center">
        <div className="w-96">


          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <p className="mb-1 text-xs font-space-grotesk">CARDHOLDER NAME</p>
            <input
              className="border border-zinc-200 text-zinc-100 font-space-grotesk rounded-lg pl-4 p-2 mb-4 w-full outline-purple-800"
              placeholder="e.g. Jane Appleseed"
              name="cardHolderName"
              {...register('cardHolderName', { required: true })}/>
               {errors.cardHolderName && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cardHolderName.message}</span>
            )}
              
            

              <p className="mt-4 mb-1 text-xs font-space-grotesk">CARD NUMBER</p>
            <input
              className="border border-zinc-200 text-zinc-100 font-space-grotesk  rounded-lg pl-4  p-2 mb-4 w-full outline-purple-800"
              placeholder='e.g. 1234 5678 9123 0000'
              name="cardNumber"
              {...register('cardNumber', { required: true })}
            />
            {errors.cardNumber && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cardNumber.message}</span>
            )}





            <div className="mt-4 mb-1 flex text-xs font-space-grotesk justify-between">
              <div>
                <p className='mb-2'>EXP. DATE (MM/YY)</p>
                <input
                  className="border border-zinc-200 font-space-grotesk rounded-lg p-3 mb-4 w-16 md:w-20 text-center mr-4 outline-purple-800"
                  placeholder="MM"
                  name="expiryMonth"
                  {...register('expiryMonth', { required: true })}
                />
                {errors.cvc && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.expiryMonth.message}</span>
            )}




                <input
                  className="border border-zinc-200  rounded-lg p-3 mb-4 w-16 md:w-20 text-center outline-purple-800"
                  placeholder="YY"
                  name="expiryYear"
                  {...register('expiryYear', { required: true })}
                />
                {errors.expiryYear && (
              <span className="text-xs text-red-600 flex font-space-grotesk">{errors.expiryYear.message}</span>
            )}



              </div>

              <div>
                <p className='mb-2'>CVC</p>
                <input
                  className="border border-zinc-200  text- rounded-lg p-3  mb-2 w-32 md:w-full text-start outline-purple-800"
                  placeholder="e.g. 123"
                  name="cvc"
                  {...register('cvc', { required: true })}
                /> 
                {errors.cvc && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cvc.message}</span>
            )}
                
              </div>
            </div> 

            <button type="submit" className="rounded-lg bg-purple-900 text-center text-white w-full p-3 mt-2" >
              Confirm
            </button>
          </form>
        </div>
      </section>

      {/* FORM */}
    </div>
  );
};

export default App;
