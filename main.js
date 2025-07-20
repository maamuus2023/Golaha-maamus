
const players = [
  { name: "Ciyaartoyga 1" },
  { name: "Ciyaartoyga 2" },
];

const criteria = [
  "Orodka",
  "Shuutka",
  "Kontaroolka",
  "Baaska",
  "Difaaca",
  "Miisaanka",
  "Teamwork"
];

const votes = ["Fiican", "Dhexdhexaad", "Liita"];

const root = document.getElementById("root");

function createForm(player) {
  const form = document.createElement("form");
  form.innerHTML = `<h2>${player.name}</h2>`;
  criteria.forEach(criterion => {
    const group = document.createElement("div");
    group.innerHTML = `<label>${criterion}:</label>`;
    votes.forEach(vote => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `${player.name}-${criterion}`;
      radio.value = vote;
      group.appendChild(radio);
      group.innerHTML += vote;
    });
    form.appendChild(group);
  });
  root.appendChild(form);
}

players.forEach(player => createForm(player));
