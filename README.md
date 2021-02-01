### Mailbox-X | Email WebApp

<p align="center">
  <a href="https://github.com/m90khan/MailboxX/">
    <img src="img/favicon.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Mailbox-X | Email WebApp</h3>

  <p align="center">
WebAPP for mails (inspired by GMAIL) <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://github.com/m90khan/MailboxX/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snippet](#code)
- [Contact](#Contact)

---

### About the Project

Live: https://github.com/m90khan/MailboxX
<img src="./img/overview-completed.jpg">

#### Process

- Layout the main container
- divide container into 4 sections
- add html for each section
- code css and add a small function for event listener

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://www.w3schools.com/whatis/img_js.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://greensock.com/uploads/set_resources_4/84c1e40ea0e759e3f1505eb1788ddf3c_greensock-logo.svg" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />

---

### Code Snippet

```javascript
class InsertData {
  constructor() {
    this.email = document.querySelectorAll('.email-list');
    this.insert = document.querySelector('.email-details');
    this.title = document.querySelector('.details__title');
    this.events();
  }

  events() {
    this.email.forEach((el) => {
      el.addEventListener('click', () => {
        this.insertHTML(el);
      });
    });
  }
  insertHTML(el) {
    const arr = ['PayPal', 'Youtube', 'LinkedIn', 'Dribble'];

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
 
    `;
      }
    });
  }
}

new InsertData();
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/m90khan
[linkedin]: www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxd.khan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
