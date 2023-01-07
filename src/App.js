import React from 'react'

const App = () => {
  const [formData, setFormData] = React.useState(
    {firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: false,
    employment: '',
    color: ''
    })

  function handleChange(e){
    const {type, name, value, checked} = e.target
    setFormData(prevData => {
      return {
        ...prevData, [name]: type ==='checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formData.firstName}
            name='firstName'
            placeholder='First Name'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={formData.lastName}
            name='lastName'
            placeholder='Last Name'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={formData.email}
            name='email'
            placeholder='Email'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            value={formData.comments}
            name='comments'
            onChange={handleChange}
          >
            Comments
          </textarea>
        </div>
        <div>
          <input
            type='checkbox'
            onChange={handleChange}
            id='isFriendly'
            checked={formData.isFriendly}
            name='isFriendly'
          />
          <label htmlFor='isFriendly'> Is Friendly</label>
        </div>
        <fieldset>
          <legend>Current Employment Status</legend>
          <input
            type='radio'
            id='unemployed'
            name='employment'
            value='unemployed'
            checked={formData.employment === 'unemployed'}
            onChange={handleChange}
          />
          <label htmlFor='unemployed'> Unemployed</label>
          <input
            type='radio'
            id='part-time'
            name='employment'
            value='part-time'
            checked={formData.employment === 'part-time'}
            onChange={handleChange}
          />
          <label htmlFor='part-time'> Part-Time</label>
          <input
            type='radio'
            id='full-time'
            name='employment'
            value='full-time'
            checked={formData.employment === 'full-time'}
            onChange={handleChange}
          />
          <label htmlFor='full-time'> Full-time</label>
        </fieldset>
        <label htmlFor='color'>Choose a color </label><br/>
        <select
        id='color'
        name='color'
        onChange={handleChange} >
          <option value=''>--Choose Color--</option>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='yellow'>Yellow</option>
        </select><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App