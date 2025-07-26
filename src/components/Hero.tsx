import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      className='relative w-full'
      style={{
        background:
          'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Banner Image */}
      <div className='w-full min-h-48 md:min-h-[500px] overflow-hidden'>
        <img
          src='/truthonaut-banner.jpg'
          alt='Truthonaut'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Hero Content */}
      <div className='py-12 px-4 text-center'>
        <div className='w-full max-w-none mx-auto'>
          <h1
            className='text-3xl md:text-4xl font-bold mb-3 tracking-widest word-break: break-all'
            style={{
              color: '#e2e8f0',
              fontFamily:
                'Orbitron, monospace'
            }}
          >
            TRUTHONAUT
          </h1>
          <p
            className='text-xl md:text-2xl mb-6 max-w-2xl mx-auto'
            style={{ color: '#94a3b8' }}
          >
            A Gamified Path for Cosmic
            Explorers and Truth Seekers
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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
              Unlock your Truthonaut
              Rank
            </button>
            <button
              style={{
                backgroundColor:
                  'transparent',
                color: '#a5b4fc',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                border:
                  '2px solid #818cf8',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  '#6366f1'
                e.currentTarget.style.color =
                  'white'
                e.currentTarget.style.borderColor =
                  '#6366f1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  'transparent'
                e.currentTarget.style.color =
                  '#a5b4fc'
                e.currentTarget.style.borderColor =
                  '#818cf8'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
