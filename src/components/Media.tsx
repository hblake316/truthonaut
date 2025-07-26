import React from 'react'

const Media: React.FC = () => {
  const mediaItems = [
    {
      title:
        'Truthonaut Log 001: Transdimensional Mapping',
      description:
        "I joined remote viewer Birdie Jaworski for a deep-dive into non-local consciousness. No spoilers—but let's just say the map isn't the territory… and the territory might not be physical at all. This log captures the process, impressions, and the strange familiarity of exploring a target with no coordinates—just intent.",
      type: 'Substack',
      readTime: 'by Truthonaut'
    },
    {
      title: 'The Simulated Multiverse',
      description:
        "Are we living one life—or all of them at once?\nIn this mind-bender follow-up to The Simulation Hypothesis, MIT's Rizwan Virk dives deeper into the idea that we're in a rendered reality—like a cosmic video game running infinite timelines in parallel. Quantum theory, simulation logic, and sci-fi-level thinking collide as he explores how multiple realities, Mandela effects, and time glitches might actually be code-level features of our universe.",
      type: 'Book',
      duration: 'by Rizwan Virk'
    },
    {
      title:
        'The Man Who Attracts UFOs - Chris Bledsoe - Full Documentary',
      description:
        "Glowing orbs. Lost time. Government eyes everywhere.\nChris Bledsoe's encounters go way beyond UFOs—mysterious beings, messages from \"The Lady,\" and deep-state interest collide in a story that's part contact, part cover-up. This doc dives into the full case: abductions, regressions, and secrets nobody's supposed to know.",
      type: 'Podcast',
      duration: 'from AREA 52'
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
        <p
          className='text-xs text-center mb-2'
          style={{
            color: '#84cc16',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          // FILE ACCESS: DECLASSIFIED
        </p>
        <h2
          className='text-3xl font-bold text-center mb-2'
          style={{
            color: '#e2e8f0',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          DEBRIEF CONSOLE: ACTIVE
        </h2>
        <p
          className='text-sm text-center mb-12'
          style={{
            color: '#94a3b8',
            fontFamily:
              'Orbitron, monospace'
          }}
        >
          last updated:{' '}
          <span
            style={{ color: '#84cc16' }}
          >
            {new Date().toLocaleDateString()}
          </span>
        </p>
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
                {item.type ===
                'Book' ? (
                  <a
                    href='https://a.co/d/ab9dd3b'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-medium text-sm transition-colors inline-block'
                    style={{
                      color: 'white',
                      backgroundColor:
                        '#6366f1',
                      border:
                        '1px solid #6366f1',
                      borderRadius:
                        '6px',
                      padding:
                        '4px 8px',
                      textShadow:
                        '0 0 8px rgba(99, 102, 241, 0.3)',
                      textDecoration:
                        'none'
                    }}
                    onMouseEnter={(
                      e
                    ) => {
                      e.currentTarget.style.backgroundColor =
                        '#4f46e5'
                      e.currentTarget.style.borderColor =
                        '#4f46e5'
                      e.currentTarget.style.textShadow =
                        '0 0 12px rgba(99, 102, 241, 0.5)'
                    }}
                    onMouseLeave={(
                      e
                    ) => {
                      e.currentTarget.style.backgroundColor =
                        '#6366f1'
                      e.currentTarget.style.borderColor =
                        '#6366f1'
                      e.currentTarget.style.textShadow =
                        '0 0 8px rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    Buy the Book
                  </a>
                ) : item.type ===
                  'Podcast' ? (
                  <a
                    href='https://youtu.be/vQqErgnc_3g?si=usKBpT72Q5VuZtCv'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-medium text-sm transition-colors inline-block'
                    style={{
                      color: 'white',
                      backgroundColor:
                        '#6366f1',
                      border:
                        '1px solid #6366f1',
                      borderRadius:
                        '6px',
                      padding:
                        '4px 8px',
                      textShadow:
                        '0 0 8px rgba(99, 102, 241, 0.3)',
                      textDecoration:
                        'none'
                    }}
                    onMouseEnter={(
                      e
                    ) => {
                      e.currentTarget.style.backgroundColor =
                        '#4f46e5'
                      e.currentTarget.style.borderColor =
                        '#4f46e5'
                      e.currentTarget.style.textShadow =
                        '0 0 12px rgba(99, 102, 241, 0.5)'
                    }}
                    onMouseLeave={(
                      e
                    ) => {
                      e.currentTarget.style.backgroundColor =
                        '#6366f1'
                      e.currentTarget.style.borderColor =
                        '#6366f1'
                      e.currentTarget.style.textShadow =
                        '0 0 8px rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    Watch the Episode
                  </a>
                ) : (
                  <button
                    className='font-medium text-sm transition-colors'
                    style={{
                      color: 'white',
                      backgroundColor:
                        '#6366f1',
                      border:
                        '1px solid #6366f1',
                      borderRadius:
                        '6px',
                      padding:
                        '4px 8px',
                      textShadow:
                        '0 0 8px rgba(99, 102, 241, 0.3)'
                    }}
                    onMouseEnter={(
                      e
                    ) => {
                      e.currentTarget.style.backgroundColor =
                        '#4f46e5'
                      e.currentTarget.style.borderColor =
                        '#4f46e5'
                      e.currentTarget.style.textShadow =
                        '0 0 12px rgba(99, 102, 241, 0.5)'
                    }}
                    onMouseLeave={(
                      e
                    ) => {
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
                )}
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
            Open the Archive
          </button>
        </div>
      </div>
    </section>
  )
}

export default Media
