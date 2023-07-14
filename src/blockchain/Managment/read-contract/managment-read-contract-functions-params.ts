export type ManagementReadContractFunctionParamsType = {
  getFee: [],
  isPaused: [],
};

export type ManagementReadContractFunctionReturnsType = {
  getFee: Promise<number>,
  isPaused: Promise<boolean>,
};
