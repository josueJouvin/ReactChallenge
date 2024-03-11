import { useState } from 'react'
import useReminders from '../hooks/useReminders'
import Modal from './Modal'
import DaysOfMonth from './DaysOfMonth'
import PreviousDays from './PreviousDays'
import DaysOfWeek from './DaysOfWeek'

const Calendar = () => {
  const [modal, setModal] = useState(false)
  const [editReminder, setEditReminder] = useState({})
  const {
    selectedDate,
    reminders,
    setSelectedDate,
    handleSubmitReminder,
    handleEditReminder,
  } = useReminders()
  const today = new Date()

  function handleModal(date) {
    setModal(!modal)
    setSelectedDate(date)
  }

  return (
    <div className='flex h-screen justify-center items-center -mt-5'>
      {modal && (
        <Modal
          setModal={setModal}
          handleSubmitReminder={handleSubmitReminder}
          handleEditReminder={handleEditReminder}
          editReminder={editReminder}
          setEditReminder={setEditReminder}
          selectedDate={selectedDate}
        />
      )}
      <div className='lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4'>
        <div className='bg-white/90 shadow-lg rounded-lg overflow-hidden'>
          <div className='flex items-center justify-center px-6 py-3 bg-blue-600 text-xl font-semibold text-white'>
            Marzo 2024
          </div>
          <div className='grid grid-cols-7 gap-3 p-4'>
            <DaysOfWeek />
            <PreviousDays today={today} />
            <DaysOfMonth
              reminders={reminders}
              today={today}
              handleModal={handleModal}
              setEditReminder={setEditReminder}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
