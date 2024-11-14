const heart = document.querySelector(".heart");
const card = heart.closest(".card");
const imageUrl = card.querySelector("img").src;
const image = card.querySelector(".image");
const img = image.querySelector("img");
const cardContent = card.querySelector(".cardContent");
const title = card.querySelector(".cardTitle");
const text = card.querySelector(".cardText");
const cardPrice = card.querySelector(".cardPrice");
const shopBtn = card.querySelector(".shopBtn");

const product = {
  imageUrl: imageUrl,
  title: title,
  text: text,
  image: image,
  img : img,
  cardContent: cardContent,
  cardPrice: cardPrice,
  shopBtn: shopBtn,
};

console.log(product);




card.style.margin = "50px";
card.style.width = "300px";
card.style.border = "1px solid black";
card.style.padding = "10px";

heart.style.display = "inline-flex";
heart.style.alignItems = "center";
heart.style.justifyContent = "center";
heart.style.width = "30px";
heart.style.height = "30px";
heart.style.borderRadius = "50%";
heart.style.background = "silver";
heart.style.position = "absolute";
heart.style.top = "15px";
heart.style.right = "15px";
heart.style.cursor = "pointer";

image.style.width = "100%";
image.style.height = "300px";
image.style.position = "relative";


img.style.width = "100%";
img.style.height = "100%";
img.style.borderRadius = "10px";

cardContent.style.display = "flex";
cardContent.style.flexDirection = "column";
cardContent.style.alignItems = "center";
cardContent.style.gap = "10px";
cardContent.style.marginTop = "20px";
cardContent.style.color = "burlywood";

cardPrice.style.display = "inline-block";
cardPrice.style.padding = "5px";
cardPrice.style.borderRadius = "5px";
cardPrice.style.background = "rgb(95, 94, 91)";

shopBtn.style.width = "100%";
shopBtn.style.padding = "10px";
shopBtn.style.background = "skyblue";
shopBtn.style.border = "none";
shopBtn.style.cursor = "pointer";
shopBtn.style.color = "white";
shopBtn.style.textTransform = "uppercase";
shopBtn.style.borderRadius = "5px";
shopBtn.style.fontWeight = "bold";



title.textContent = "Ayaqqabılar";
text.textContent = "Nike Air Force";
cardPrice.textContent = "1500 AZN";
shopBtn.textContent = "Al";
