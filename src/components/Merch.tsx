import React from 'react'

const Merch: React.FC = () => {
  const merchItems = [
    {
      name: 'Truthonaut T-Shirt',
      price: '$24.99',
      image:
        '/src/assets/merch-shirt.png',
      description:
        'Comfortable cotton tee with the Truthonaut logo'
    },
    {
      name: 'Truth Seeker Mug',
      price: '$14.99',
      image:
        '/src/assets/merch-mug.png',
      description:
        'Start your day with a reminder to seek truth'
    },
    {
      name: 'Knowledge Poster',
      price: '$19.99',
      image:
        '/src/assets/merch-poster.png',
      description:
        'Beautiful poster with truth-seeking quotes'
    }
  ]

  return (
    <section
      className='py-16 px-4 w-full'
      style={{
        backgroundColor:
          'rgba(15, 15, 35, 0.3)'
      }}
    >
      <div className='w-full max-w-6xl mx-auto'>
        <h2
          className='text-3xl font-bold text-center mb-12'
          style={{ color: '#e2e8f0' }}
        >
          Truthonaut Merch
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {merchItems.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor:
                    'rgba(26, 26, 46, 0.8)',
                  backdropFilter:
                    'blur(8px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border:
                    '1px solid rgba(99, 102, 241, 0.2)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(26, 26, 46, 0.9)'
                  e.currentTarget.style.borderColor =
                    'rgba(99, 102, 241, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(26, 26, 46, 0.8)'
                  e.currentTarget.style.borderColor =
                    'rgba(99, 102, 241, 0.2)'
                }}
              >
                <div
                  className='h-48 flex items-center justify-center'
                  style={{
                    background:
                      'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3730a3 100%)'
                  }}
                >
                  <div
                    className='text-4xl font-bold opacity-20'
                    style={{
                      color: '#e2e8f0'
                    }}
                  >
                    {
                      item.name.split(
                        ' '
                      )[0]
                    }
                  </div>
                </div>
                <div className='p-6'>
                  <h3
                    className='text-xl font-semibold mb-2'
                    style={{
                      color: '#e2e8f0'
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className='text-sm mb-4'
                    style={{
                      color: '#94a3b8'
                    }}
                  >
                    {item.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span
                      className='text-2xl font-bold'
                      style={{
                        color: '#a5b4fc'
                      }}
                    >
                      {item.price}
                    </span>
                    <button
                      style={{
                        backgroundColor:
                          '#6366f1',
                        color: 'white',
                        padding:
                          '8px 16px',
                        borderRadius:
                          '8px',
                        fontWeight:
                          '600',
                        border: 'none',
                        cursor:
                          'pointer',
                        transition:
                          'background-color 0.2s'
                      }}
                      onMouseEnter={(
                        e
                      ) =>
                        (e.currentTarget.style.backgroundColor =
                          '#4f46e5')
                      }
                      onMouseLeave={(
                        e
                      ) =>
                        (e.currentTarget.style.backgroundColor =
                          '#6366f1')
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className='text-center mt-12'>
          <p
            className='mb-4'
            style={{ color: '#94a3b8' }}
          >
            Support the truth-seeking
            community
          </p>
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
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default Merch
