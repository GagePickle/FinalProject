const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

export default (data) => {
  data.forEach(({ name, score, id }) => {
    const newItemRow = template.content.cloneNode(true);
    const newItemTDs = newItemRow.querySelectorAll("td");

    newItemTDs[0].textContent = id;
    newItemTDs[1].textContent = name;
    newItemTDs[2].textContent = score;
    tbody.appendChild(newItemRow);
  });
};
