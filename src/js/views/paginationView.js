import View from "./View.js";
import icons from "url:../../img/icons.svg"; //parcel 2.version

class paginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //Page1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return _generateNxtBtn(curPage);
    }
    //Page 1, and no other pages
    else if (curPage === 1 && numPages === 1) {
      return "";
    }
    //Last page
    else if (curPage === numPages) {
      return _generatePrevBtn(curPage);
    }
    //Other page
    else if (curPage < numPages) {
      return [_generatePrevBtn(curPage), _generateNxtBtn(curPage)].join("");
    }
  }
}

_generatePrevBtn = function (curPage) {
  return `<button data-goto = "${
    curPage - 1
  }" class = "btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${curPage - 1}</span>
</button>`;
};

_generateNxtBtn = function (curPage) {
  return `<button data-goto = "${
    curPage + 1
  }" class="btn--inline pagination__btn--next">
  <span>Page ${curPage + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>`;
};

export default new paginationView();
