import { useState } from 'react'
import { generateId } from '../utils/generateId'

const useReminders = () => {
  const [reminders, setReminders] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)

  function handleSubmitReminder(newReminder) {
    const reminder = {
      ...newReminder,
      id: generateId(),
      date: selectedDate.toDateString(),
    }
    setReminders((prevReminders) => [...prevReminders, reminder])
  }

  function handleEditReminder(editedReminder) {
    setReminders((prevReminders) =>
      prevReminders.map((reminder) =>
        reminder.id === editedReminder.id ? editedReminder : reminder
      )
    )
  }

  return {
    reminders,
    setReminders,
    selectedDate,
    setSelectedDate,
    handleSubmitReminder,
    handleEditReminder,
  }
}

export default useReminders
