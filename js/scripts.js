/*- price-container -*/
const PriceSwitcher = (function () {
  let switcher;

  const renderPrice = () => {
    const priceContainer = document.querySelector("#price-container");
    const monthlyPrice = document.querySelector("#monthly-price");
    const yearlyPrice = document.querySelector("#yearly-price");

    priceContainer.innerHTML = switcher.checked
      ? yearlyPrice.innerHTML
      : monthlyPrice.innerHTML;
  };

  const initialize = () => {
    switcher = document.querySelector("#price-switcher");

    // handle tariff change
    switcher.addEventListener("change", renderPrice);

    // initial render
    renderPrice();
  };

  return { initialize };
})();

document.addEventListener("DOMContentLoaded", PriceSwitcher.initialize);
