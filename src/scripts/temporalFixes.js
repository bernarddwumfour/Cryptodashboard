function switchContentOnElementClick(
  trigger,
  contentToBeReplaced,
  replacementcontent
) {
  document.querySelector(trigger) &&
    document.querySelector(trigger).addEventListener("click", () => {
      document.querySelector(contentToBeReplaced).classList.add("hidden");
      document.querySelector(replacementcontent).classList.remove("hidden");
    });
}
function hideContentOnElementClick(trigger, contentToHide) {
  document.querySelector(trigger) &&
    document.querySelector(trigger).addEventListener("click", () => {
      document.querySelector(contentToHide).classList.add("hidden");
    });
}

//FOR NO TRANSACTION
switchContentOnElementClick(
  ".overview",
  ".recenttransaction",
  ".norecenttransaction"
);
switchContentOnElementClick(
  ".overview",
  ".recenttransactiontable",
  ".norecenttransactiontable"
);
hideContentOnElementClick(".overview", ".creditCard");
hideContentOnElementClick(".overview", ".withDrawalAmount");

//FOR WITHDRAWAL SUCCESS AND ERROR
switchContentOnElementClick(
  ".continuetosuccess",
  ".withDrawalAmount",
  ".withdrawalsuccess"
);
switchContentOnElementClick(
  ".continuetoerror",
  ".withDrawalAmount",
  ".withdrawalerror"
);

let userstemplate = ``;
for (let i = 0; i < 30; i++) {
  userstemplate += `
    <div class="flex flex-col gap-2 items-center">
               <span
                 class="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-200 animate-pulse overflow-hidden"
               >
               </span>
               <span class="text-xs h-2 rounded-md w-14 bg-gray-200 animate-pulse"></span>
             </div>
             `;
}
let transactionSectionUsers =
  document.getElementsByClassName("recenttransaction")[0];
  transactionSectionUsers ? transactionSectionUsers.innerHTML = userstemplate : "";

let getUsers = async () => {
  let users = [];
  let userstemplate = ``;

  for (let i = 0; i < 30; i++) {
    let res = await fetch("https://randomuser.me//api");
    let data = await res.json();
    users.push({
      name: data.results[0].name.first,
      image: data.results[0].picture.medium,
    });
    userstemplate += `
         <div class="flex flex-col gap-1 items-center">
                    <span
                      class="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden"
                    >
                      <img
                        src="${data.results[0].picture.medium}"
                        class="w-full h-full"
                        alt="user image"
                      />
                    </span>
                    <span class="text-xs">${data.results[0].name.first}</span>
                  </div>
                  `;
  }


  transactionSectionUsers.innerHTML = userstemplate;
  console.log(users);
};

getUsers();
