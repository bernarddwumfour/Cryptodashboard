export const addCoins = {
    trigger: ".addCoinsButton",
    target: "#addCoinsModal",
    actions: [
      {
        trigger: ".payWithCard",
        target: "#choosePaymentMethod",
        actions: [
          {
            trigger: ".continueToPayment",
            target: "#reviewTransaction",
            actions: [
              {
                trigger: ".showTransactionErrorButton",
                target: "#showTransactionErrorModal",
              },
              {
                trigger: ".continueToSpinner",
                target: "#spinnerModal",
                actions: [
                  {
                    trigger: ".showTransactionSuccessButton",
                    target: "#showTransactionSuccessModal",
                    actions: [
                      {
                        trigger: ".sendCoinsShowTransactionDetailsButton",
                        target: "#sendCoinsTransactionDetailsModal",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }