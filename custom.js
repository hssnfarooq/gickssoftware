const tokenAddress = '0x21F187607F3221A25bD415b367ae4E256f2791f0';
const tokenSymbol = 'GICK';
const tokenDecimals = 10;
const tokenImage = 'https://i.ibb.co/jbPbxTw/22.png';
function addtoken(){


try {
// wasAdded is a boolean. Like any RPC method, an error may be thrown.
const wasAdded = ethereum.request({
method: 'wallet_watchAsset',
params: {
type: 'ERC20', // Initially only supports ERC20, but eventually more!
options: {
address: tokenAddress, // The address that the token is at.
symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
decimals: tokenDecimals, // The number of decimals in the token
image: tokenImage, // A string url of the token logo
},
},
});

if (wasAdded) {
  document.getElementById("addedt").style.display = "";
  document.getElementById("token").style.display = "none";
} else {
alert('Add Tokens please');
}
} catch (error) {
console.log(error);
}
}
const provider = detectEthereumProvider()
 
 if (provider) {
   console.log("passed");
 } else {
   console.log("fai");
 }
