import React from 'react'

const Media: React.FC = () => {
  const mediaItems = [
    {
      title: 'The Art of Questioning',
      description:
        'Learn how to ask better questions to uncover deeper truths',
      type: 'Article',
      readTime: '5 min read'
    },
    {
      title:
        'Cognitive Biases in Truth-Seeking',
      description:
        'Understanding the mental shortcuts that can lead us astray',
      type: 'Video',
      duration: '12 min'
    },
    {
      title: 'Evidence-Based Thinking',
      description:
        'A practical guide to evaluating claims and evidence',
      type: 'Podcast',
      duration: '45 min'
    }
  ]

  return (
    <section
      className='py-16 px-4 w-full'
      style={{
        backgroundColor:
          'rgba(22, 33, 62, 0.3)'
      }}
    >
      <div className='w-full max-w-6xl mx-auto'>
        <h2
          className='text-3xl font-bold text-center mb-12'
          style={{ color: '#e2e8f0' }}
        >
          Explore & Learn
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {mediaItems.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor:
                    'rgba(26, 26, 46, 0.8)',
                  backdropFilter:
                    'blur(8px)',
                  borderRadius: '8px',
                  padding: '24px',
                  border:
                    '1px solid rgba(99, 102, 241, 0.2)',
                  transition:
                    'all 0.2s',
                  boxShadow:
                    '0 0 20px rgba(132, 204, 22, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(26, 26, 46, 0.9)'
                  e.currentTarget.style.borderColor =
                    'rgba(99, 102, 241, 0.4)'
                  e.currentTarget.style.boxShadow =
                    '0 0 25px rgba(132, 204, 22, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(26, 26, 46, 0.8)'
                  e.currentTarget.style.borderColor =
                    'rgba(99, 102, 241, 0.2)'
                  e.currentTarget.style.boxShadow =
                    '0 0 20px rgba(132, 204, 22, 0.08)'
                }}
              >
                <div className='flex items-center justify-between mb-3'>
                  <span
                    className='text-sm font-semibold'
                    style={{
                      color: '#84cc16'
                    }}
                  >
                    {item.type}
                  </span>
                  <span
                    className='text-sm'
                    style={{
                      color: '#94a3b8'
                    }}
                  >
                    {item.readTime ||
                      item.duration}
                  </span>
                </div>
                <h3
                  className='text-xl font-semibold mb-2'
                  style={{
                    color: '#ec4899'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className='text-sm leading-relaxed mb-4'
                  style={{
                    color: '#94a3b8'
                  }}
                >
                  {item.description}
                </p>
                <button
                  className='font-medium text-sm transition-colors'
                  style={{
                    color: 'white',
                    backgroundColor:
                      '#6366f1',
                    border:
                      '1px solid #6366f1',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    textShadow:
                      '0 0 8px rgba(99, 102, 241, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      '#4f46e5'
                    e.currentTarget.style.borderColor =
                      '#4f46e5'
                    e.currentTarget.style.textShadow =
                      '0 0 12px rgba(99, 102, 241, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      '#6366f1'
                    e.currentTarget.style.borderColor =
                      '#6366f1'
                    e.currentTarget.style.textShadow =
                      '0 0 8px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  Read More →
                </button>
              </div>
            )
          )}
        </div>

        <div className='text-center mt-12'>
          <button
            style={{
              backgroundColor:
                '#6366f1',
              color: 'white',
              padding: '12px 32px',
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
            Browse All Content
          </button>
        </div>
      </div>
    </section>
  )
}

export default Media
