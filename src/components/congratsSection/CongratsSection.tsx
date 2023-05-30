interface CongratsProps{
    showFormSection: () => void
}

export default function CongratsSection({showFormSection}: CongratsProps){

    const handleClick = () => {
        showFormSection()
    }

    return (
        <section data-testid="congratsSection">
            <picture>
                <img src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1685326419/Cards-form/icon-complete_cv03ql.svg" alt="conmfirm-img" />
            </picture>
            <h4>THANK YOU!</h4>
            <h5>We've added your card details</h5>
            <button>Continue</button>
            <button onClick={handleClick} data-testid="backBtn">Back</button>
        </section>
    )
}