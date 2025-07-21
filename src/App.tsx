// Truthonaut Starter Project
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

function Home() {
  return (
    <div className='p-6 text-center'>
      <h1 className='text-4xl font-bold mb-4'>
        Welcome to Truthonaut
      </h1>
      <p className='mb-6'>
        Explore the unknown. Smarter.
      </p>
      <Link
        to='/quiz'
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Take the Quiz
      </Link>
    </div>
  )
}

function Quiz() {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>
        What Type of Truthonaut Are You?
      </h2>
      <p>
        Embed a Typeform or build your
        own quiz logic here.
      </p>
    </div>
  )
}

function Books() {
  return (
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
}

function Gear() {
  return (
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
}

function Map() {
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

function Navbar() {
  return (
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
    </nav>
  )
}

function App() {
  return (
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
      </Routes>
    </Router>
  )
}

export default App
