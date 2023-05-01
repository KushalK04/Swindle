import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/quiz.module.css';
import BottomNav from '@/Components/NavBarBottom';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const questions = [
    {
      question: 'You receive a call from an unknown number and they want your bank details. What do you do?',
      options: ['Give them your bank details', 'Hang up and block the number', 'Ask for more information about the call'],
      answer: 'Hang up and block the number',
    },
    {
      question: 'You receive an email claiming you have won a lottery that you never entered. What should you do?',
      options: ['Reply with your personal information', 'Ignore the email', 'Report the email as spam'],
      answer: 'Report the email as spam',
    },
    {
      question: 'You receive a message on social media from someone you dont know offering you a job that pays a lot of money. What should you do?',
      options: ['Accept the job offer and provide your personal information', 'Ask for more information about the job and the company', 'Ignore the message'],
      answer: 'Ask for more information about the job and the company',
    },
    {
      question: 'You receive a phone call from someone claiming to be a government official asking for your personal information. What should you do?',
      options: ['Give them your personal information', 'Hang up and call the government officials office to verify the call', 'Ask for more information about the call'],
      answer: 'Hang up and call the government officials office to verify the call',
    },
    {
      question: 'You receive a message on your phone or email asking you to click on a link to claim a prize or enter a contest. What should you do?',
      options: ['Report the message as spam', 'Ignore the message', 'Click on the link and enter your information'],
      answer: 'Report the message as spam',
    },
    {
      question: 'You receive a message from a friend on social media asking for money. What should you do?',
      options: ['Verify with your friend that the message is legitimate', 'Ignore the message', 'Send them the money'],
      answer: 'Verify with your friend that the message is legitimate',
    },
    {
      question: 'You receive a call from someone claiming to be from your bank and asking for your personal information. What should you do?',
      options: ['Ask for more information about the call', 'Give them your personal information', 'Hang up and call your banks customer service to verify the call'],
      answer: 'Hang up and call your banks customer service to verify the call',
    },
    {
      question: 'You receive a message on social media from someone claiming to be a long-lost relative and asking for money. What should you do?',
      options: ['Send them the money', 'Verify with your family members if the person is legitimate', 'Ignore the message'],
      answer: 'Verify with your family members if the person is legitimate',
    },
    {
      question: 'You receive a message on your phone or email asking you to download a file to claim a prize or enter a contest. What should you do?',
      options: ['Download the file and enter your information', 'Report the message as spam', 'Ignore the message'],
      answer: 'Ignore the message',
    },
    {
      question: 'You receive a phone call from someone claiming to be a charity and asking for a donation. What should you do?',
      options: ['Hang up and research the charity before making a donation', 'Give them your credit card information', 'Ask for more information about the charity and the call'],
      answer: 'Hang up and research the charity before making a donation',
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestionIndex]: answer }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const score = Object.keys(answers).reduce(
    (totalScore, questionIndex) =>
      answers[questionIndex] === questions[questionIndex].answer ? totalScore + 1 : totalScore,
    0
  );

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <>
        <Head>
          <title>Swindle Quiz</title>
          <meta name="description" content="Test your knowledge with our Swindle quiz" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Layer_1(3).svg" />
        </Head>
        <main className={styles.main}>
          <div>
            <div className={styles.container}>
              <h3>{currentQuestion.question}</h3>
            </div> 
            {currentQuestion.options.map((option, optionIndex) => (
              <div key={optionIndex} className={styles.button}>
                <input
                  type="radio"
                  id={`${optionIndex}`}
                  name={`${currentQuestionIndex}`}
                  value={option}
                  onChange={(event) => handleAnswer(event.target.value)}
                  checked={answers[currentQuestionIndex] === option}
                />
                <label htmlFor={`${optionIndex}`}>{option}</label>
              </div>
            ))}
            {currentQuestionIndex > 0 && (
              <button onClick={handleBack} className={styles.back}>Back</button>
            )}
          </div>
          <BottomNav />
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Swindle Quiz</title>
        <meta name="description" content="Test your knowledge with our Swindle quiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.scrollbar}>
          <p>Your score: {score}/{questions.length}</p>
          <h2>Review your answers:</h2>
          <div>
            {questions.map((question, index) => (
              <div key={index} className={styles.cont}>
                <p>{question.question}</p>
                <p className={styles.youranswer}>Your answer: {answers[index]}</p>
                {answers[index] === question.answer ? (
                  <p className={styles.correct}>Correct!</p>
                ) : (
                  <p className={styles.incorrect}>Incorrect. The correct answer is: {question.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <BottomNav />
      </main>
    </>
  );
}  