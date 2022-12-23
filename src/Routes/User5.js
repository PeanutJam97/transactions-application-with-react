import { dummySplitAccountData } from "../data/data";
import UserAccountTable from "../components/UserAccountTable";

const User5 = () => {
  const UserAccountData = [];
  const typeState = "User5";
  const checkAccountUser = (typeState) => {
    if (typeState === "User1") {
      dummySplitAccountData.map((account) => {
        if (account.UserID === 1) {
          UserAccountData.push(account);
        }
      });
  } else if (typeState === "User2") {
      dummySplitAccountData.map((account) => {
        if (account.UserID === 2) {
          UserAccountData.push(account);
        }
      });
  } else if (typeState === "User3") {
    dummySplitAccountData.map((account) => {
      if (account.UserID === 3) {
        UserAccountData.push(account);
      }
    });
  } else if (typeState === "User4") {
    dummySplitAccountData.map((account) => {
      if (account.UserID === 4) {
        UserAccountData.push(account);
      }
    });
  } else if (typeState === "User5") {
    dummySplitAccountData.map((account) => {
      if (account.UserID === 5) {
        UserAccountData.push(account);
      }
    });
      }
  };

  checkAccountUser(typeState)

  return (
    <UserAccountTable accounts={UserAccountData}/>
  )
};

export default User5;
