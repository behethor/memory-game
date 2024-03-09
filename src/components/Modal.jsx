export default function Modal ({ open, children }) {
  return (
    <div className={`fixed ${open ? 'display' : 'hidden'} insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}>
      <dialog className={`modal top-[10%] relative md:absolute md:top-0 flex rounded-md bg-white-bone shadow-xl ${open ? 'visible bg-back/20 inset-0  z-50' : 'invisible'}`}>
        <div className={`modal-box ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          {children}
        </div>
      </dialog>
    </div>
  )
}
