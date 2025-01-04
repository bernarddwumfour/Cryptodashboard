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