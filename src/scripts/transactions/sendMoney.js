export const sendMoney = {
  //Send money modals
  trigger: ".sendMoneyButton",
  target: "#sendMoneySelectUserModal",
  actions: [
    {
      trigger: ".sendMoneyContinueToReviewTransaction",
      target: "#sendMoneyReviewTransaction",
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
                    "🎉 Money Sent! You’ve successfully sent $200.00 to @airj543";
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
    //Select Beneficiary
    {
      trigger: ".selectBeneficiaryButton",
      target: "#selectBeneficiaryModal",
    },
  ],
};
