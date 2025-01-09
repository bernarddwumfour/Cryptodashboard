export const addCoins = {
  trigger: ".addCoinsButton",
  target: "#addCoinsModal",
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
    //Add Credit card
    {
      trigger: ".addCardButton",
      target: "#addCardModal",
    },
  ],
};

export const addCoinsCustom = {
  trigger: ".addCoinsCustomButton",
  target: "#buyCoinsCustomInput",
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
    //Add Credit card
    {
      trigger: ".addCardButton",
      target: "#addCardModal",
    },
  ],
};
