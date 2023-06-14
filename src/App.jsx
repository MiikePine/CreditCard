import React from 'react';
import './App.css';
import CardBack from './components/CardBack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CardFront from './components/CardFront';
import  { useState } from 'react';


const App = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  
  
  const validationSchema = Yup.object().shape({

   




    cardHolder: Yup.string()
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
        message: 'CVC must contain only numbers',
        excludeEmptyString: true,
      })
      .min(3)
      .max(4)
      .required("CVC number is required"),



    expiryMonth: Yup.string()
      .label('Expiry month')
      .min(2)
      .max(2)
      .required("Can't be blank"),




    expiryYear: Yup.string()
      .label('Expiry year')
      .min(4)
      .max(4)
      .required("Can't be blank"),
  });

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-screen">
      <section className="w-1/3 relative">
        <div className="h-screen">
          <img src="./src/images/bgM.png" alt="React Image" className="object-cover h-full w-full" />
        </div>
        <div className="fixed">
          <CardBack />
        </div>

        <div className="sticky mt-10">
          <CardFront className="text-white" cardHolderName={cardHolderName}/>
        </div>

      </section>


{/* FORM */}
      <section className="w-2/3 flex items-center justify-center">
        <div className="w-96">


          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-1 text-xs font-space-grotesk">CARDHOLDER NAME</p>
            <input
              className="border border-purple-700 rounded-lg p-2 mb-4 w-full outline-purple-800"
              placeholder="Card's Name"
              name="cardHolderName"
              onChange={(e) => setCardHolderName(e.target.value)}
              {...register('cardHolder', { required: true })}/>
               {errors.cardHolder && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cardHolder.message}</span>
            )}
              
            

              <p className="mt-4 mb-1 text-xs font-space-grotesk">CARD NUMBER</p>
            <input
              className="border border-purple-700  rounded-lg p-2 mb-4 w-full outline-purple-800"
              placeholder='Card Number'
              name="cardNumber"
              {...register('cardNumber')}
            />
            {errors.cardNumber && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cardNumber.message}</span>
            )}





            <div className="mt-4 mb-1 flex text-xs font-space-grotesk">
              <div>
                <p>EXP. DATE (MM/YY)</p>
                <input
                  className="border border-purple-700  rounded-lg p-3 mb-4 w-20 text-center mr-2 outline-purple-800"
                  placeholder="MM"
                  name="expiryMonth"
                  {...register('MM')}
                />
                {errors.cvc && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.expiryMonth.message}</span>
            )}




                <input
                  className="border border-purple-700 rounded-lg p-3 mb-4 w-20 text-center outline-purple-800"
                  placeholder="YY"
                  name="expiryYear"
                  {...register('YY')}
                />
                {errors.cvc && (
              <span className="text-xs text-red-600 flex font-space-grotesk">{errors.expiryYear.message}</span>
            )}



              </div>

              <div>
                <p>CVC</p>
                <input
                  className="border border-purple-700 ml-4 rounded-lg p-3 px-4 mb-2 w-full text-start outline-purple-800"
                  placeholder="e.g. 123"
                  name="cvc"
                  {...register('CVC')}
                /> 
                {errors.cvc && (
              <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cvc.message}</span>
            )}
                
              </div>
            </div> 

            <button type="submit" className="rounded-lg bg-purple-900 text-center text-white w-full p-3 mt-2">
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
