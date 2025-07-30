import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [priority, setPriority] = useState('low')

  const addTask = () => {
    const taskText = inputValue.trim()
    if (taskText === '') {
      alert('할일을 입력해주세요')
      return
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: taskText,
        completed: false,
        priority: priority
      }
    ])
    setInputValue('')
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const clearAllTasks = () => {
    if (tasks.length === 0) {
      alert('삭제할 할 일이 없습니다.')
      return
    }
    setTasks([])
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="container">
      <h1>할 일 목록</h1>
      <div>
        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">낮음</option>
          <option value="high">높음</option>
        </select>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>추가</button>
        <button onClick={clearAllTasks}>전체 삭제</button>
      </div>
      <div id="taskCount">현재 할 일: <span>{tasks.length}</span>개</div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <span
              onClick={() => toggleTask(task.id)}
              className={`${task.completed ? 'completed' : ''} ${task.priority === 'high' ? 'f-red' : ''}`}
            >
              {task.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
