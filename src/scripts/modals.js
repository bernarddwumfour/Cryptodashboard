let elementsAndEvents = [
  {
    trigger: ".addCoinsButton",
    target: "#addCoinsModal",
    actions: [
      {
        trigger: ".payWithCard",
        target: "#choosePaymentMethod",
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
      },
    ],
  },
  {
    trigger: ".buyCoinsMultipleOptionsButton",
    target: "#buyCoinsMultipleOptionsModal",
    actions: [
      {
        trigger: ".payWithCardMultipleCoinOptionsButton",
        target: "#payWithCardMultipleCoinOptionsModal",
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
      },
    ],
  },
  {
    //Notification modal
    trigger: ".notificationButton",
    target: "#notificationModal",
    methods: [() => alert("clicked")],
  },
  {
    //Sidebar Modal
    trigger: ".sidebarButton",
    target: "#sidebar",
  },
  {
    //Send Coins modals
    trigger: ".sendCoinsButton",
    target: "#sendCoinsSelectUserModal",
    actions: [
      {
        trigger: ".sendCoinsContinueToReviewTransaction",
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
            methods: [() => alert("clicked")],
          },
        ],
      },
    ],
  },
  {
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
  },

  //MONEY MODALS
  {
    //withdraw Money modals
    trigger: ".withdrawMoneyButton",
    target: "#withdrawMoneyEnteramount",
    actions: [
      {
        trigger: ".withdrawMoneyContinueToReviewTransaction",
        target: "#withdrawMoneyReviewTransaction",
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
  },

  {
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
  },
  {
    //Deposite money
    trigger: ".depositeMoneyButton",
    target: "#depositeMoneyEnterAmount",
    actions: [
      {
        trigger: ".depositeMoneyContinueToReviewTransaction",
        target: "#depositeMoneyReviewTransaction",
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
  },
];

const replaceInnerContent = (container, contentContainer) => {
  let contentToReplace = document.querySelector(contentContainer).innerHTML;
  document.querySelector(container).innerHTML = contentToReplace;
  // console.log(contentToReplace);
  // console.log(document.querySelector(container))
};

let showModalOnTriggerClick = (elements) => {
  elements.forEach((element) => {
    let triggers = document.querySelectorAll(element.trigger);
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("hidden");
        document.querySelector("#modal").classList.add("flex");
        replaceInnerContent("#modalContent", element.target);

        //Handling all methods at a stage
        if (element.methods && element.methods.length > 0) {
          element.methods.forEach((method) => {
            method();
          });
        }

        //Handling All close Modal Events by close button
        let closeModalButton = document
          .querySelector("#modal")
          .querySelector(".closeModalButton");
        closeModalButton &&
          closeModalButton.addEventListener("click", () => {
            document.querySelector("#modal").classList.remove("flex");
            document.querySelector("#modal").classList.add("hidden");
          });

        let cancelModalButton = document
          .querySelector("#modal")
          .querySelector(".cancelModalButton");
        cancelModalButton &&
          cancelModalButton.addEventListener("click", () => {
            document.querySelector("#modal").classList.remove("flex");
            document.querySelector("#modal").classList.add("hidden");
          });

        //Handle all events("clicks") within the modal
        // console.log(element.actions);
        element.actions && showModalOnTriggerClick(element.actions);
      });
    });
  });
};

//Closing modal by clicking on backdrop
let backdrop = document.querySelector("#backdrop");
backdrop &&
  backdrop.addEventListener("click", () => {
    document.querySelector("#modal").classList.add("hidden");
  });

showModalOnTriggerClick(elementsAndEvents);
