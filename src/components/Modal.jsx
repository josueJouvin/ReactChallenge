import { useEffect, useState } from 'react'
import { weatherApi } from '../services/weather'
const Modal = ({
  setModal,
  selectedDate,
  handleSubmitReminder,
  editReminder,
  handleEditReminder,
  setEditReminder,
}) => {
  const [reminder, setReminder] = useState({
    nameReminder: '',
    time: '',
    city: '',
  })
  const [weather, setWeather] = useState(null)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (editReminder.id) {
      setReminder(editReminder)
    } else {
      setReminder({
        nameReminder: '',
        time: '',
        city: '',
      })
    }
  }, [editReminder])

  useEffect(() => {
    const getWeatherForecast = async () => {
      if (reminder.city !== '') {
        try {
          const forecastData = await weatherApi({
            city: reminder.city,
            date: selectedDate || editReminder.date,
          })
          setWeather(forecastData)
        } catch (error) {
          console.error(error)
          setWeather(null)
        }
      }
    }

    getWeatherForecast()
  }, [reminder.city, selectedDate, editReminder])

  function handleChangeReminder(e) {
    const { name, value } = e.target
    setReminder({ ...reminder, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!Object.values(reminder).every((value) => value.trim() !== '')) {
      setAlert('All fields are required')
      return
    }

    if (editReminder.id) {
      handleEditReminder({ ...reminder, weather })
    } else {
      handleSubmitReminder({ ...reminder, weather })
    }
    setReminder({
      nameReminder: '',
      time: '',
      city: '',
    })
    setEditReminder({})
    setModal(false)
  }

  function handleClose() {
    setModal(false)
    setReminder({
      nameReminder: '',
      time: '',
      city: '',
    })
    setEditReminder({})
  }

  return (
    <section className='absolute inset-0'>
      <div className='inset-0 fixed grid place-items-center bg-gray-800/80 overflow-y-auto z-50 py-3 md:py-10'>
        <div className='bg-white p-2 rounded-lg w-5/6 md:w-2/3 lg:w-2/5'>
          <div className='flex justify-between items-center font-semibold text-black px-4'>
            <p className='text-xl leading-7 mt-2 '>Reminder</p>
            <div
              onClick={handleClose}
              className='text-2xl font-bold cursor-pointer lg:hover:scale-125'
            >
              X
            </div>
          </div>
          {alert && (
            <p className='text-red-600 my-2 font-semibold text-center'>
              {alert}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 p-4 w-full'
          >
            <input
              className='border border-indigo-500 rounded-md shadow-md p-2 w-full'
              type='text'
              name='nameReminder'
              id='nameReminder'
              placeholder='Buy Tickets, Employment meeting'
              value={reminder.nameReminder}
              onChange={handleChangeReminder}
              maxLength={30}
            />
            <input
              className='border border-indigo-500 rounded-md shadow-md p-2 w-full'
              type='time'
              name='time'
              id='time'
              value={reminder.time}
              onChange={handleChangeReminder}
            />
            <input
              className='border border-indigo-500 rounded-md shadow-md p-2 w-full'
              type='text'
              name='city'
              id='city'
              placeholder='Quito, Guayaquil, Cuenca'
              value={reminder.city}
              onChange={handleChangeReminder}
              maxLength={30}
            />
            {weather ? (
              <div className='flex flex-col justify-center'>
                <p className='text-center font-semibold'>
                  {weather.pronosticoCompleto}
                </p>
                <p className='text-center font-semibold'>
                  Temperatura promedio: {weather.meanTemperature}
                </p>
                <p className='text-center font-semibold'>
                  Condicion del clima: {weather.condition}
                </p>
              </div>
            ) : (
              <p className='text-center font-semibold'>Esperando Ciudad...</p>
            )}
            <button
              type='submit'
              className='block pt-3 pb-3 pl-5 pr-5 bg-indigo-600 hover:bg-indigo-800 transition-all text-white leading-5 font-medium w-full rounded-lg uppercase'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Modal
