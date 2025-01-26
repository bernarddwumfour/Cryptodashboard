import {
  getTransactionDetails,
  setTransactionAmount,
  setTransactionType,
} from "../transactions";

export const depositeMoney = {
  //Deposite money
  trigger: ".depositeMoneyButton",
  target: "#depositeMoneyEnterAmount",
  methods: [
    () => {
      let modal = document.querySelector("#modal");
      modal.querySelector("#moneyAmount").addEventListener("keyup", () => {
        setTransactionAmount(modal.querySelector("#moneyAmount").value);
      });

      modal.querySelector("#moneyAmount").addEventListener("change", () => {
        setTransactionAmount(modal.querySelector("#moneyAmount").value);
      });
      setTransactionType("Deposit money");
    },
  ],
  actions: [
    {
      trigger: ".depositeMoneyContinueToReviewTransaction",
      target: "#depositeMoneyReviewTransaction",
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
                  successmessage.innerHTML = `🎉 Deposit Successful! $${
                    getTransactionDetails().amount
                  } has been added to your Money Wallet.`;
                },
              ],
              actions: [
                {
                  trigger: ".sendCoinsShowTransactionDetailsButton",
                  target: "#sendCoinsTransactionDetailsModal",
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
  ],
};
