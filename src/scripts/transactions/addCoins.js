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
              methods: [
                () => {
                  let successmessage =
                    document.querySelector("#successMessage");
                  successmessage.innerHTML =
                    "🎉 Purchase Successful! 50 Coins have been added to your wallet.";
                },
              ],
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
              methods: [
                () => {
                  let successmessage =
                    document.querySelector("#successMessage");
                  successmessage.innerHTML =
                    "🎉 Purchase Successful! 50 Coins have been added to your wallet.";
                },
              ],
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
