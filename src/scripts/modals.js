import {
  getTransactionDetails,
  setTransactionAmount,
  setTransactionType,
} from "./transactions";
import { addBankAccount } from "./transactions/addBankAccount";
import { addCoins, addCoinsCustom } from "./transactions/addCoins";
import { depositeMoney } from "./transactions/depositMoney";
import { sendCoins } from "./transactions/sendCoins";
import { sendMoney } from "./transactions/sendMoney";
import { withdrawCoins } from "./transactions/withdrawCoins";
import { withdrawMoney } from "./transactions/withdrawMoney";

let elementsAndEvents = [
  {
    trigger: ".buyCoinsMultipleOptionsButton",
    target: "#buyCoinsMultipleOptionsModal",
    methods: [
      () => {
        const coinAmount = document.querySelectorAll(".coinAmount");
        coinAmount.forEach((coin) => {
          coin.addEventListener("click", () => {
            setTransactionType("addCoins");
            setTransactionAmount(coin.dataset.amount);
            console.log(getTransactionDetails());
          });
        });
      },
    ],
    actions: [
      {
        // trigger: ".payWithCardMultipleCoinOptionsButton",
        // target: "#payWithCardMultipleCoinOptionsModal",
        // actions: [
        //   {
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
        //     },
        //   ],
      },
    ],
  },
  addCoins,
  addCoinsCustom,
  sendCoins,
  withdrawCoins,

  //MONEY MODALS
  withdrawMoney,
  sendMoney,
  depositeMoney,

  //Accounts
  addBankAccount,

  {
    //Notification modal
    trigger: ".notificationButton",
    target: "#notificationModal",
  },
  {
    //Sidebar Modal
    trigger: ".sidebarButton",
    target: "#sidebar",
  },
  {
    //View Transaction details
    trigger: ".viewTranscationDetailsButton",
    target: "#sendCoinsTransactionDetailsModal",
  },
  //Remove Credit card
  {
    trigger: ".deleteCardButton",
    target: "#deleteCardModal",
  },
  //Add Credit card
  {
    trigger: ".addCardButton",
    target: "#addCardModal",
  },
];

const replaceInnerContent = (container, contentContainer) => {
  let contentToReplace = document.querySelector(contentContainer).innerHTML;
  document.querySelector(container).innerHTML = contentToReplace;
};

//Selecting Card To Edit Or Delete

const selectCreditCard = () => {
  let credit_cards = document.querySelectorAll(".credit_cards");

  credit_cards &&
    credit_cards.forEach((creditCard) => {
      let credit_card = creditCard.querySelectorAll(".credit_card");
      let credit_card_container = creditCard.querySelectorAll(
        ".credit_card_container"
      );

      for (let i = 0; i < credit_card.length; i++) {
        credit_card[i].addEventListener("click", () => {
          credit_card_container.forEach((container, index) => {
            if (index == i) return;
            container.classList.remove("credit_card_selected");
          });
          credit_card_container[i].classList.toggle("credit_card_selected");
        });
      }
    });
};

const coinAmount = document.querySelectorAll(".coinAmount");
coinAmount.forEach((coin) => {
  coin.addEventListener("click", () => {
    setTransactionType("addCoins");
    setTransactionAmount(coin.dataset.amount);
    console.log(getTransactionDetails());
  });
});

//Card selection for all pages
selectCreditCard();

let previousElement;

let showModalOnTriggerClick = (elements) => {
  let prev = [];

  elements.forEach((element) => {
    let triggers = document.querySelectorAll(element.trigger);
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("hidden");
        document.querySelector("#modal").classList.add("flex");
        replaceInnerContent("#modalContent", element.target);

        //Card selecting within modals
        selectCreditCard();

        //Handling all methods at a stage
        if (element.methods && element.methods.length > 0) {
          element.methods.forEach((method) => {
            method();
          });
        }

        //Handling All close Modal Events by close button
        const closeModal = () => {
          let closeModalButton = document
            .querySelector("#modal")
            .querySelector(".closeModalButton");
          closeModalButton &&
            closeModalButton.addEventListener("click", () => {
              document.querySelector("#modal").classList.remove("flex");
              document.querySelector("#modal").classList.add("hidden");
            });
        };
        closeModal();

        const cancelModal = () => {
          let cancelModalButton = document
            .querySelector("#modal")
            .querySelector(".cancelModalButton");
          cancelModalButton &&
            cancelModalButton.addEventListener("click", () => {
              document.querySelector("#modal").classList.remove("flex");
              document.querySelector("#modal").classList.add("hidden");
            });
        };
        cancelModal();

        //Handling All Back Buttons
        let backButton = document
          .querySelector("#modal")
          .querySelectorAll(".backButton");
        backButton.length > 0 &&
          backButton.forEach((button) => {
            button.addEventListener("click", () => {
              replaceInnerContent("#modalContent", "#sendMoneySelectUserModal");
              cancelModal();
              closeModal();
              console.log(prev[1]);
              showModalOnTriggerClick(prev);
            });
          });

        //Handle all events("clicks") within the modal using recursion
        element.actions && showModalOnTriggerClick(element.actions);

        // Show modal on smaller screens from the sidebar
        showModalOnTriggerClick(elementsAndEvents);

        prev = [...elements];
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
