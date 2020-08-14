class InsertData {
  constructor() {
    this.email = document.querySelectorAll(".email-list");
    this.insert = document.querySelector(".email-details");
    this.title = document.querySelector(".details__title");
    this.events();
  }

  events() {
    this.email.forEach((el) => {
      el.addEventListener("click", () => {
        this.insertHTML(el);
      });
    });
  }
  insertHTML(el) {
    const arr = ["PayPal", "Youtube", "LinkedIn", "Dribble"];

    arr.forEach((item) => {
      if (el.children[1].children[0].children[0].innerText === item) {
        this.insert.innerHTML = `     <div class="email-content u-mb-2">
        <div class="icon-box icon-box--dark">
          <svg class="icon-box__icon icon-box__icon--2x">
            <use
              xlink:href="img/sprite.svg#icon-youtube1
          "
            ></use>
          </svg>
        </div>
        <div class="details email-content__header">
          <div class="details__header">
            <h3 class="details__title">${item}</h3>
          </div>
          <div class="details__email">
            <p class="details__subject">
              MKBHD just uploaded a new video
            </p>
            <p class="details__text">
              < noreply@youtube.com >
              <span class="details__date">Today &verbar; 05:45 PM</span>
            </p>
          </div>
        </div>
      </div>
      <div class="content-details">
        <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/MevKTPN4ozw?controls=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ></iframe>
    <div class="details__header u-mt-2">
    <h3 class="details__title">Hi Khan,</h3>
    </div>
    <p class="details__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vestibulum fermentum facilisis libero, venenatis mattis orci
    hendrerit eget. Etiam ultrices mollis justo, nec fermentum
    elit viverra eu. Cras at cursus turpis. Nullam magna sem,
    vulputate quis massa nec, mollis sollicitudin dui. Sed eu
    massa in arcu pharetra posuere. Phasellus maximus neque non ex
    dapibus
    </p>
      </div>
    `;
      }
    });
  }
}

new InsertData();
