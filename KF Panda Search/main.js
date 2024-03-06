// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;

  // if Statement - Test the input
  if (name === "Po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "Tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML =
      "This is what you trained me for";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "Mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML =
      "Wait, my fault! I accidentally tweaked his facial nerve!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "Monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML =
      "At the first sign of trouble, I'll give you a signal. Ka-ka! Kee-kee!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "Crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML =
      "Stop flapping your mouth and start flapping your wings";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "Viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "Shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "If you only do what you can do, you will never be more than you are now";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "Oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML =
      "Yesterday is history, tomorrow is a mystery, but today is a gift, that's why it's called the present";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "Shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "Search the farthest villages. Find more metal! China will be mine...";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "Kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "Kai. General Kai. Supreme Warlord of all China!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "Tai-lung") {
    document.getElementById("char-name").innerHTML = "Tai-lung";
    document.getElementById("char-quote").innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "Soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "The cup you choose to fill has no bottom. It is time to stop this madness.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "Boss Wolf") {
    document.getElementById("char-name").innerHTML = "Boss Wolf";
    document.getElementById("char-quote").innerHTML =
      "Is that all you got? 'Cause it feels like I'm fighting a big, old, fluffy cloud!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "Croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML =
      "With despair for dessert";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "Storming Ox") {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-quote").innerHTML =
      "It's time to surrender, panda. Kung fu is dead";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "Mr Ping") {
    document.getElementById("char-name").innerHTML = "Mr Ping";
    document.getElementById("char-quote").innerHTML =
      "To make somthing special you just have to believe its special";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "Li") {
    document.getElementById("char-name").innerHTML = "Li";
    document.getElementById("char-quote").innerHTML = "Double dad defense!";
    document.getElementById("char-img").src = "img/li.png";
  } else {
    document.getElementById("char-name").innerHTML = "??????";
    document.getElementById("char-quote").innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
