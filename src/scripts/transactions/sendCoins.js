import {
  getTransactionDetails,
  setTransactionAmount,
  setTransactionMessage,
  setTransactionType,
  transactionDetails,
} from "../transactions";

export const sendCoins = {
  //Send Coins modals
  trigger: ".sendCoinsButton",
  target: "#sendCoinsSelectUserModal",
  methods: [
    () => {
      let modal = document.querySelector("#modal");
      modal.querySelector("#coinAmount").addEventListener("keyup", () => {
        setTransactionAmount(modal.querySelector("#coinAmount").value);
      });
      modal
        .querySelector("#transactionMessage")
        .addEventListener("keyup", () => {
          setTransactionMessage(
            modal.querySelector("#transactionMessage").value
          );
        });
      modal.querySelector("#coinAmount").addEventListener("change", () => {
        setTransactionAmount(modal.querySelector("#coinAmount").value);
      });
      modal
        .querySelector("#transactionMessage")
        .addEventListener("change", () => {
          setTransactionMessage(
            modal.querySelector("#transactionMessage").value
          );
        });

      setTransactionType("Send coins");
    },
  ],
  actions: [
    {
      trigger: ".sendCoinsContinueToReviewTransaction",
      target: "#sendCoinsReviewTransaction",
      methods: [
        () => {
          let modal = document.querySelector("#modal");
          let coinAmountField = modal.querySelectorAll(".coinAmountInputField");
          coinAmountField.forEach((field) => {
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
                  successmessage.innerHTML = `Coins Sent! You’ve successfully sent ${
                    getTransactionDetails().amount
                  } Coins to @Mikey.`;
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
                      if (getTransactionDetails().message != "") {
                        modal
                          .querySelector("#transactionMessageContainer")
                          .classList.remove("hidden");

                        modal.querySelector(
                          "#transactionMessage"
                        ).innerHTML = `${getTransactionDetails().message}`;
                      }
                    },
                  ],
                },
              ],
            },
          ],
          // methods: [() => alert("clicked")],
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
