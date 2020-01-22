// Create a function revenue that takes transactions and returns an object of the daily revenue.
// Transactions
// A transaction is an object with price and timestamp fields:
// { price: 5, timestamp: 1571176523720 }
// You will be given an array of transactions:

const revenue = transactions => {
  return transactions.reduce((acc, transaction) => {
    const transactionDate = new Date(transaction.timestamp);
    const key = transactionDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' }).split(',').join('');
    acc[key] ? 
      acc[key] += transaction.price :
      acc[key] = transaction.price;
    return acc;
  }, {});
};

module.exports = revenue;
