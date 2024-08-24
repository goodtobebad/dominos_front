export default (networkCall) => async (params) => {
  try {
    return {
      data: await networkCall(params),
    }
  } catch (e) {
    return {
      error: "erreur"
    }
  }
}