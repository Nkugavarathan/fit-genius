import { useState } from "react"
import axios from "axios"

export default function Register() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/auth/register", form)
    alert("Registered! Now Login")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button>Register</button>
    </form>
  )
}
