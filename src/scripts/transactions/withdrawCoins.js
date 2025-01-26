import {
  coinToMoney,
  getTransactionDetails,
  setTransactionAmount,
  setTransactionType,
} from "../transactions";

export const withdrawCoins = {
  //Withdraw coins Modals
  trigger: ".withdrawCoinsButton",
  target: "#withdrawCoinsEnterAmount",
  methods: [
    () => {
      let modal = document.querySelector("#modal");
      modal.querySelector("#coinAmount").addEventListener("keyup", () => {
        setTransactionAmount(modal.querySelector("#coinAmount").value);
        modal.querySelector("#moneyAmount").value = `$${coinToMoney(
          modal.querySelector("#coinAmount").value
        )}`;
      });

      modal.querySelector("#coinAmount").addEventListener("change", () => {
        setTransactionAmount(modal.querySelector("#coinAmount").value);
        modal.querySelector("#moneyAmount").value = coinToMoney(
          modal.querySelector("#coinAmount").value
        );
      });
      setTransactionType("Withdraw coins");
    },
  ],
  actions: [
    {
      trigger: ".withdrawCoinsContinueToReviewTransaction",
      target: "#withdrawCoinsReviewTransaction",
      methods: [
        () => {
          let modal = document.querySelector("#modal");
          let moneyAmountField = modal.querySelectorAll(
            ".coinAmountInputField"
          );
          moneyAmountField.forEach((field) => {
            field.value = `${getTransactionDetails().amount} coins`;
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
                  successmessage.innerHTML = `🎉 Withdrawal Successful! ${
                    getTransactionDetails().amount
                  } coins ($${coinToMoney(
                    getTransactionDetails().amount
                  )}) has been added to your Money Wallet.`;
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
  ],
};
