


function Form({ handleSubmit, errors, register, onSubmitHandler }) {
    return (

<section className="mx-10 md:mx-0 md:w-2/3 flex mt-20 md:mt-0 items-center justify-center">
<div className="w-96">


  <form onSubmit={handleSubmit(onSubmitHandler)}>
    <p className="mb-1 text-xs font-space-grotesk">CARDHOLDER NAME</p>
    <input
      className="border border-zinc-200 text-zinc-900 font-space-grotesk rounded-lg pl-4 p-2 mb-4 w-full outline-purple-800"
      placeholder="e.g. Miike Piine"
      name="cardHolderName"
      {...register('cardHolderName', { required: true })}/>
       {errors.cardHolderName && (
      <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.cardHolderName.message}</span>
    )}
      
    

      <p className="mt-4 mb-1 text-xs font-space-grotesk">CARD NUMBER</p>
    <input
      className="border border-zinc-200 text-zinc-900 font-space-grotesk  rounded-lg pl-4  p-2 mb-4 w-full outline-purple-800"
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
          className="border border-zinc-200 text-zinc-900 font-space-grotesk rounded-lg p-3 mb-4 w-16 md:w-20 text-center mr-4 outline-purple-800"
          placeholder="MM"
          name="expiryMonth"
          {...register('expiryMonth', { required: true })}
        />
        {errors.cvc && (
      <span className="text-xs text-red text-red-600 flex font-space-grotesk">{errors.expiryMonth.message}</span>
    )}




        <input
          className="border border-zinc-200 text-zinc-900  rounded-lg p-3 mb-4 w-16 md:w-20 text-center outline-purple-800"
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
          className="border border-zinc-200  text-zinc-900 rounded-lg p-3  mb-2 w-32 md:w-full text-start outline-purple-800"
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

)
}

export default Form 