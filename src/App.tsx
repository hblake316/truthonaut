// Truthonaut: Interplanetary Philosopher
// React + Vite + TailwindCSS Scaffold

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { useState } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import type { NodeObject } from 'force-graph'

const books = [
  {
    title: 'The Day After Roswell',
    author: 'Philip J. Corso',
    category: 'Government Projects',
    link: 'https://amzn.to/...'
  },
  {
    title: 'Communion',
    author: 'Whitley Strieber',
    category: 'Contactee Stories',
    link: 'https://amzn.to/...'
  },
  {
    title: 'Penetration',
    author: 'Ingo Swann',
    category: 'Remote Viewing',
    link: 'https://amzn.to/...'
  }
]

const graphData = {
  nodes: [
    { id: 'UFOs', group: 'topic' },
    {
      id: 'Project Blue Book',
      group: 'book'
    },
    {
      id: 'The Black Vault Podcast',
      group: 'podcast'
    },
    {
      id: 'Remote Viewing',
      group: 'topic'
    },
    { id: 'Penetration', group: 'book' }
  ],
  links: [
    {
      source: 'UFOs',
      target: 'Project Blue Book'
    },
    {
      source: 'UFOs',
      target: 'The Black Vault Podcast'
    },
    {
      source: 'Remote Viewing',
      target: 'Penetration'
    }
  ]
}

export const Home = () => (
  <div className='relative h-screen flex flex-col items-center justify-center text-center bg-black text-white p-8'>
    <div>
      <img
        src='images/watercolor-truthonaut.jpg'
        alt='Truthonaut Logo'
        className='mx-auto mb-6 w-24 h-24 object-contain'
      />
      <h1 className='text-5xl font-bold mb-2 tracking-tight'>
        Truthonaut
      </h1>
      <h2 className='text-xl italic mb-6'>
        Interplanetary Philosopher
      </h2>
      <p className='max-w-xl mx-auto mb-8 text-gray-300'>
        Explore the unknown with curated
        books, brain-twisting quizzes,
        and a growing map of the
        unexplainable.
      </p>
      <Link
        to='/quiz'
        className='bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700'
      >
        Take the Quiz
      </Link>
    </div>
  </div>
)

export const Quiz = () => (
  <div className='p-6'>
    <h2 className='text-2xl font-bold mb-4'>
      What Type of Truthonaut Are You?
    </h2>
    <p>
      Embed a Typeform or build your own
      quiz logic here.
    </p>
  </div>
)

export const Books = () => (
  <div className='p-6'>
    <h2 className='text-2xl font-bold mb-4'>
      Curated Book List
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {books.map((book, idx) => (
        <div
          key={idx}
          className='border p-4 rounded shadow'
        >
          <h3 className='text-xl font-semibold'>
            {book.title}
          </h3>
          <p className='text-sm text-gray-600'>
            by {book.author}
          </p>
          <p className='text-sm italic mb-2'>
            {book.category}
          </p>
          <a
            href={book.link}
            target='_blank'
            className='text-blue-500 underline'
          >
            Buy on Amazon
          </a>
        </div>
      ))}
    </div>
  </div>
)

export const Gear = () => (
  <div className='p-6'>
    <h2 className='text-2xl font-bold mb-4'>
      Official Truthonaut Gear
    </h2>
    <p className='mb-4'>
      Mockups coming soon! T-shirts,
      mugs, and more.
    </p>
  </div>
)

export const Map = () => {
  const [hoverNode, setHoverNode] =
    useState<NodeObject | null>(null)
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>
        Rabbit Hole Map
      </h2>
      <div className='h-[500px] border rounded'>
        <ForceGraph3D
          graphData={graphData}
          nodeLabel='id'
          nodeAutoColorBy='group'
          onNodeHover={(node) =>
            setHoverNode(node)
          }
          onNodeClick={(node) =>
            alert(
              `Clicked node: ${node.id}`
            )
          }
        />
      </div>
      {hoverNode && (
        <p className='mt-4 text-sm'>
          Hovering: {hoverNode.id}
        </p>
      )}
    </div>
  )
}

export const Podcasts = () => {
  const featured = [
    {
      title: 'The Black Vault',
      host: 'John Greenewald Jr.',
      summary:
        'Deep dives into declassified documents and government files related to UFOs and beyond.',
      link: 'https://www.theblackvault.com/podcast/'
    },
    {
      title: 'Somewhere in the Skies',
      host: 'Ryan Sprague',
      summary:
        'Personal witness accounts and expert interviews exploring the UFO phenomenon.',
      link: 'https://somewhereintheskies.com/podcast/'
    }
  ]

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>
        Featured Podcasts
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {featured.map(
          (podcast, idx) => (
            <div
              key={idx}
              className='border p-4 rounded shadow'
            >
              <h3 className='text-xl font-semibold'>
                {podcast.title}
              </h3>
              <p className='text-sm text-gray-600'>
                Host: {podcast.host}
              </p>
              <p className='text-sm mb-2'>
                {podcast.summary}
              </p>
              <a
                href={podcast.link}
                target='_blank'
                className='text-blue-500 underline'
              >
                Listen Now
              </a>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export const Navbar = () => (
  <nav className='bg-gray-800 text-white p-4 flex justify-center gap-4'>
    <Link
      to='/'
      className='hover:underline'
    >
      Home
    </Link>
    <Link
      to='/quiz'
      className='hover:underline'
    >
      Quiz
    </Link>
    <Link
      to='/books'
      className='hover:underline'
    >
      Books
    </Link>
    <Link
      to='/gear'
      className='hover:underline'
    >
      Gear
    </Link>
    <Link
      to='/map'
      className='hover:underline'
    >
      Map
    </Link>
    <Link
      to='/podcasts'
      className='hover:underline'
    >
      Podcasts
    </Link>
  </nav>
)

export const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/quiz'
        element={<Quiz />}
      />
      <Route
        path='/books'
        element={<Books />}
      />
      <Route
        path='/gear'
        element={<Gear />}
      />
      <Route
        path='/map'
        element={<Map />}
      />
      <Route
        path='/podcasts'
        element={<Podcasts />}
      />
    </Routes>
  </Router>
)

export default App
