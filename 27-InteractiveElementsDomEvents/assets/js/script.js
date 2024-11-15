const card = document.createElement("div");
card.style.maxWidth = "400px";
card.style.background = "white";
card.style.position = "relative";
card.style.border = "1px solid black"
card.style.marginLeft = "699.8px";
card.style.marginTop = "100px";


const imageHouse = document.createElement("img");
imageHouse.src = "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg";
imageHouse.style.width = "100%";
imageHouse.style.height = "auto";
card.appendChild(imageHouse);

const cardContent = document.createElement("div");
cardContent.style.padding = "30px";
card.appendChild(cardContent);

const cardTitle = document.createElement("h5");
cardTitle.textContent = "DETACHED HOUSE . 5Y OLD";
cardContent.appendChild(cardTitle);

const cardPrice = document.createElement("h2");
cardPrice.textContent = "$750.000";
cardContent.appendChild(cardPrice);

const cardAddress = document.createElement("p");
cardAddress.textContent = "742 Evergreen Terrace";
cardContent.appendChild(cardAddress);

const info = document.createElement("div");
info.style.display = "flex";
info.style.justifyContent = "space-between";
cardContent.appendChild(info);

const bedroomsInfo = document.createElement("div");
bedroomsInfo.style.display = "flex";
bedroomsInfo.style.alignItems = "center";
bedroomsInfo.style.gap = "4px";


const bedroomsIcon = document.createElement("i");
bedroomsIcon.classList.add("fa", "fa-bed");
bedroomsInfo.appendChild(bedroomsIcon);


const bedroomsText = document.createElement("span");
bedroomsText.textContent = "3 Bedrooms";
bedroomsInfo.appendChild(bedroomsText);

info.appendChild(bedroomsInfo);


const bathroomsInfo = document.createElement("div");
bathroomsInfo.style.display = "flex";
bathroomsInfo.style.alignItems = "center";
bathroomsInfo.style.gap = "4px";


const bathroomsIcon = document.createElement("i");
bathroomsIcon.classList.add("fa", "fa-bath");
bathroomsInfo.appendChild(bathroomsIcon);


const bathroomsText = document.createElement("span");
bathroomsText.textContent = "2 Bathrooms";
bathroomsInfo.appendChild(bathroomsText);
info.appendChild(bathroomsInfo);

const realtorText = document.createElement("p");
realtorText.textContent ="Realtor";
realtorText.style.marginTop = "40px"
cardContent.appendChild(realtorText);



const realtor = document.createElement("div");
realtor.style.display = "flex";
realtor.style.alignItems = "center";

cardContent.appendChild(realtor);

const realtorDiv = document.createElement("div");







const realtorImage = document.createElement("img");
realtorImage.src = "https://media.nature.com/w300/magazine-assets/d41586-018-07530-7/d41586-018-07530-7_16296784.jpg"; 
realtorImage.style.borderRadius = "50%";
realtorImage.style.width = "60px";
realtorImage.style.height = "60px";
realtorImage.style.marginRight = "10px";
realtor.appendChild(realtorImage);

const realtorInfo = document.createElement("div");
const realtorName = document.createElement("p");
realtorName.innerHTML = "<strong>Tiffany Heffner</strong>";
const realtorContact = document.createElement("p");
realtorContact.textContent = "(555) 555-4321";
realtorInfo.appendChild(realtorName);
realtorInfo.appendChild(realtorContact);

realtor.appendChild(realtorInfo);

const favoriteButton = document.createElement("button");
favoriteButton.classList.add("fa", "fa-heart");
favoriteButton.style.position = "absolute";
favoriteButton.style.top = "8px";
favoriteButton.style.right = "8px";
favoriteButton.style.background = "none"
favoriteButton.style.border= "none"
card.appendChild(favoriteButton);


favoriteButton.addEventListener("click", () => {
    favoriteButton.classList.toggle("favorited");

})

document.body.appendChild(card);



