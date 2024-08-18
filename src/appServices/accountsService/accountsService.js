import { mb } from "@mb/api";

const accountsService = {
  fetchChequeList: async (query) => {
    return mb.api.get(`api/bankReconcilation/viewCheque`, query);
  },
  updateCheque: async (query) =>
    mb.api.post(`api/bankReconcilation/updateCheque`, query),
  fetchBankAccountsList: async () => {
    return mb.api.get(`api/bankAccounts`);
  },
  fetchBankAccountItem: async (id) => {

    return mb.api.get(`api/bankAccounts/getBankAccountItem`,id);
  },
  updateBankAccount: async (query) =>
  mb.api.post(`api/bankAccounts`, query),
};

export default accountsService;
