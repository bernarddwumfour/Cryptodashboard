let elementsAndEvents = [
  {
    trigger: ".addCoinsButton",
    target: "#addCoinsModal",
    actions : [
        {
            trigger : ".payWithCard",
            target : "#choosePaymentMethod",
            actions : [
                {
                    trigger : ".continue",
                    target : "#reviewTransaction"
                }
            ]
        },
    ]
  },
];

const replaceInnerContent = (container, contentContainer) => {
  let contentToReplace = document.querySelector(contentContainer).innerHTML;
  document.querySelector(container).innerHTML = contentToReplace;
  console.log(contentToReplace);
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


        //Handling All close Modal Events by close button
        let closeModalButton =
          document.querySelector("#modal").querySelector(".closeModalButton");
        closeModalButton.addEventListener("click", () => {
          document.querySelector("#modal").classList.remove("flex");
          document.querySelector("#modal").classList.add("hidden");
        });

        let cancelModalButton =
          document.querySelector("#modal").querySelector(".cancelModalButton");
        cancelModalButton.addEventListener("click", () => {
          document.querySelector("#modal").classList.remove("flex");
          document.querySelector("#modal").classList.add("hidden");
        });

        //Handle all events("clicks") within the modal
        console.log(element.actions)
        element.actions && showModalOnTriggerClick(element.actions)
        


      });
    });
  });
};

//Closing modal by clicking on backdrop
document.querySelector("#backdrop").addEventListener("click", (e) => {
  document.querySelector("#modal").classList.add("hidden");
});

showModalOnTriggerClick(elementsAndEvents);