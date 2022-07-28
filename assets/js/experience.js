AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Gen-Link",
    cardImage: "assets/images/experience-page/gen-cha.png",
    place: "Project Manager | Designer",
    time: "2021 August ~ 2022 January",
    desp: "<li>현대해상⨉어썸스쿨 주관 하이챌린지스쿨 프로젝트</li> <li>I was responsible for physical product and web page design, product management, planning and finance.</li> ",
    goto: "genlink"
  },
  {
    title: "Eco-MRMR",
    cardImage: "assets/images/experience-page/맵.png",
    place: "Project Manager | Product Designer | Designer | Developer",
    time: "2022 1st half",
    desp: "<li>환경부 에코톤 출품 준비 프로젝트</li><li>I was in charge of project manager, web design, development and planning.</li>",
    goto: "ecomrmr"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, goto }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <br/>
            <ol>
              ${desp}
            </ol>
            <div style='float:right'>
            <a href="#${goto}" class="blog-slider__button">Read More</a> 
            </div>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Hackathon Section

const genlink = document.querySelector(".genlink-section");
const pm = [
  {
    cla: "blog-slider__img",
    title: "Gen-Link",
    subtitle: "Project Manager | Designer",
    image: 'img src = "assets/images/experience-page/gen-cha.png"',
    desp: "세대를 연결하다, 젠링",
    goto: "#", target:"_self", index:"go up"
  },
  {
    cla: "blog-slider__img",
    title: "📰News Letter",
    subtitle: "",
    image: 'img src = "assets/images/experience-page/genlink logo.jpg"',
    desp: "수익금을 지역 청소년 상담 복지 센터에 기부해<br>다양한 인터넷 신문사에서 기사 업로드",
    goto: "http://www.gynews.co.kr/news/articleView.html?idxno=13552",
    target: "_blank", index:"Go to article"
  },
  {
    cla:"blog-slider__item",
    title: "💬Presentation",
    subtitle: "",
    image: 'iframe width="300" height="300" src="https://www.youtube.com/embed/FET2KHIWSCw?start=2748" title="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    desp: "하이챌린지스쿨 연합 공유회 프로젝트 발표",
    goto: "https://youtu.be/FET2KHIWSCw?t=2748",
    target: "_blank", index:"Watch on youtube"
  },
  // {
  //   cla:"",
  //   title: "💬Presentation",
  //   subtitle: "",
  //   image: 'iframe width="300" height="300" src="https://www.youtube.com/embed/FET2KHIWSCw?t=2748" title="2021 현대해상X어썸스쿨 [하이챌린지스쿨 연합공유회]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/',
  //   desp: "하이챌린지스쿨 연합 공유회 프로젝트 발표",
  //   goto: "https://youtu.be/FET2KHIWSCw?t=2748",
  //   target: "_blank", index:"Watch on youtube"
  // },
  // {
  //   cla:"",
  //   title: "💬Presentation",
  //   subtitle: "",
  //   image: 'iframe width="300" height="300" src="https://www.youtube.com/embed/FET2KHIWSCw?start=1668" title="2021 현대해상X어썸스쿨 [하이챌린지스쿨 연합공유회]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //   desp: "하이챌린지스쿨 연합 공유회 프로젝트 발표",
  //   goto: "https://youtu.be/FET2KHIWSCw?t=2748",
  //   target: "_blank", index:"Watch on youtube"
  // },
];

const showCards3 = () => {
  let output = "";
  pm.forEach(
    ({ title, image, subtitle, desp, goto, target, index, cla }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="${cla}">
        <${image}>
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <div style='float:right'>
          <a href="${goto}" target="${target}" class="blog-slider__button">${index}</a> </div>
        </div>
      </div>
      `)
  );
  genlink.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);


const ecomrmr = document.querySelector(".ecomrmr-section");
const PM = [
  {
    title: "Gen-Link",
    subtitle: "Project Manager | Designer",
    image: "assets/images/experience-page/gen-cha.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    goto: "genlink"
  },
  {
    title: "Eco-MRMR",
    subtitle: "Project Manager | Product Designer | Designer | Developer",
    image: "assets/images/experience-page/맵.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    goto: "ecomrmr"
  },
];

const showCards4 = () => {
  let output = "";
  pm.forEach(
    ({ title, image, subtitle, desp, goto }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#${goto}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  ecomrmr.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards4);

// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   {
//     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//   },
//   {
//     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//   },
//   {
//     title: "Elevate Tech",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/elevate.png",
//     desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//   },
// ];

// const showCards4 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="#" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards4);