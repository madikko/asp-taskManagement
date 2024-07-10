import React from 'react'
import styles from './get.module.css'

export default function Getstarted() {
  return (
    <div className={styles.form}>
      <form>
        <fieldset>
          <legend>Create A New Task</legend>        
        <ul>
          <li>
            <input type='text' name='title' id='title' placeholder='Task title' defaultValue={''} required/>
          </li>
          <li>
            <input type='text' name='description' id='description' placeholder='Task description' defaultValue={''} required/>
          </li>
          <li>
            <input type='date' name='dueDate' id='dueDate'  defaultValue={''} required/>
          </li>
          <li>
            <button className='uppercase'>Create a task</button>
          </li>
        </ul>
        </fieldset>
      </form>
    </div>
  )
}
