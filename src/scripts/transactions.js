
export const trackTransaction = (type)=>{

    let transactionDetails = {

    }

    switch (type){
        case  "sendCoins":
            return (step)=>{
                switch (step){
                    case 1:
                        
                        return "Adding send Coins amount And sender"
                }
            }
        case  "buyCoins":
            return "Buying Coins"
        case  "withdrawCoins":
            return "withdrawing Coins"
    }

}

console.log(trackTransaction("sendCoins")(1))