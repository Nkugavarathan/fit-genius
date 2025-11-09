import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md">
      <h1 className="font-bold text-xl">FitTrack</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reminder">Reminder</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
