function getTitle() {
    const titleElem = document.querySelector('.title');
     return titleElem.textContent;
  }
  function getDescription() {
    const descriptionElem = document.querySelector('.about');
     return descriptionElem.innerText;
  }
  function getPlans() {
    const plansElem = document.querySelector('.plans');
     return plansElem.innerHTML;
  }
  function getGoal() {
    const goalElem = document.querySelector('.goal');
     return goalElem.outerHTML;
  }


