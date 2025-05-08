import { quais } from "quais";

export const requestAccounts = async () => {
  return await window.pelagus
    .request({ method: "quai_requestAccounts" })
    .then((accounts: any[]) => {
      const zone = quais.getZoneForAddress(accounts[0]);
      const address = {
        shard: zone,
        address: accounts[0],
      };
      console.log("Account:", address);
      return accounts;
    })
    .catch((error: any) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log("User rejected request");
      } else {
        console.error(error);
      }
      return [];
    });
};
