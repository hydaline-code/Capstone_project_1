const courses = [
  {
    name:'PROGRAMMING WITH SCRATCH',
    classes: [
      {
        name: 'Module1'
      },
      {
        name: 'Module2'
      },
      {
        name: 'Capstone project'
      }
    ],
    img:'pics/scratch.jpg'

  },

  {
    name:'WEB DEVELOPMENT ',
    classes: [
      {
        name: 'Module1'
      },
      {
        name: 'Module2'
      },
      {
        name: 'Capstone project'
      }
    ],
    img:'pics/html kids.png'
  },
  
  {
    name:'PROGRAMMING WITH PYTHON',
    classes: [
      {
        name: 'Module1'
      },
      {
        name: 'Module2'
      },
      {
        name: 'Capstone project'
      }
    ],
    img:'pics/python.png'
  },
  
  {
    name:'ELECTRONIC  CIRCUITS DESIGN',
    classes: [
      {
        name: 'Module1'
      },
      {
        name: 'Module2'
      },
      {
        name: 'Capstone project'
      }
    ],
    img:'pics/electronics.jpg'
  },
]


const orgpart1 = document.querySelector('#home-container');
const title = document.createElement('h2');
orgpart1.appendChild(title);
title.textContent ='Courses offered';
const lineh = document.createElement('hr');
title.appendChild(lineh);

const para = document.createElement('p');
para.classList.add ('p-present');
orgpart1.appendChild(para);
para.textContent='Our digital making projects have step-by-step instructions to teach you how to think computatioanlly, then create games, animations and much more'



courses.forEach((part) => {

const divpart1 = document.createElement('div');
divpart1.classList.add ('subdivpart1');
orgpart1.appendChild(divpart1);
const moduleList = document.createElement('ul');
moduleList.classList.add('mod-items');


const part1 = document.createElement('div');
part1.classList.add ('icons');
divpart1.appendChild(part1);

const imgdiv = document.createElement('img');
  imgdiv.src = part.img;
  imgdiv.classList.add('dynamicimg1');
  part1.appendChild(imgdiv);

  const divh = document.createElement('h2');
  part1.appendChild(divh);
  divh.textContent= part.name;

  part1.appendChild(moduleList)
  part.classes.forEach((type) => {
    const itemL = document.createElement('li');
    moduleList.appendChild(itemL);
    itemL.textContent = type.name;
  });
});

const btnclick = document.createElement('button');
btnclick.classList.add ('join-btn');
orgpart1.appendChild(btnclick);
btnclick.textContent='Join  DigiKidTech';

const speaker = document.querySelector('#teachers');
const title1 = document.createElement('h2');
speaker.appendChild(title1);
title1.textContent ='Instructors';
const lineh1 = document.createElement('hr');
title1.appendChild(lineh1);

const instructors =[
  {
    name:'Pr.Anna Firr Thene',
    profession:'Co-Founder of DigiTech4kids and Speaker at Google Women Tech',
    description:'University professor and author of many technical articles in education',
    img:'pics/lect31.jpg'
    
  },

  {
    name:'Manuella Ella Goore',
    profession:'UI/UX designer at Indeed and Graphic Designer',
    description:'With 5+ experience, author of 2-UI/UX design book',
    img:'pics/lect21.jpg'
  },

  {
    name:'Elissa  Anderson',
    profession:' Mentor at OpenClassroom and App developer',
    description:'Author of 5 technical Blog for developers',
    img:'pics/lect11.jpg'
  },

  {
    name:'Ing.Johnathan Kunle',
    profession:'Front-End designer at Microsoft and Electronics Engineer',
    description:'Owner of codekid app and more,  and Teenage-tech educator ',
    img:'pics/lect51.jpg',
   
  }
]

instructors.forEach((lecturer) => {
  const divpart2 = document.createElement('div');
  divpart2.classList.add ('speakers');
  speaker.appendChild(divpart2);

  const part2 = document.createElement('div');
  part2.classList.add ('speakers1');
  divpart2.appendChild(part2);

  const part21 = document.createElement('div');
  part21.classList.add ('descrip');
  divpart2.appendChild(part21);

  const image = document.createElement('img');
  image.classList.add ('imgdescrip');
  part2.appendChild(image);
  image.src=lecturer.img;

  const heading = document.createElement('h3');
  heading.classList.add ('tit-descrip');
  part21.appendChild(heading);
  heading.textContent=lecturer.name

  const par1 = document.createElement('p');
  par1.classList.add ('p-descrip');
  part21.appendChild(par1);
  par1.textContent=lecturer.profession

  const lineh2 = document.createElement('hr');
  lineh2.classList.add('underline');
  part21.appendChild(lineh2);

  const par2 = document.createElement('p');
  par2.classList.add ('p2-descrip');
  part21.appendChild(par2);
  par2.textContent=lecturer.description

});

/*const MoreBtn = document.createElement('button');
MoreBtn.classList.add('speak-btn');
speaker.appendChild(MoreBtn);
MoreBtn.textContent='MORE \u2228';*/


const Menu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hambuger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
  
});
const MoreBtn = document.querySelector('.speak-btn');
const people = document.querySelector('.speakers:nth-child(3)');
const people1 = document.querySelector('.speakers:nth-child(2)');

MoreBtn.addEventListener("click", () => {
 people.classList.toggle('active');
 people1.classList.toggle('active');
   if (MoreBtn.classList.contains('less')) {
    MoreBtn.innerHTML = 'MORE<i class="fa fa-chevron-down" style="color: rgb(249, 62, 62);"></i>';
    MoreBtn.classList.remove('less');
  } else {
    MoreBtn.innerHTML = 'LESS ' ;
    MoreBtn.classList.add('less');
  }
  
});





