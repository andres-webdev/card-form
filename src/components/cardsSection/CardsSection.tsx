
export default function CardsSection(){
    return (
        <section 
            className="h-60 w-full bg-black-violet inline-block justify-center" 
            data-testid="cardsSection">
            <figure className="relative w-80 h-96 m-auto -top-20">
                <div className="blur-4xl bg-blue opacity-20 w-56 h-64 absolute bottom-0 left-0"></div>
                <div className="blur-4xl bg-orange opacity-20 w-56 h-64 absolute top-7 right-0"></div>
                <div className="blur-4xl bg-violet opacity-20 w-56 h-64 absolute top-0 right-9"></div>
            </figure>
            
            <picture>
                <img className="" src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1685326419/Cards-form/bg-card-back_puwqt7.png" alt="card-back" />
                <h3>000</h3>
            </picture>
            <picture>
                <img className="" src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1685326419/Cards-form/bg-card-front_ltun30.png" alt="card-front" />
                <div className="">
                    <figure className="">
                        <div data-testid="front-card-logo"></div>
                        <div data-testid="front-small-card-logo"></div>
                    </figure>
                    <h1 className="">0000-0000-0000-0000</h1>
                    <div className="">
                        <h2 className="">ANDRES MARQUEZ</h2>
                        <h2>05/05</h2>
                    </div>
                </div>
            </picture>
        </section>
    )
}