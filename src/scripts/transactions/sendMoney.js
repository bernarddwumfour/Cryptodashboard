import {
  getTransactionDetails,
  setTransactionAmount,
  setTransactionMessage,
  setTransactionType,
} from "../transactions";

export const sendMoney = {
  //Send money modals
  trigger: ".sendMoneyButton",
  target: "#sendMoneySelectUserModal",
  methods: [
    () => {
      let modal = document.querySelector("#modal");
      modal.querySelector("#moneyAmount").addEventListener("keyup", () => {
        setTransactionAmount(modal.querySelector("#moneyAmount").value);
      });
      modal
        .querySelector("#transactionMessage")
        .addEventListener("keyup", () => {
          setTransactionMessage(
            modal.querySelector("#transactionMessage").value
          );
        });
      modal.querySelector("#moneyAmount").addEventListener("change", () => {
        setTransactionAmount(modal.querySelector("#moneyAmount").value);
      });
      modal
        .querySelector("#transactionMessage")
        .addEventListener("change", () => {
          setTransactionMessage(
            modal.querySelector("#transactionMessage").value
          );
        });

      setTransactionType("Send money");
    },
  ],
  actions: [
    {
      trigger: ".sendMoneyContinueToReviewTransaction",
      target: "#sendMoneyReviewTransaction",
      methods: [
        () => {
          let modal = document.querySelector("#modal");
          let moneyAmountField = modal.querySelectorAll(
            ".moneyAmountInputField"
          );
          moneyAmountField.forEach((field) => {
            field.value = `$${getTransactionDetails().amount} `;
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
                  successmessage.innerHTML = `🎉 Money Sent! You’ve successfully sent $${
                    getTransactionDetails().amount
                  } to @airj543`;
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
