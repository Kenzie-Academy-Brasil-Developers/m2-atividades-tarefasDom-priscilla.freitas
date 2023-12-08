const tasks = [
    { title: "Comprar comida para o gato", type: "Urgente" },
    { title: "Consertar Computador", type: "Importante" },
    { title: "Beber água", type: "Normal" },
    { title: "Enviar relatório trimestral", type: "Importante" },
    { title: "Fazer exercícios físicos", type: "Normal" },
    { title: "Agendar consulta médica", type: "Urgente" },
    { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
    { title: "Limpar a despensa", type: "Importante" },
    { title: "Pagar a conta de energia", type: "Urgente" },
    { title: "Assistir a um documentário interessante", type: "Normal" },
];


function renderElements(tasks) {
    const list = document.querySelector("ul");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const tasksLi = createTaskItem(tasks[i]);

        list.appendChild(tasksLi);
    }


}


const botao = document.querySelector(".form__button--add-task");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("input_title").value;
    const tipo = document.querySelector(".form__input--priority").value;

    const task = {
        title: titulo,
        type: tipo
    }

    tasks.push(task);

    renderElements(tasks)
});

renderElements(tasks)


function createTaskItem(object) {
    const liItem = document.createElement("li")
    const divContainer = document.createElement("div")
    const spanType = document.createElement("span")
    const pName = document.createElement("p")
    const btnRemove = document.createElement("button")

    pName.innerText = object.title;

    liItem.classList.add("task__item")
    divContainer.classList.add("task-info__container")
    spanType.classList.add("task-type")
    btnRemove.classList.add("task__button--remove-task")

    if (object.type.toLowerCase() === "urgente") {
        spanType.classList.add("span-urgent")
    } else if (object.type.toLowerCase() === "importante") {
        spanType.classList.add("span-important")
    } else if (object.type.toLowerCase() === "normal") {
        spanType.classList.add("span-normal")

    }
    btnRemove.addEventListener("click", function () {
        const index = tasks.indexOf(object)

        tasks.splice(index, 1)

        renderElements(tasks)
    });

    divContainer.append(spanType, pName);
    liItem.append(divContainer);

    liItem.append(btnRemove)

    return (liItem)

}

