  function addnetwork(){
              const provider = detectEthereumProvider()
        window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com']
    }]
    }).then(myFunction)
    .catch((error) => {
    console.log(error)
    }) 
    }
    function myFunction() {
        document.getElementById("added").style.display = "block" ;
        document.getElementById("addnet").style.display = "none";
       document.getElementById("swapCoins").disabled = false;
      }