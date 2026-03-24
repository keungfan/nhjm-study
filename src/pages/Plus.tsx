import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PhotoFrame from '../components/PhotoFrame';
import '../styles/MathPage.css';

interface Question {
  num1: number;
  num2: number;
  answer: number;
}

export default function Plus() {
  const { t } = useTranslation();
  const [numQuestions, setNumQuestions] = useState(10);
  const [isVertical, setIsVertical] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [points, setPoints] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    generateQuestions();
  }, [numQuestions]);

  const generateQuestions = () => {
    const newQuestions: Question[] = [];
    for (let i = 0; i < numQuestions; i++) {
      let num1 = Math.floor(Math.random() * 99) + 1;
      let num2 = Math.floor(Math.random() * 99) + 1;
      
      // Ensure addition results are ≤ 100
      if (num1 + num2 > 100) {
        num2 = 100 - num1 - Math.floor(Math.random() * 33);
      }
      
      newQuestions.push({
        num1,
        num2,
        answer: num1 + num2,
      });
    }
    setQuestions(newQuestions);
    setAnswers(new Array(numQuestions).fill(''));
    setPoints(null);
    setCurrentQuestion(0);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleCheckQuestion = () => {
    const userAnswer = parseInt(answers[currentQuestion]);
    const isCorrect = userAnswer === questions[currentQuestion].answer;
    const newCheckedQuestions = { ...checkedQuestions };
    newCheckedQuestions[currentQuestion] = isCorrect;
    setCheckedQuestions(newCheckedQuestions);
  };

  const handleRevealAnswer = () => {
    const newRevealedAnswers = { ...revealedAnswers };
    newRevealedAnswers[currentQuestion] = !newRevealedAnswers[currentQuestion];
    setRevealedAnswers(newRevealedAnswers);
  };

  const handleTest = () => {
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (parseInt(answer) === questions[index].answer) {
        correctCount++;
      }
    });
    setPoints(correctCount);
  };

  const handleNext = () => {
    if (currentQuestion < numQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestion];

  return (
    <div className="math-page">
      <div className="page-header">
        <Link to="/" className="home-button">⬅️ {t('buttons.home')}</Link>
        <LanguageSwitcher />
      </div>

      <div className="page-content">
        <div className="main-column">
          <div className="settings-panel">
            <label>
              {t('settings.questions')}
              <input
                type="number"
                min="1"
                max="50"
                value={numQuestions}
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
              />
            </label>

            <label className="toggle-label">
              <input
                type="checkbox"
                checked={isVertical}
                onChange={(e) => setIsVertical(e.target.checked)}
              />
              {t('settings.layout')}
            </label>

            <button onClick={generateQuestions} className="reset-button">
              🔄 {t('buttons.retake')}
            </button>
          </div>

          <div className="question-container">
            <h1>{t('buttons.addition')} Problems 📚</h1>
            
            <div className={`question ${isVertical ? 'vertical' : 'horizontal'}`}>
              <div className="operation">
                <div className="number">{question.num1}</div>
                <div className="operator">+</div>
                <div className="number">{question.num2}</div>
                {isVertical && <div className="line"></div>}
              </div>
            </div>

            <div className="input-section">
              <input
                type="number"
                value={answers[currentQuestion]}
                onChange={handleAnswerChange}
                placeholder="="
                className="answer-input"
                min="0"
              />
              <button
                onClick={handleCheckQuestion}
                className="check-question-btn"
              >
                {t('buttons.check')}
              </button>
            </div>

            {checkedQuestions[currentQuestion] !== undefined && (
              <div className={`question-feedback ${checkedQuestions[currentQuestion] ? 'correct' : 'incorrect'}`}>
                <p>
                  {checkedQuestions[currentQuestion]
                    ? `✅ ${t('results.correct')}`
                    : `❌ ${t('results.incorrect')}`}
                </p>
                {!checkedQuestions[currentQuestion] && (
                  <button
                    onClick={handleRevealAnswer}
                    className="reveal-answer-btn"
                  >
                    {revealedAnswers[currentQuestion] ? t('feedback.hideAnswer') : t('feedback.showAnswer')}
                  </button>
                )}
                {!checkedQuestions[currentQuestion] && revealedAnswers[currentQuestion] && (
                  <p className="correct-answer">
                    {t('results.correctAnswer')}: <strong>{questions[currentQuestion].answer}</strong>
                  </p>
                )}
              </div>
            )}

            <div className="navigation-buttons">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="nav-btn"
              >
                ⬅️ {t('buttons.previous')}
              </button>

              <span className="question-counter">
                {currentQuestion + 1} / {numQuestions}
              </span>

              <button
                onClick={handleNext}
                disabled={currentQuestion === numQuestions - 1}
                className="nav-btn"
              >
                {t('buttons.next')} ➡️
              </button>
            </div>

            <button onClick={handleTest} className="test-button">
              ✅ {t('buttons.checkAll')}
            </button>

            {points !== null && (
              <div className="results">
                <h2>🎉 {t('results.score')}</h2>
                <p className="score">
                  {points} {t('results.outOf')} {numQuestions}!
                </p>
                <div className="stars">
                  {Array.from({ length: Math.min(points, 5) }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="sidebar">
          <PhotoFrame position="left" />
          <PhotoFrame position="right" />
        </div>
      </div>
    </div>
  );
}
