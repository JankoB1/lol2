function activateInjectedProvider(providerName: any) {
  const { ethereum }: any = window

  if (!ethereum?.providers) {
      return undefined
  }

  let provider
  switch (providerName) {
      case 'CoinBase':
          provider = ethereum.providers.find(({ isCoinbaseWallet } :any) => isCoinbaseWallet)
          break
      case 'MetaMask':
          provider = ethereum.providers.find(({ isMetaMask } :any) => isMetaMask)
          break
      default:
          break
  }

  if (provider) {
      ethereum.setSelectedProvider(provider)
  }
  return true
}

export default activateInjectedProvider