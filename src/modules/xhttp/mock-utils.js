export const mockFactory = (config) => {

  const getMockResponse = (url) => {
    return new Promise(function (resolve, reject) {
      setTimeout(
        () => resolve(config.mockResponses[url.split(config.baseUrl)[1]]),
        config.mockResponseDelay*1000
      )
    })
  }

  return { getMockResponse }

}
