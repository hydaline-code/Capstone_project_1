const courses = [
  {
    name: 'PROGRAMMING WITH SCRATCH',
    classes: [
      {
        name: 'Module1',
      },
      {
        name: 'Module2',
      },
      {
        name: ' Project',
      },
    ],
    img: 'pics/scratch.png',

  },

  {
    name: 'WEB DEVELOPMENT ',
    classes: [
      {
        name: 'Module1',
      },
      {
        name: 'Module2',
      },
      {
        name: ' Project',
      },
    ],
    img: 'pics/hcss.png',
  },

  {
    name: 'PROGRAMMING WITH PYTHON',
    classes: [
      {
        name: 'Module1',
      },
      {
        name: 'Module2',
      },
      {
        name: ' Project',
      },
    ],
    img: 'pics/pyth1.png',
  },

  {
    name: 'CIRCUITS DESIGN',
    classes: [
      {
        name: 'Module1',
      },
      {
        name: 'Module2',
      },
      {
        name: ' Project',
      },
    ],
    img: 'pics/elect3.png',
  },
];

const orgpart1 = document.querySelector('#home-container');
const title = document.createElement('h2');
orgpart1.appendChild(title);
title.textContent = 'Courses offered';
const lineh = document.createElement('hr');
title.appendChild(lineh);
lineh.classList.add('line');



const para = document.createElement('p');
para.classList.add('p-present');
orgpart1.appendChild(para);
para.textContent = 'Our digital making projects have step-by-step instructions to teach you how to think computatioanlly, then create games, animations and much more';

const gridimg2 = document.createElement('div');
const title2 = document.createElement('h2');
gridimg2.classList.add('containerhome');
orgpart1.appendChild(gridimg2);
orgpart1.appendChild(title2);
title2.textContent = 'Future Courses ';
title2.classList.add('title2');
const lineh2 = document.createElement('hr');
title2.appendChild(lineh2);
lineh2.classList.add('line2');

courses.forEach((part) => {
  const divpart1 = document.createElement('div');
  divpart1.classList.add('subdivpart1');
  gridimg2.appendChild(divpart1);
  const moduleList = document.createElement('ul');
  moduleList.classList.add('mod-items');

  const part1 = document.createElement('div');
  part1.classList.add('icons');
  divpart1.appendChild(part1);

  const imgdiv = document.createElement('img');
  imgdiv.src = part.img;
  imgdiv.classList.add('dynamicimg1');
  part1.appendChild(imgdiv);

  const divh = document.createElement('h2');
  part1.appendChild(divh);
  divh.textContent = part.name;

  part1.appendChild(moduleList);
  part.classes.forEach((type) => {
    const itemL = document.createElement('li');
    moduleList.appendChild(itemL);
    itemL.textContent = type.name;
  });
});

const btnclick = document.createElement('button');
btnclick.classList.add('join-btn');
orgpart1.appendChild(btnclick);
btnclick.textContent = 'Join  DigiKidTech';

const speaker = document.querySelector('#teachers');
const title1 = document.createElement('h2');
speaker.appendChild(title1);
title1.textContent = 'Instructors';
const lineh1 = document.createElement('hr');
title1.appendChild(lineh1);
lineh1.classList.add('line');

const gridimg = document.createElement('div');
gridimg.classList.add('containerimg');
speaker.appendChild(gridimg);

const instructors = [
  {
    name: 'Pr.Anna Firr Thene',
    profession: 'Co-Founder of DigiTech4kids and Speaker at Google Women Tech',
    description: 'University professor and author of many technical articles in education',
    img: 'pics/lect3.png',

  },

  {
    name: 'Manuella Ella Goore',
    profession: 'UI/UX designer at Indeed and Graphic Designer',
    description: 'With 5+ experience, author of 2-UI/UX design book',
    img: 'pics/lect21.png',
  },

  {
    name: 'Elissa  Anderson',
    profession: ' Mentor at OpenClassroom and App developer',
    description: 'Author of 5 technical Blog for developers',
    img: 'pics/lect11.png',
  },

  {
    name: 'Ing.Johnathan Kunle',
    profession: 'Front-End designer at Microsoft and Electronics Engineer',
    description: 'Owner of codekid app and more,  and Teenage-tech educator ',
    img: 'pics/lect51.jpg',

  },
];

instructors.forEach((lecturer) => {
  const part2 = document.createElement('div');
  part2.classList.add('speakers1');
  gridimg.appendChild(part2);

  const part21 = document.createElement('div');
  part21.classList.add('descrip');
  gridimg.appendChild(part21);

  const image = document.createElement('img');
  image.classList.add('imgdescrip');
  part2.appendChild(image);
  image.src = lecturer.img;

  const heading = document.createElement('h3');
  heading.classList.add('tit-descrip');
  part21.appendChild(heading);
  heading.textContent = lecturer.name;

  const par1 = document.createElement('p');
  par1.classList.add('p-descrip');
  part21.appendChild(par1);
  par1.textContent = lecturer.profession;

  const lineh2 = document.createElement('hr');
  lineh2.classList.add('underline');
  part21.appendChild(lineh2);

  const par2 = document.createElement('p');
  par2.classList.add('p2-descrip');
  part21.appendChild(par2);
  par2.textContent = lecturer.description;
});

const Menu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hambuger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
});
const MoreBtn = document.querySelector('.speak-btn');
const people1 = document.querySelector('.containerimg div:nth-of-type(1)');
const people2 = document.querySelector('.containerimg div:nth-of-type(2)');
const people3 = document.querySelector('.containerimg div:nth-of-type(3)');
const people4 = document.querySelector('.containerimg div:nth-of-type(4)');
const people5 = document.querySelector('.containerimg div:nth-of-type(5)');
const people6 = document.querySelector('.containerimg div:nth-of-type(6)');

function media(screen) {
  if (screen.matches) {
    people1.classList.toggle('active');
    people2.classList.toggle('active');
    people3.classList.toggle('active');
    people4.classList.toggle('active');
    people5.classList.toggle('active');
    people6.classList.toggle('active');
  } else {
    MoreBtn.disabled = false;
  }
}

const screen = window.matchMedia('(min-width: 768px)');
media(screen);
screen.addListener(media);
MoreBtn.addEventListener('click', () => {
  people1.classList.toggle('active');
  people2.classList.toggle('active');
  people3.classList.toggle('active');
  people4.classList.toggle('active');

  if (MoreBtn.classList.contains('less')) {
    MoreBtn.innerHTML = 'MORE<i class="fa fa-chevron-down" style="color: rgb(249, 62, 62);"></i>';
    MoreBtn.classList.remove('less');
  } else {
    MoreBtn.innerHTML = 'LESS ';
    MoreBtn.classList.add('less');
  }
});
