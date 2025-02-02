import {
  getTransactionDetails,
  setTransactionAmount,
  setTransactionType,
} from "../transactions";

export const withdrawMoney = {
  //withdraw Money modals
  trigger: ".withdrawMoneyButton",
  target: "#withdrawMoneyEnteramount",
  methods: [
    () => {
      let modal = document.querySelector("#modal");
      modal.querySelector("#moneyAmount").addEventListener("keyup", () => {
        setTransactionAmount(modal.querySelector("#moneyAmount").value);
      });

      modal.querySelector("#moneyAmount").addEventListener("change", () => {
        setTransactionAmount(modal.querySelector("#moneyAmount").value);
      });
      setTransactionType("Withdraw money");
    },
  ],
  actions: [
    {
      trigger: ".withdrawMoneyContinueToReviewTransaction",
      target: "#withdrawMoneyReviewTransaction",
      methods: [
        () => {
          let modal = document.querySelector("#modal");
          let moneyAmountField = modal.querySelectorAll(
            ".moneyAmountInputField"
          );
          moneyAmountField.forEach((field) => {
            field.value = `$${getTransactionDetails().amount}`;
          });
        },
      ],
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
                  successmessage.innerHTML = `🎉 Withdrawal Successful! $${
                    getTransactionDetails().amount
                  } has been sent to your card`;
                },
              ],
              actions: [
                {
                  trigger: ".sendCoinsShowTransactionDetailsButton",
                  target: "#transactionDetailsModal",
                  methods: [
                    () => {
                      let modal = document.querySelector("#modal");
                      modal.querySelector("#transactionAmount").innerHTML = `${
                        getTransactionDetails().amount
                      }`;
                      modal.querySelector("#transactionType").innerHTML = `${
                        getTransactionDetails().type
                      }`;
                    },
                  ],
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
    //Add Paypal Account
    {
      trigger: ".addPaypalAccountButton",
      target: "#addPaypalAccountModal",
    },
  ],
};
