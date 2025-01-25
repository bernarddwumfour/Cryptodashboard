export let transactionDetails = {
  type: null,
  amount: null,
  receipient: null,
  fromAccount: null,
  toaAccount: null,
  status: "pending",
  message: null,
};

export const setTransactionType = (type) => (transactionDetails.type = type);
export const setTransactionAmount = (amount) =>
  (transactionDetails.amount = amount);
export const setTransactionReceipient = (receipient) =>
  (transactionDetails.receipient = receipient);
export const setTransactionFromAccount = (fromAccount) =>
  (transactionDetails.fromAccount = fromAccount);
export const setTransactionToAccount = (toAccount) =>
  (transactionDetails.toAccount = toAccount);
export const setTransactionStatus = (status) =>
  (transactionDetails.status = status);
export const setTransactionMessage = (message) =>
  (transactionDetails.message = message);

export const getTransactionDetails = () => transactionDetails;

export const coinToMoney = (coinAmount) => {
  if (coinAmount > 500) {
    return coinAmount / 11;
  }
  return coinAmount / 10;
};

export const moneyToCoins = (moneyAmount) => {
  if (moneyAmount > 50) {
    return moneyAmount * 11;
  }
  return moneyAmount * 10;
};
