
interface FormProps {
    showCongratsSection: () => void
}

export default function FormSection({showCongratsSection}: FormProps){

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        showCongratsSection()
    }

    return (
        <section data-testid="formSection">
            <form role="form" onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <button>Confirm</button>
            </form>
        </section>
    )
}