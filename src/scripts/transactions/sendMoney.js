export const sendMoney = {
    //Send money modals
    trigger: ".sendMoneyButton",
    target: "#sendMoneySelectUserModal",
    actions: [
      {
        trigger: ".sendMoneyContinueToReviewTransaction",
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
          },
        ],
      },
    ],
  }