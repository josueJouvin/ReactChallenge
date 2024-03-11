const DaysOfWeek = () => {
  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

  return (
    <>
      {daysOfWeek.map((day, index) => (
        <div className='text-center font-bold text-lg mb-8' key={index}>
          {day}
        </div>
      ))}
    </>
  )
}

export default DaysOfWeek
