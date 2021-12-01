<script src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"></script>
const provider = detectEthereumProvider();

if (provider) {
  console.log("passed");
} else {
  console.log("fai");
}
function addnetwork() {
  window.ethereum
    .request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x38",
          chainName: "Binance Smart Chain",
          nativeCurrency: {
            name: "Binance Coin",
            symbol: "BNB",
            decimals: 18,
          },
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ],
    })
    .catch((error) => {
      console.log(error);
    });
}
