import {
  coinToMoney,
  getTransactionDetails,
  moneyToCoins,
  setTransactionAmount,
  setTransactionType,
} from "../transactions";

export const addCoins = {
  trigger: ".addCoinsButton",
  target: "#addCoinsModal",
  methods: [
    () => {
      let modal = document.querySelector("#modal");
      let coinAmountField = modal.querySelectorAll(".coinAmountField");
      coinAmountField.forEach((field) => {
        field.innerHTML = getTransactionDetails().amount;
      });

      let moneyAmountField = modal.querySelectorAll(".moneyAmountField");
      moneyAmountField.forEach((field) => {
        field.innerHTML = coinToMoney(getTransactionDetails().amount);
      });
    },
  ],
  actions: [
    {
      trigger: ".continueToPayment",
      target: "#reviewTransaction",
      methods: [
        () => {
          let modal = document.querySelector("#modal");
          let moneyAmountField = modal.querySelectorAll(
            ".moneyAmountInputField"
          );
          moneyAmountField.forEach((field) => {
            field.value = `$${coinToMoney(getTransactionDetails().amount)}`;
          });
        },
      ],
      actions: [
        {
          trigger: ".showTransactionErrorButton",
          target: "#showTransactionErrorModal",
        },
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
                  successmessage.innerHTML = `🎉 Purchase Successful! ${
                    getTransactionDetails().amount
                  } Coins have been added to your wallet.`;
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

export const addCoinsCustom = {
  trigger: ".addCoinsCustomButton",
  target: "#buyCoinsCustomInput",
  methods: [
    () => {
      const coinAmount = document.querySelectorAll(".coinAmount");
      coinAmount.forEach((coin) => {
        coin.addEventListener("click", () => {
          setTransactionType("Add coins");
          setTransactionAmount(coin.dataset.amount);
          console.log(getTransactionDetails());
        });
      });
    },

    () => {
      let modal = document.querySelector("#modal");
      modal.querySelector("#moneyAmount").addEventListener("keyup", () => {
        modal.querySelector("#coinAmount").value = moneyToCoins(
          modal.querySelector("#moneyAmount").value
        );
        modal.querySelector(".moneyAmount").innerHTML =
          modal.querySelector("#moneyAmount").value;
        setTransactionAmount(
          moneyToCoins(modal.querySelector("#moneyAmount").value)
        );
        setTransactionType("Add coins");
      });
      modal.querySelector("#moneyAmount").addEventListener("change", () => {
        modal.querySelector("#coinAmount").value = moneyToCoins(
          modal.querySelector("#moneyAmount").value
        );
        modal.querySelector(".moneyAmount").innerHTML =
          modal.querySelector("#moneyAmount").value;
        setTransactionAmount(
          moneyToCoins(modal.querySelector("#moneyAmount").value)
        );
        setTransactionType("Add coins");
      });
    },
  ],
  actions: [
    {
      trigger: ".continueToPayment",
      target: "#reviewTransaction",
      methods: [
        () => {
          let modal = document.querySelector("#modal");
          let moneyAmountField = modal.querySelectorAll(
            ".moneyAmountInputField"
          );
          moneyAmountField.forEach((field) => {
            field.value = `$${coinToMoney(getTransactionDetails().amount)}`;
          });
        },
      ],
      actions: [
        {
          trigger: ".showTransactionErrorButton",
          target: "#showTransactionErrorModal",
        },
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
                  successmessage.innerHTML = `🎉 Purchase Successful! ${
                    getTransactionDetails().amount
                  } Coins have been added to your wallet.`;
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
