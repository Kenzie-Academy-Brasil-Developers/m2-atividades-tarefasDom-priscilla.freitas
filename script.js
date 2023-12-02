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
    // declara a variável que selecionar a ul
    const list = document.querySelector("ul");

    list.innerHTML = "";

    // para cada task, chama a function createTaskItem, 
    //passando uma task 
    //e retornando uma li     
    for (let i = 0; i < tasks.length; i++) {
        const tasksLi = createTaskItem(tasks[i]);

        //colocando tasksLi dentro da ul
        list.appendChild(tasksLi);
    }

}


renderElements(tasks)

function createTaskItem(object) {
    //criação de li
    const liItem = document.createElement("li")
    // criação div
    const divContainer = document.createElement("div")

    // criação de span e p
    const spanType = document.createElement("span")
    const pName = document.createElement("p")

    // criação do botão remove
    const btnRemove = document.createElement("button")

    // substituindo texto de p
    pName.innerText = object.title;

    // adicionado as classes ao div e span
    liItem.classList.add("task__item")
    divContainer.classList.add("task-info__container")
    spanType.classList.add("task-type")
    btnRemove.classList.add("task__button--remove-task")

    // de acordo com o tipo será atribuido a classe ao elemento span
    if (object.type.toLowerCase() === "urgente") {
        spanType.classList.add("span-urgent")
    } else if (object.type.toLowerCase() === "importante") {
        spanType.classList.add("span-important")
    } else if (object.type.toLowerCase() === "normal") {
        spanType.classList.add("span-normal")
    }

    // colocando span e p dentro da div
    divContainer.append(spanType, pName);

    // colocando a div dentro da li    
    liItem.append(divContainer);


    // colocando button dentro da li
    liItem.append(btnRemove)

    //retornando li
    return (liItem)
}
