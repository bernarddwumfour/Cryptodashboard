export const withdrawCoins = {
  //Withdraw coins Modals
  trigger: ".withdrawCoinsButton",
  target: "#withdrawCoinsEnterAmount",
  actions: [
    {
      trigger: ".withdrawCoinsContinueToReviewTransaction",
      target: "#withdrawCoinsReviewTransaction",
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
                    "🎉 Withdrawal Successful! 200 coins ($20) has been added to your Money Wallet.";
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
  ],
};
