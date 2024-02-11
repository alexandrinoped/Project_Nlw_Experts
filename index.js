const questions = [
  {
    question: "O que significa a sigla DOM em JavaScript?",
    answers: [
      "Documento Original de Manipulação",
      "Modelo de Objeto de Documento",
      "Desenvolvimento Orientado a Módulos",
    ],
    correct: 1
  },
  {
    question: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
    answers: [
      "var",
      "let",
      "const",
    ],
    correct: 2
  },
  {
    question: "Qual é a função do operador '===' em comparações em JavaScript?",
    answers: [
      "Comparação de valor e tipo",
      "Atribuição de valor",
      "Compara apenas o valor",
    ],
    correct: 1
  },
  {
    question: "Como se refere ao ato de combinar dois arrays em JavaScript?",
    answers: [
      "Merge",
      "Concatenação",
      "Interseção",
    ],
    correct: 1
  },
  {
    question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    answers: [
      "append()",
      "addToEnd()",
      "push()",
    ],
    correct: 2
  },
  {
    question: "Qual é a função do método 'querySelector' em JavaScript?",
    answers: [
      "Seleciona um elemento pelo seu ID",
      "Seleciona um elemento pelo nome da tag",
      "Seleciona um elemento pela classe",
    ],
    correct: 1
  },
  {
    question: "O que é um callback em JavaScript?",
    answers: [
      "Uma função que é executada imediatamente",
      "Uma função que é passada como argumento para outra função",
      "Uma função que retorna um valor booleano",
    ],
    correct: 2
  },
  {
    question: "Qual é a finalidade do método 'map' em arrays JavaScript?",
    answers: [
      "Filtrar elementos de um array",
      "Criar um novo array com o resultado de uma função aplicada a cada elemento",
      "Inverter a ordem dos elementos em um array",
    ],
    correct: 1
  },
  {
    question: "O que é o conceito de 'hoisting' em JavaScript?",
    answers: [
      "Elevar o nível de acesso de uma variável",
      "Levantar variáveis e funções para o topo do escopo antes da execução do código",
      "Elevar a prioridade de execução de um bloco de código",
    ],
    correct: 1
  },
  {
    question: "Qual é a principal diferença entre 'null' e 'undefined' em JavaScript?",
    answers: [
      "São equivalentes e podem ser usados indistintamente",
      "Null é atribuído explicitamente, enquanto undefined é atribuído automaticamente",
      "Undefined é usado para valores não definidos, enquanto null é usado para valores vazios",
    ],
    correct: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = questions.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(let item of questions) {
  const quizItem  = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for(let answer of item.answers) {
    const dt = quizItem.querySelector('dl dt'). cloneNode(true)
    dt.querySelector('span').textContent = answer
    dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
    dt.querySelector('input').value = item.answers.indexOf(answer)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correct

      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }





    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()


  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}