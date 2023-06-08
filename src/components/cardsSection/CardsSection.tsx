import { CardData } from "../../types"

interface CardProps {
    cardInfo: CardData
}

export default function CardsSection({ cardInfo }: CardProps){
    return (
        <section 
            className="h-60 w-full bg-black-violet inline-block justify-center m-0 lg:w-width-section-side lg:min-h-screen" 
            data-testid="cardsSection">
            <figure className="relative w-4/5 h-96 m-auto -top-20 lg:w-width-figure-card-section lg:h-height-figure-card-section lg:-left-40 lg:-top-24">
                <div className="blur-4xl bg-blue opacity-20 w-56 h-64 absolute bottom-0 left-0 lg:opacity-10 xl:opacity-20 lg:w-width-oval-card-section lg:h-height-oval-card-section lg:top-oval-blue-card-section-top lg:left-oval-blue-card-section-left lg:rotate-45"></div>
                <div className="blur-4xl bg-orange opacity-20 w-56 h-64 absolute top-7 right-0 lg:opacity-10 xl:opacity-20 lg:w-width-oval-card-section lg:h-height-oval-card-section lg:rotate-45 lg:top-oval-orange-card-section-top"></div>
                <div className="blur-4xl bg-violet opacity-20 w-56 h-64 absolute top-0 right-9 lg:opacity-10 xl:opacity-20 lg:w-width-oval-card-section lg:h-height-oval-card-section lg:rotate-45 lg:left-oval-violet-card-section-left"></div>
            </figure>
            <div className="absolute top-8 right-4 w-small-width-card h-small-height-card lg:w-96 lg:left-12 xl:w-width-card xl:h-auto lg:top-card-back-top xl:left-card-back-left">
                <picture className="w-full relative">
                    <img className="object-cover" src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1685326419/Cards-form/bg-card-back_puwqt7.png" alt="card-back" />
                    <h3 className="absolute top-safe-code-card-top right-safe-code-card-right font-semibold text-9px text-white tracking-widest lg:top-24 lg:right-12 lg:text-xs  xl:top-info-card-back-top xl:right-info-card-back-right xl:text-14px xl:leading-info-card-back">{cardInfo.secureCode || '000'}</h3>
                </picture>
            </div>
            
            <div className="absolute left-4 top-card-distance w-small-width-card h-small-height-card 
            lg:w-96 lg:left-12 xl:w-width-card xl:h-auto lg:top-card-front-top xl:left-card-front-left">
                <picture className="relative w-full h-full">
                    <img className="object-cover" src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1685326419/Cards-form/bg-card-front_ltun30.png" alt="card-front" />
                    <div className="absolute top-0 py-info-card-top px-info-card-left flex flex-col w-full h-full justify-between lg:py-info-card-front-top lg:px-info-card-front-left">
                        <div className="flex items-center space-x-2 lg:space-x-4">
                            <figure 
                            className="w-small-width-card-logo h-small-height-card-logo bg-white rounded-full xl:w-width-card-logo xl:h-height-card-logo"
                            data-testid="front-card-logo"></figure>
                            <figure 
                            className="w-small-width-carg-side-logo h-small-height-carg-side-logo border border-white rounded-full xl:w-width-card-small-logo xl:h-height-card-small-logo"
                            data-testid="front-small-card-logo">
                            </figure>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-6">
                            <h1 className="text-white text-lg tracking-widest font-medium lg:text-2xl xl:text-28px xl: leading-infor-card-front-numbers">{cardInfo.cardNumber || '0000 0000 0000 0000'}</h1>
                            <div className="flex justify-between items-center">
                                <h2 className="text-9px truncate text-white tracking-widest font-light lg:text-14px lg:leading-info-card-back">{cardInfo.cardName || "Jane Appleseed"}</h2>
                                <div>
                                    <span
                                        data-testid="expDateMonth" 
                                        className="text-9px text-white tracking-widest font-light lg:text-14px lg:leading-info-card-back">{`${cardInfo.expiredDateMonth || '09'}/`}
                                    </span>
                                    <span 
                                        data-testid="expDateYear" 
                                        className="text-9px text-white tracking-widest font-light lg:text-14px lg:leading-info-card-back">{cardInfo.expiredDateYear || '00'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </picture>
            </div>
        </section>
    )
}