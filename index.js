/** Part for the starting instanciation */
/** creating the hero Heracles */
const Heracles = new Fighter('👨 Heracles', 20, 6, './images/heracles.svg');

/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10, './images/sword.svg');
Heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
Heracles.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Fighter('Bird', 25, 12, './images/bird.svg');
const bird2 = new Fighter('Bird', 25, 12, './images/bird.svg');
const bird3 = new Fighter('Bird', 25, 12, './images/bird.svg');

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(Heracles, bird1);

/** Your code goes here */



/** Do not touch => allow the opening / closing of the hero information section */
const openModal = () => {
  const heroInfo = new HeroInfoTemplate('heroInfo');
  heroInfo.createHeroInfoTemplate(Heracles);
  document.getElementById("heroInfo").style.display = "flex";
}

const closeModal = () => {
  document.getElementById("heroInfo").style.display = "none";
}