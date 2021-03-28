
// Code for the portifolio projects.
const firstProject = document.getElementById('first-project');
firstProject.addEventListener('click', () => {
  window.open('https://mahmoudsafaya.github.io/redStore/');
});

const secondProject = document.getElementById('second-project');
secondProject.addEventListener('click', () => {
  window.open('https://mahmoudsafaya.github.io/Crazy_Resturant/');
});

const thirdProject = document.getElementById('third-project');
thirdProject.addEventListener('click', () => {
  window.open('https://mahmoudsafaya.github.io/weather/');
});

const fourthProject = document.getElementById('fourth-project');
fourthProject.addEventListener('click', () => {
  window.open('https://mahmoudsafaya.github.io/otaku/');
});

const fifthProject = document.getElementById('fifth-project');
fifthProject.addEventListener('click', () => {
  window.open('https://mahmoudsafaya.github.io/save_a_link/');
});



// Code for the see more btn
const seeMoreBtn = document.querySelector('#see-more');
const hiddenDivs = document.querySelector('#hidden-skills');

seeMoreBtn.addEventListener('click', (e) => {

  if(seeMoreBtn.textContent === 'See More') {
    hiddenDivs.style.display = 'block';
    seeMoreBtn.textContent = 'See Less';
    seeMoreBtn.style.color = '#ddd';

  } else {
    hiddenDivs.style.display = 'none';
    seeMoreBtn.textContent = 'See More';
    seeMoreBtn.style.color = '#F2E635';

  }
})
