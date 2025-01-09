export const depositeMoney = {
  //Deposite money
  trigger: ".depositeMoneyButton",
  target: "#depositeMoneyEnterAmount",
  actions: [
    {
      trigger: ".depositeMoneyContinueToReviewTransaction",
      target: "#depositeMoneyReviewTransaction",
      actions: [
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
