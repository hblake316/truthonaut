import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer
      className='py-12 px-4 mt-auto w-full'
      style={{
        backgroundColor:
          'rgba(15, 15, 35, 0.6)',
        borderTop:
          '1px solid rgba(99, 102, 241, 0.2)'
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
              Embarking on a journey of
              discovery and
              truth-seeking. Join our
              community of curious
              minds.
            </p>
            <div className='flex space-x-4'>
              <button
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
                <span className='sr-only'>
                  Twitter
                </span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </button>
              <button
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
                <span className='sr-only'>
                  Discord
                </span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z' />
                </svg>
              </button>
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
                  Articles
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
                  Videos
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
                  Community
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
                  Privacy
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
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className='text-center mt-8 pt-8'
          style={{
            borderTop:
              '1px solid rgba(99, 102, 241, 0.2)'
          }}
        >
          <p
            style={{ color: '#94a3b8' }}
          >
            © 2024 Truthonaut. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
