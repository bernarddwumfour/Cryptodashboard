export const addBankAccount = {
  trigger: ".addBankAccontButton",
  target: "#addBankAccount",
  actions: [
    {
      trigger: ".continueToEnterBankDetails",
      target: "#enterBankDetails",
      actions: [
        {
          trigger: ".continueToSpinner",
          target: "#spinnerModal",
        },
      ],
    },
  ],
};
