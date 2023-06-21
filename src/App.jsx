import React from 'react';
import './App.css';
import CardBack from './components/CardBack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CardFront from './components/CardFront';
import Ty from './Ty';
import { useState } from 'react';
import Form from './components/Form';
import bgD from './images/bgD.png';
import bgM from './images/bgM.png';


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
    <div className="md:flex md:w-screen">
      <section className=" md:w-1/3 md:relative">


        <div className=" md:h-screen">
        <img src={bgD} alt="React Image" className="hidden md:block object-cover absolute h-full w-full" />
        </div>

        <div className="w-full">
        <img src={bgM} alt="React Image" className="block md:hidden object-cover h-full w-full" />
        </div>

       
        <div className="md:hidden relative flex  flex-col justify-cente">
            <CardBack className="text-white" cardHolderName={cardHolderName} cardNumber={cardNumber} expiryMonth={expiryMonth}  expiryYear={expiryYear}/>
          </div>

          <div className="relative flex  flex-col justify-center">
            <CardFront className="text-white" cardHolderName={cardHolderName} cardNumber={cardNumber} expiryMonth={expiryMonth}  expiryYear={expiryYear} cvc={cvc}/>
          </div>
       

      </section>

      <Form handleSubmit={handleSubmit} errors={errors} register={register} onSubmitHandler={onSubmitHandler} />

    </div>
  );
};

export default App;
