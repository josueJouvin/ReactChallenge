import { previousDays } from '../utils/previousDays'

const PreviousDays = ({ today }) => {
  return (
    <>
      {previousDays(today).map((pastDays, index) => (
        <div className='text-gray-600 opacity-20' key={index}>
          {pastDays}
        </div>
      ))}
    </>
  )
}

export default PreviousDays
