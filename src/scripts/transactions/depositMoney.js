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
              methods: [
                () => {
                  let successmessage =
                    document.querySelector("#successMessage");
                  successmessage.innerHTML =
                    "🎉 Deposit Successful! $200.00 has been added to your Money Wallet.";
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
