type ErrorMessage = {
    message: string
}

export default function ErrorMessage({message}: ErrorMessage){
    return (
        <span
            className='text-inpur-error text-xs ml-2'
        >{message}</span>
    )
}