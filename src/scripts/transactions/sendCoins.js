export const sendCoins = {
  //Send Coins modals
  trigger: ".sendCoinsButton",
  target: "#sendCoinsSelectUserModal",
  actions: [
    {
      trigger: ".sendCoinsContinueToReviewTransaction",
      target: "#sendCoinsReviewTransaction",
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
          methods: [() => alert("clicked")],
        },
      ],
    },
    //Select Beneficiary
    {
      trigger: ".selectBeneficiaryButton",
      target: "#selectBeneficiaryModal",
    },
  ],
};
