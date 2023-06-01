
interface FormProps {
    showCongratsSection: () => void
}

export default function FormSection({showCongratsSection}: FormProps){

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        showCongratsSection()
    }

    return (
        <section 
            className="mt-margin-form-top mx-6 lg:w-96 lg:mr-auto lg:ml-auto lg:mt-form-section-margin-top"
            data-testid="formSection">
            <form 
                className="w-full"
                role="form" 
                onSubmit={handleSubmit}>
                <label htmlFor="cardName" className="mb-5 w-full inline-block">
                    <span
                        className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                    >CARDHOLDER NAME</span>
                    <input 
                        className="w-full border border-input-border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text"
                        type="text"
                        id="cardName"
                        name="cardName"
                        placeholder="e.g. Jane Appleseed" />
                </label>
                <label htmlFor="cardNumber" className="mb-5 w-full inline-block">
                    <span
                        className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                    >CARD NUMBER</span>
                    <input 
                        className="w-full border border-input-border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                </label>
                <div className="flex mb-7">
                    <label htmlFor="expiredDate" className="flex flex-col">
                        <span
                            className=" text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                        >EXP. DATE (MM/YY)</span>
                        <div className="flex gap-2">
                            <input 
                                className="w-72px border border-input-border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text"
                                id="expiredDate"
                                name="expiredDateMonth"
                                placeholder="MM"
                                type="number" 
                                maxLength={2}
                            />
                            <input 
                                className="w-72px border border-input-border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text mr-3"
                                name="expiredDateYear"
                                placeholder="YY"
                                type="number"
                                maxLength={2}
                            />
                        </div>
                    </label>
                    <label htmlFor="secureCode" className="flex flex-col">
                        <span
                            className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                        >CVC</span>
                        <input 
                            className="w-full border border-input-border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text"
                            id="secureCode"
                            name="secureCode"
                            placeholder="e.g. 123"
                            type="number"
                            maxLength={3}
                        />
                    </label>
                </div>
                <button
                    className="bg-black-violet w-full rounded-lg h-small-height-button text-white tracking-wider text-18px leading-movil-input-text"
                >Confirm</button>
            </form>
        </section>
    )
}