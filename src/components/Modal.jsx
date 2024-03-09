export default function Modal({ open, children }) {
  return (
    <div className={`fixed ${open ? 'display' : 'hidden'} insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[100]`}>
      <dialog className={`top-[10%] relative md:absolute md:top-0 block rounded-md bg-white-bone shadow-xl ${open ? 'visible bg-back/20 inset-0  z-[100]' : 'invisible'}`}>
        <div className={`${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          {children}
        </div>
      </dialog>
    </div>
  )
}
