export const toMutationPayload = function (asyncOperation, response) {
  return {
    asyncOperation: asyncOperation,
    response: response
  }
};
