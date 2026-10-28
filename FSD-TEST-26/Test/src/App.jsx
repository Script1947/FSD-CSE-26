
import React, { useState } from 'react'
import Admin from './components/Admin'
import Student from './components/Student'
import Teacher from './components/Teacher'

const App = () => {

  const [dashboard, setDashboard] = useState("Home")

  return (
    <div>
      <h1>Online Test System</h1>

      <button onClick={() => setDashboard("Admin")}>
        Admin Dashboard
      </button>

      <button onClick={() => setDashboard("Student")}>
        Student Dashboard
      </button>

      <button onClick={() => setDashboard("Teacher")}>
        Teacher Dashboard
      </button>

      {dashboard === "Admin" && <Admin />}

      {dashboard === "Student" && <Student />}

      {dashboard === "Teacher" && <Teacher />}

    </div>
  )
}

export default App
