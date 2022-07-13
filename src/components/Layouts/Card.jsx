import { useState } from "react"

export default function Card ({character}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div key={character.id} className="shadow-sm rounded-md border-gray-100 w-1/3 p-2">
      <div className='flex flex-nowrap shadow rounded-md shadow-black'>
        <div className='w-1/2 text-left mx-auto p-3 grid'>
          <p className='text-sm text-black'> Name:
            <span className='text-gray-600'> { character.name } </span>
          </p>
          <p className='text-sm text-black'> Status:
            <span className='text-red-600'> { character.status } </span>
          </p>
          <p className='text-sm text-black'> Gender:
            <span className='text-red-600'> { character.gender } </span>
          </p>

          <button
            className="bg-white text-green-500 border border-green-500 active:bg-green-600 font-bold uppercase text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            View Info
          </button>
        </div>
        <div className='w-1/2'>
          <img src={character.image} alt="Personaje" />
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 w-96 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    { character.name }
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-left">
                  <p>Origin: <span> { character.origin.name } </span> </p>
                  <p>Location: <span> { character.location.name } </span> </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}