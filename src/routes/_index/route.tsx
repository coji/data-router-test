import { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import reactLogo from '~/assets/react.svg'
import viteLogo from '/vite.svg'

export const loader = () => {
  return { message: 'Hello from loader' }
}

export default function App() {
  const [count, setCount] = useState(0)
  const { message } = useLoaderData<typeof loader>()

  return (
    <div className="mx-auto max-w-7xl p-8 text-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noopener">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin motion-safe:[animation-duration:20s]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-8 text-5xl font-bold">Vite + React</h1>
      <div className="mb-4 text-lg">{message}</div>
      <Link to="/form">Form</Link>
      <div className="p-8">
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-gray-700"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit{' '}
          <code className="rounded bg-gray-100 px-2 py-1">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
