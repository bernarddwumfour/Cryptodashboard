import { coinToMoney, getTransactionDetails } from "../transactions";

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
                      modal.querySelectorAll("Amount").innerHTML = `${
                        getTransactionDetails().amount
                      } coins`;
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
  actions: [
    {
      trigger: ".continueToPayment",
      target: "#reviewTransaction",
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
                  successmessage.innerHTML =
                    "🎉 Purchase Successful! 50 Coins have been added to your wallet.";
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
