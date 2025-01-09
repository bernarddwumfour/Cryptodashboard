export const withdrawMoney = {
  //withdraw Money modals
  trigger: ".withdrawMoneyButton",
  target: "#withdrawMoneyEnteramount",
  actions: [
    {
      trigger: ".withdrawMoneyContinueToReviewTransaction",
      target: "#withdrawMoneyReviewTransaction",
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
