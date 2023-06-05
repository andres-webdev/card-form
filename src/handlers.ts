export function cardNumberSpaces(cardNumber: string){

    return cardNumber.split(" ").join("").split("").map((elem, index) => {
        if(index === 3){
          return `${elem} `
        } else if(index === 7){
           return `${elem} `
        } else if(index === 11){
           return `${elem} `
        } else {
          return elem
        }
      }).join("")
}