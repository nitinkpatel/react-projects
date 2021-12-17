import React, { useState } from 'react'
import data from './data'
import List from './List'

export default function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">

        <h4>{people.length} birthdays today</h4>

        <List people={people} />
        <button onClick={() =>
          setPeople([])}>
          clear
        </button>
      </section>

    </main>
  )
}
