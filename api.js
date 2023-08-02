fetch("a.json")
  .then((response) => response.json())
  .then((data) => {
    show(data);
  });

const container = document.querySelector(".container");
function show(data) {
  container.innerHTML = data
    .map((user) => {
      return `
        <div class="mb-8 p-5 space-y-5 bg-white rounded-xl">
          <h1 class="text-2xl font-bold text-title">${user.title}</h1>
          <p class="text-teal-500 ">position at : ${user.id}</p>
          <p class="text-description">${user.body}</p>
        </div>
        `;
    })
    .join("");
}
