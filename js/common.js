document.addEventListener("DOMContentLoaded", () => {
  // Close top banner
  const closeBtn = document.querySelector(".top-banner__close");
  const topBanner = document.querySelector(".top-banner");

  closeBtn.addEventListener("click", () => {
    topBanner.classList.add("top-banner--hidden");
  });

  // Move search to another place
  const searchBar = document.querySelector(".sidebar-search");
  const recentSection = document.querySelector(".recent");
  const aside = document.querySelector(".aside");

  function moveSearchBar () {
    if (window.matchMedia("(max-width: 890px)").matches) {
      recentSection.insertAdjacentElement("beforebegin", searchBar);
    } else {
      aside.insertAdjacentElement("afterbegin", searchBar);
    }
  }

  // Move socieal icons to another place
  const socialIcons = document.querySelector(".footer__social");
  const footerNavs = document.querySelector(".footer__navs ");
  const footerInfo = document.querySelector(".footer__info");

  function moveSocialIcons () {
    if (window.matchMedia("(max-width: 600px)").matches) {
      footerNavs.insertAdjacentElement("beforeend", socialIcons);
    } else {
      footerInfo.insertAdjacentElement("beforeend", socialIcons);
    }
  }

  moveSocialIcons();
  moveSearchBar();

  window.onresize = () => {
    moveSocialIcons();
    moveSearchBar();
  }

})
