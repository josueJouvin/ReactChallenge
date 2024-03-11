export function AddReminder({ showModal }) {
  return (
    <div onClick={showModal}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='bg-blue-200 rounded-full p-1 cursor-pointer lg:hover:scale-125'
        width='22'
        height='22'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12 5l0 14' />
        <path d='M5 12l14 0' />
      </svg>
    </div>
  )
}
