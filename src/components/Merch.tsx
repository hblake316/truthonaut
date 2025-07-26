import React from 'react'
import merchShirt from '../assets/merch-shirt.png'

const Merch: React.FC = () => {
  const merchItems = [
    {
      name: 'Truthonaut T-Shirt',
      price: '$24.99',
      image: merchShirt,
      description:
        'Comfortable cotton tee with the Truthonaut logo'
    },
    {
      name: 'Truthonaut Mug',
      price: '$14.99',
      image: '/mug.jpg',
      description:
        'Decode. Declassify. Drink.'
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
        <p
          className='text-xs text-center mb-2'
          style={{
            color: '#84cc16',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          // FIELD OPS EQUIPMENT: READY
          FOR DEPLOYMENT
        </p>
        <h2
          className='text-3xl font-bold text-center mb-2'
          style={{
            color: '#e2e8f0',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          FIELD GEAR CONSOLE
        </h2>
        <p
          className='text-sm text-center mb-12'
          style={{
            color: '#94a3b8',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          high-vibe goods for field
          missions
        </p>
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
                {item.name ===
                'Truthonaut Mug' ? (
                  <div className='h-64 flex items-center justify-center overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ) : (
                  <div
                    className='h-64 flex items-center justify-center'
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
                )}
                <div className='p-6'>
                  <h3
                    className='text-xl font-semibold mb-2'
                    style={{
                      color: '#84cc16'
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
                        color: '#ec4899'
                      }}
                    >
                      {item.price}
                    </span>
                    {item.name ===
                    'Truthonaut T-Shirt' ? (
                      <a
                        href='https://www.bonfire.com/truthonaut-tee/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          backgroundColor:
                            '#6366f1',
                          color:
                            'white',
                          padding:
                            '8px 16px',
                          borderRadius:
                            '8px',
                          fontWeight:
                            '600',
                          border:
                            'none',
                          cursor:
                            'pointer',
                          transition:
                            'background-color 0.2s',
                          textDecoration:
                            'none',
                          display:
                            'inline-block'
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
                        View Item
                      </a>
                    ) : item.name ===
                      'Truthonaut Mug' ? (
                      <a
                        href='https://truthonaut.printful.me/product/truthonaut-mug-decode-declassify-drink'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          backgroundColor:
                            '#6366f1',
                          color:
                            'white',
                          padding:
                            '8px 16px',
                          borderRadius:
                            '8px',
                          fontWeight:
                            '600',
                          border:
                            'none',
                          cursor:
                            'pointer',
                          transition:
                            'background-color 0.2s',
                          textDecoration:
                            'none',
                          display:
                            'inline-block'
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
                        View Item
                      </a>
                    ) : (
                      <button
                        style={{
                          backgroundColor:
                            '#6366f1',
                          color:
                            'white',
                          padding:
                            '8px 16px',
                          borderRadius:
                            '8px',
                          fontWeight:
                            '600',
                          border:
                            'none',
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
                        View Item
                      </button>
                    )}
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
            Issued to all active
            Truthonauts.
          </p>
          <a
            href='https://truthonaut.printful.me/'
            target='_blank'
            rel='noopener noreferrer'
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
                '0 4px 6px rgba(99, 102, 241, 0.3)',
              textDecoration: 'none',
              display: 'inline-block'
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
            Access All Gear
          </a>
        </div>
      </div>
    </section>
  )
}

export default Merch
