const priceSwitcher = document.getElementById("price-switch");
const monthlyPrice = document.querySelectorAll(".price-monthly");
const AnnuallyPrice = document.querySelectorAll(".price-annually");
let switcher = false;

priceSwitcher.addEventListener("change", (event) => {
  console.log(switcher);
  if (switcher === false) {
    monthlyPrice.forEach((monthPrice) => {
      monthPrice.style.display = "none";
    });
    AnnuallyPrice.forEach((AnnuallPrice) => {
      AnnuallPrice.style.display = "block";
    });
    return (switcher = true);
  } else {
    monthlyPrice.forEach((monthPrice) => {
      monthPrice.style.display = "block";
    });
    AnnuallyPrice.forEach((AnnuallPrice) => {
      AnnuallPrice.style.display = "none";
    });
    return (switcher = false);
  }
});
