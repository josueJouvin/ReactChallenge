import { AddReminder } from '../Icons'
import { daysOfMonth } from '../utils/daysOfMonth'

const DaysOfMonth = ({ today, handleModal, reminders, setEditReminder }) => {
  function handleClick(reminder) {
    handleModal()
    setEditReminder(reminder)
  }
  return (
    <>
      {daysOfMonth(today).map((day, index) => {
        const date = new Date(today.getFullYear(), today.getMonth(), day)
        const dateString = date.toDateString()
        const remindersForDay = reminders.filter(
          (reminder) => reminder.date === dateString
        )

        return (
          <div className='p-2 border rounded-md border-blue-200' key={index}>
            <div className='flex flex-col gap-4 lg:gap-3 justify-between h-full'>
              <span className='mb-1 font-semibold text-lg'>{day}</span>
              {remindersForDay.map((reminder, index) => (
                <div
                  onClick={() => handleClick(reminder)}
                  className='overflow-hidden lg:hover:overflow-ellipsis text-nowrap cursor-pointer hover:lg:scale-105 font-medium bg-blue-300 text-center rounded-lg px-1'
                  key={index}
                >
                  {reminder.nameReminder}
                </div>
              ))}
              <AddReminder showModal={() => handleModal(date)} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DaysOfMonth
