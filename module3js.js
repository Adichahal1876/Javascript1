// Create an array to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the NFTs array.
function mintNFT(name, age, color, gender) {
  const nft = {
    "Name": name,
    "Age": age,
    "Color": color,
    "Gender": gender
  };

  NFTs.push(nft);
  console.log("Minted: " + name);
}

// Create a function that will print metadata for all NFTs in the NFTs array
function listNFTs() {
  console.log("Listing all NFTs:\n");
  NFTs.forEach((nft, index) => {
    console.log("ID:\t" + (index + 1));
    console.log("Name: " + nft.Name);
    console.log("Age: " + nft.Age);
    console.log("Color: " + nft.Color);
    console.log("Gender: " + nft.Gender);
    console.log("-------------------");
  });
}

// Print the total number of minted NFTs
function getTotalSupply() {
  console.log("\nTotal number of NFTs: " + NFTs.length);
}

// Call your functions below this line
mintNFT("Dev", 18, "Brown", "M");
mintNFT("Abhi", 24, "White", "M");
mintNFT("bella", 26, "Black", "F");
mintNFT("Ishan", 22, "Brown", "F");
mintNFT("Aisha", 20, "Brown", "F");

listNFTs();
getTotalSupply();
