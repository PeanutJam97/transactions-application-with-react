

export const dummyData = [
    {
      id: "993d0c0f-f135-4f96-ac38-3185f2bc31c7",
      TransactionID: 1,
      AccountID: 621156213,
      ReceivingAccountID: 339657462,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 500.0,
      Comment: "Monthly Pocket Money",
    },
    { 
      id: "2fac7450-c465-404f-a493-2fef9c24a977",
      TransactionID: 2,
      AccountID: 958945214,
      ReceivingAccountID: 621156213,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 8996.0,
      Comment: "School Fees",
    },
    {
      id: "e3151a7e-60bc-4e4f-a00a-9310fb3be4de",
      TransactionID: 3,
      AccountID: 828120424,
      ReceivingAccountID: 322798030,
      Date: "2022-11-25T04:00:00.000Z",
      TransactionAmount: 3000.0,
      Comment: "Driving Centre Top-up",
    },
    {
      id: "3a8cc215-a895-4e08-aa5b-b1d4af518942",
      TransactionID: 4,
      AccountID: 353677039,
      ReceivingAccountID: 785703027,
      Date: "2022-11-17T06:21:00.000Z",
      TransactionAmount: 255.0,
      Comment: "Tuition Fee Payment",
    },
    { 
      id: "e7ad1318-2bd0-43ce-be93-25c20035b732",
      TransactionID: 5,
      AccountID: 259555772,
      ReceivingAccountID: 828120424,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 32.0,
      Comment: "Books Payment",
    },
  ];

// Dummy account data split on account type
export const dummySplitAccountData = [
  {
    AccountID: 621156213,
    UserID: 1,
    AccountType: "Saving",
    AcccountBalance: 70200.71,
  },
  {
    AccountID: 958945214,
    UserID: 1,
    AccountType: "Current",
    AcccountBalance: 99720.46,
  },
  {
    AccountID: 828120424,
    UserID: 2,
    AccountType: "Multiplier",
    AcccountBalance: 50640.12,
  },
  {
    AccountID: 322798030,
    UserID: 3,
    AccountType: "Multiplier",
    AcccountBalance: 39740.17,
  },
  {
    AccountID: 353677039,
    UserID: 3,
    AccountType: "Saving",
    AcccountBalance: 76660.21,
  },
  {
    AccountID: 259555772,
    UserID: 4,
    AccountType: "Saving",
    AcccountBalance: 14020.58,
  },
  {
    AccountID: 339657462,
    UserID: 1,
    AccountType: "Current",
    AcccountBalance: 47380.33,
  },
  {
    AccountID: 785703027,
    UserID: 5,
    AccountType: "Current",
    AcccountBalance: 42460.32,
  },
];