interface CongratsProps{
    showFormSection: () => void
}

export default function CongratsSection({showFormSection}: CongratsProps){

    const handleClick = () => {
        showFormSection()
    }

    return (
        <section data-testid="congratsSection" className=" mt-margin-form-top mx-6 flex flex-col justify-center text-center lg:mx-auto lg:mt-form-section-margin-top mb-auto lg:w-width-congrats-section">
            <picture className="mx-auto mb-small-margin-check-logo">
                <img src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1685326419/Cards-form/icon-complete_cv03ql.svg" alt="conmfirm-img" />
            </picture>
            <h4 
                className="text-black-violet text-28px leading-9 mb-4 tracking-widest"
            >THANK YOU!</h4>
            <h5 className=" text-dark-violet text-18px leading-movil-input-text mb-12 tracking-wide">We've added your card details</h5>
            <button 
                className="bg-black-violet w-full rounded-lg h-small-height-button text-white tracking-wider text-18px leading-movil-input-text mb-6"
            >Continue</button>
            <button 
                className="tracking-wider text-base text-dark-violet"
                onClick={handleClick} 
                data-testid="backBtn"
            >Back</button>
        </section>
    )
}