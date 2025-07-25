import React, { useState } from 'react'

const Quiz: React.FC = () => {
  const [
    currentQuestion,
    setCurrentQuestion
  ] = useState(0)
  const [answers, setAnswers] =
    useState<number[]>([])

  const questions = [
    {
      question:
        'What drives your quest for truth?',
      options: [
        'Curiosity',
        'Skepticism',
        'Open-mindedness',
        'All of the above'
      ]
    },
    {
      question:
        'How do you approach conflicting information?',
      options: [
        'Research multiple sources',
        'Trust authority figures',
        'Follow intuition',
        'Avoid the conflict'
      ]
    },
    {
      question:
        "What's your preferred method of learning?",
      options: [
        'Reading',
        'Discussion',
        'Experimentation',
        'Observation'
      ]
    }
  ]

  const handleAnswer = (
    answerIndex: number
  ) => {
    const newAnswers = [
      ...answers,
      answerIndex
    ]
    setAnswers(newAnswers)

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      )
    } else {
      // Quiz completed
      console.log(
        'Quiz completed:',
        newAnswers
      )
    }
  }

  if (
    currentQuestion >= questions.length
  ) {
    return (
      <section
        className='py-16 px-4 w-full'
        style={{
          backgroundColor:
            'rgba(15, 15, 35, 0.3)'
        }}
      >
        <div className='w-full max-w-2xl mx-auto text-center'>
          <h2
            className='text-3xl font-bold mb-4'
            style={{ color: '#e2e8f0' }}
          >
            Quiz Complete!
          </h2>
          <p
            className='mb-6'
            style={{ color: '#94a3b8' }}
          >
            Thank you for exploring your
            truth-seeking journey.
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0)
              setAnswers([])
            }}
            style={{
              backgroundColor:
                '#6366f1',
              color: 'white',
              padding: '8px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition:
                'background-color 0.2s',
              boxShadow:
                '0 4px 6px rgba(99, 102, 241, 0.3)'
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                '#4f46e5')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                '#6366f1')
            }
          >
            Take Quiz Again
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      className='py-16 px-4 w-full'
      style={{
        backgroundColor:
          'rgba(15, 15, 35, 0.3)'
      }}
    >
      <div className='w-full max-w-2xl mx-auto'>
        <h2
          className='text-3xl font-bold text-center mb-8'
          style={{ color: '#e2e8f0' }}
        >
          Truth Seeker Quiz
        </h2>
        <div
          style={{
            backgroundColor:
              'rgba(26, 26, 46, 0.8)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            padding: '24px',
            border:
              '1px solid rgba(99, 102, 241, 0.2)',
            boxShadow:
              '0 0 20px rgba(132, 204, 22, 0.1)'
          }}
        >
          <h3
            className='text-xl mb-6'
            style={{ color: '#e2e8f0' }}
          >
            Question{' '}
            {currentQuestion + 1} of{' '}
            {questions.length}
          </h3>
          <p
            className='text-lg mb-8'
            style={{ color: '#94a3b8' }}
          >
            {
              questions[currentQuestion]
                .question
            }
          </p>
          <div className='space-y-3'>
            {questions[
              currentQuestion
            ].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(index)
                  }
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '16px',
                    backgroundColor:
                      'rgba(99, 102, 241, 0.1)',
                    color: '#e2e8f0',
                    border:
                      '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition:
                      'all 0.2s',
                    fontSize: '16px',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'rgba(99, 102, 241, 0.2)'
                    e.currentTarget.style.borderColor =
                      'rgba(99, 102, 241, 0.5)'
                    e.currentTarget.style.boxShadow =
                      index % 2 === 0
                        ? '0 0 15px rgba(132, 204, 22, 0.3)'
                        : '0 0 15px rgba(236, 72, 153, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'rgba(99, 102, 241, 0.1)'
                    e.currentTarget.style.borderColor =
                      'rgba(99, 102, 241, 0.3)'
                    e.currentTarget.style.boxShadow =
                      'none'
                  }}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz
