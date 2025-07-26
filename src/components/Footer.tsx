import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer
      className='py-12 px-4 mt-auto w-full'
      style={{
        backgroundColor:
          'rgba(15, 15, 35, 0.6)',
        borderTop:
          '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow:
          '0 -4px 20px rgba(132, 204, 22, 0.1)'
      }}
    >
      <div className='w-full max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <h3
              className='text-2xl font-bold mb-4'
              style={{
                color: '#e2e8f0'
              }}
            >
              Truthonaut
            </h3>
            <p
              className='mb-4 max-w-md'
              style={{
                color: '#94a3b8'
              }}
            >
              Part quiz, part cult (just
              kidding... kind of). Tap
              in. Rank up. Join the
              seekers charting strange
              new truths.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.instagram.com/truthonaut/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors'
                style={{
                  color: '#94a3b8'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    '#ec4899'
                  e.currentTarget.style.transform =
                    'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    '#94a3b8'
                  e.currentTarget.style.transform =
                    'scale(1)'
                }}
              >
                <span className='sr-only'>
                  Instagram
                </span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4
              className='font-semibold mb-4'
              style={{
                color: '#e2e8f0'
              }}
            >
              Resources
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='transition-colors'
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      '#e2e8f0')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      '#94a3b8')
                  }
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='transition-colors'
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      '#e2e8f0')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      '#94a3b8')
                  }
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='transition-colors'
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      '#e2e8f0')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      '#94a3b8')
                  }
                >
                  Substack
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className='font-semibold mb-4'
              style={{
                color: '#e2e8f0'
              }}
            >
              Support
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='transition-colors'
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      '#e2e8f0')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      '#94a3b8')
                  }
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='transition-colors'
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      '#e2e8f0')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      '#94a3b8')
                  }
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className='text-center mt-8 pt-8'
          style={{
            borderTop:
              '1px solid rgba(99, 102, 241, 0.2)',
            boxShadow:
              '0 -2px 10px rgba(132, 204, 22, 0.05)'
          }}
        >
          <p
            style={{ color: '#94a3b8' }}
          >
            © 2025 Truthonaut. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
