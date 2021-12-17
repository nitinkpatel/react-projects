import React from "react"

export default function List({ people }) {

  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="name" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>

        )
      }
      )
      }
    </>
  )
}