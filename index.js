
const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  //const colorDiv = `
  //  <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  //`

//   details.innerHTML = `
//     <ul>
//       <li>Name: ${personName}</li>
//       <li>Hair Color: ${colorDiv}</li>
//       <li>Age: ${age}</li>
//       <li>Birthplace: ${birthplace}</li>
//     </ul>
//   `

    const ul = document.createElement('ul')

    const em = document.createElement('li')
    em.textContent = 'Name: ' + personName 
    details.appendChild(em)
    //em.textContent = 'Hair Color: ' + colorDiv
    const am = document.createElement('li')
     am.textContent = 'Hair Color'
    // am.style.background = hairColor

    am.style.width = '100px'
    am.style.height = '50px'
    am.style.backgroundColor = hairColor
    details.appendChild(am)
    const am2 = document.createElement('li')
    am2.textContent = 'Age: ' + age
    details.appendChild(am2)
    const am3 = document.createElement('li')
    am3.textContent = 'Birthplace: ' + birthplace
    details.appendChild(am3)

    
}

personForm.addEventListener('submit', handleSubmit)