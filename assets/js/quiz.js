// Questions

const questions = [
    {
      question: "What is the scientific name for a lion?",
      options: ["Panthera leo", "Panthera tigris", "Panthera pardus"],
      answer: "a"
    },
    {
      question: "What is the largest animal in the world?",
      options: ["Blue Whale", "Elephant", "Giraffe"],
      answer: "a"
    },
    {
      question: "What is the scientific name for a butterfly?",
      options: ["Lepidoptera", "Hymenoptera", "Coleoptera"],
      answer: "a"
    },
    {
      question: "What is the name of the only venomous primate?",
      options: ["Baboon", "Slow loris", "Capuchin monkey"],
      answer: "b"
    },
    {
      question: "What is the name of the only bird that can fly backwards?",
      options: ["Pelican", "Hummingbird", "Albatross"],
      answer: "b"
    },
    {
      question: "What is the name of the animal that can run the fastest?",
      options: ["Cheetah", "Horse", "Greyhound"],
      answer: "a"
    },
    {
      question: "What is the name of the largest marsupial?",
      options: ["Kangaroo", "Wallaby", "Wombat"],
      answer: "a"
    },
    {
      question: "What is the name of the animal that can hold its breath the longest?",
      options: ["Sperm whale", "Elephant", "Crocodile"],
      answer: "a"
    },
    {
      question: "What is the name of the only venomous snake found in the United Kingdom?",
      options: ["Adder", "Cobra", "Rattlesnake"],
      answer: "a"
    },
    {
      question: "What is the name of the animal that has the longest tongue relative to its body size?",
      options: ["Chameleon", "Giraffe", "Anteater"],
      answer: "c"
    },
    {
      question: "What is the name of the only species of bear that is native to South America?",
      options: ["Grizzly bear", "Black bear", "Spectacled bear"],
      answer: "c"
    },
    {
      question: "What is the name of the animal that can survive being frozen solid and then thawed?",
      options: ["Polar bear", "Tardigrade", "Penguin"],
      answer: "b"
    },
    {
      question: "What is the name of the animal that is sometimes referred to as the flying fox?",
      options: ["Lemur", "Squirrel", "Bat"],
      answer: "c"
    },
    {
      question: "What is the name of the animal that can produce its own sunscreen?",
      options: ["Hippopotamus", "Flamingo", "Alligator"],
      answer: "b"
    },
    {
      question: "What is the name of the animal that has the longest lifespan?",
      options: ["Tortoise", "Bowhead whale", "Greenland shark"],
      answer: "c"
    },
    
  ];

// Shuffle Array

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
// Tracker

  let currentQuestion = 0;
  let score = 0;
  
// Ref to HTML

  const questionText = document.getElementById("question-text");
  const answerTextA = document.getElementById("answer-text-a");
  const answerTextB = document.getElementById("answer-text-b");
  const answerTextC = document.getElementById("answer-text-c");
  const answerBtnA = document.getElementById("answer-btn-a");
  const answerBtnB = document.getElementById("answer-btn-b");
  const answerBtnC = document.getElementById("answer-btn-c");
  const scoreText = document.getElementById("score");

// Shuffle

  shuffleArray(questions);


// Question Text Update

  function showQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    answerTextA.textContent = `A: ${current.options[0]}`;
    answerTextB.textContent = `B: ${current.options[1]}`;
    answerTextC.textContent = `C: ${current.options[2]}`;
  }


// Listener Restart BTN

  document.getElementById("restart-quiz-btn").addEventListener("click", () => {
    document.location.reload();
  });


// Checks Answer & Update Score

  function checkAnswer(answer) {
    const current = questions[currentQuestion];
    if (answer === current.answer) {
      score++;
      scoreText.textContent = score;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      document.getElementById("final-score").textContent = score;
      document.getElementById("end-message").style.display = "block";
      document.getElementById("restart-btn").style.display = "block";
    }
  }
  

// Answer BTN Listener

  answerBtnA.addEventListener("click", () => checkAnswer("a"));
  answerBtnB.addEventListener("click", () => checkAnswer("b"));
  answerBtnC.addEventListener("click", () => checkAnswer("c"));


// First Q

  showQuestion();