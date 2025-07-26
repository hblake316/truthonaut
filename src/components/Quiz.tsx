import React, { useState } from 'react'

const Quiz: React.FC = () => {
  const [
    currentQuestion,
    setCurrentQuestion
  ] = useState(0)
  const [answers, setAnswers] =
    useState<number[]>([])
  const [
    selectedTier,
    setSelectedTier
  ] = useState<string>('')

  const questions = [
    {
      question:
        'What pulls you toward the unknown?',
      options: [
        "A need to understand what's hidden",
        "A feeling that I've been here before",
        'Because something out there is calling me',
        'I want to witness what others deny is real'
      ]
    },
    {
      question:
        'When you encounter something unexplainable, how do you respond?',
      options: [
        'I stay present and observe without judgment.',
        'I analyze it—I need to understand the mechanics.',
        'I act on it—I share, record, or use it to guide others.',
        'I reflect on it and listen inwardly.'
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

    // Store tier based on question answers
    if (currentQuestion === 0) {
      const tierMap = {
        0: 'decoder',
        1: 'dreamwalker',
        2: 'activator',
        3: 'observer'
      }
      setSelectedTier(
        tierMap[
          answerIndex as keyof typeof tierMap
        ]
      )
    } else if (currentQuestion === 1) {
      const tierMap = {
        0: 'observer',
        1: 'decoder',
        2: 'activator',
        3: 'dreamwalker'
      }
      setSelectedTier(
        tierMap[
          answerIndex as keyof typeof tierMap
        ]
      )
    }

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
      console.log(
        'Selected tier:',
        selectedTier
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
              setSelectedTier('')
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
        <p
          className='text-xs text-center mb-2'
          style={{
            color: '#84cc16',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          // ACCESSING MAINFRAME: RANK
          SEQUENCE LOADED
        </p>
        <h2
          className='text-3xl font-bold text-center mb-2'
          style={{
            color: '#e2e8f0',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          TRUTHONAUT RANK CONSOLE
        </h2>
        <p
          className='text-sm text-center mb-8'
          style={{
            color: '#94a3b8',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          Begin assessment to determine
          your Truthonaut tier.
        </p>
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
