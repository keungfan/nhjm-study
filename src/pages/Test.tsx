import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PhotoFrame from '../components/PhotoFrame';
import '../styles/Test.css';

interface TestQuestion {
  num1: number;
  op1: string;
  num2: number;
  num3: number;
  op2: string;
  num4: number;
  result1: number;
  result2: number;
  correctAnswer: string; // '<', '=', '>'
}

export default function Test() {
  const { t } = useTranslation();
  const [numQuestions, setNumQuestions] = useState(10);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [points, setPoints] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    generateQuestions();
  }, [numQuestions]);

  const generateQuestions = () => {
    const newQuestions: TestQuestion[] = [];
    for (let i = 0; i < numQuestions; i++) {
      let num1 = Math.floor(Math.random() * 99) + 1;
      let num2 = Math.floor(Math.random() * 99) + 1;
      let num3 = Math.floor(Math.random() * 99) + 1;
      let num4 = Math.floor(Math.random() * 99) + 1;

      const op1 = Math.random() > 0.5 ? '+' : '−';
      const op2 = Math.random() > 0.5 ? '+' : '−';

      // Ensure positive results for subtraction and results ≤ 100 for addition
      if (op1 === '−' && num1 < num2) {
        [num1, num2] = [num2, num1]; // Swap to ensure num1 >= num2
      } else if (op1 === '+' && num1 + num2 > 100) {
        num2 = 100 - num1; // Adjust num2 to ensure sum ≤ 100
      }
      
      if (op2 === '−' && num3 < num4) {
        [num3, num4] = [num4, num3]; // Swap to ensure num3 >= num4
      } else if (op2 === '+' && num3 + num4 > 100) {
        num4 = 100 - num3; // Adjust num4 to ensure sum ≤ 100
      }

      const result1 = op1 === '+' ? num1 + num2 : num1 - num2;
      const result2 = op2 === '+' ? num3 + num4 : num3 - num4;

      let correctAnswer: string;
      if (result1 < result2) {
        correctAnswer = '<';
      } else if (result1 > result2) {
        correctAnswer = '>';
      } else {
        correctAnswer = '=';
      }

      newQuestions.push({
        num1,
        op1,
        num2,
        num3,
        op2,
        num4,
        result1,
        result2,
        correctAnswer,
      });
    }
    setQuestions(newQuestions);
    setAnswers(new Array(numQuestions).fill(''));
    setPoints(null);
    setCurrentQuestion(0);
  };

  const handleAnswerChange = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleTest = () => {
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
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
    <div className="test-page">
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

            <button onClick={generateQuestions} className="reset-button">
              🔄 {t('buttons.retake')}
            </button>
          </div>

          <div className="question-container">
            <h1>{t('buttons.test')} 🧪</h1>
            <p className="instruction">{t('test.choose')}</p>
            
            <div className="comparison-question">
              <div className="left-side">
                <span className="number">{question.num1}</span>
                <span className="operator">{question.op1}</span>
                <span className="number">{question.num2}</span>
              </div>

              <div className="comparison-buttons">
                <button
                  className={`comparison-btn less-btn ${answers[currentQuestion] === '<' ? 'selected' : ''}`}
                  onClick={() => handleAnswerChange('<')}
                  title={t('test.lessThan')}
                >
                  &lt;
                </button>
                <button
                  className={`comparison-btn equal-btn ${answers[currentQuestion] === '=' ? 'selected' : ''}`}
                  onClick={() => handleAnswerChange('=')}
                  title={t('test.equal')}
                >
                  =
                </button>
                <button
                  className={`comparison-btn greater-btn ${answers[currentQuestion] === '>' ? 'selected' : ''}`}
                  onClick={() => handleAnswerChange('>')}
                  title={t('test.greaterThan')}
                >
                  &gt;
                </button>
              </div>

              <div className="right-side">
                <span className="number">{question.num3}</span>
                <span className="operator">{question.op2}</span>
                <span className="number">{question.num4}</span>
              </div>
            </div>

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
              ✅ {t('buttons.check')}
            </button>

            {points !== null && (
              <div className="results">
                <h2>🎉 {t('results.correct')}</h2>
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
