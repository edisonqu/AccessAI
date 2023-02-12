import Logo from '../Assets/AccessAI_logo.svg'
import React from "react";
export default function Hero(){
      const [showModal, setShowModal] = React.useState(false);

    return(
        <>
  <div className="isolate bg-white">
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">

    </div>
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">AccessAI</span>
            <img
              className="h-16"
              src={Logo}
              alt="Logo"
            />
          </a>
        </div>

      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div role="dialog" aria-modal="true">
        <div
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src={Logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              {/* Heroicon name: outline/x-mark */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Access<span className={"text-green-600"}>AI</span> without Wifi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
          Access to AI models through your phone, anywhere you go.
              <div className={"font-bold"}>Send a message through SMS, get an AI generated response back.</div>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setShowModal(true)}

              >
                Get started
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
     {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-4xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold flex justify-center item-center">
                                        AccessAI Terms of Service


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
                                <div className="relative p-6">

                                    <p className="my-4 text-slate-500 text-sm flex justify-center flex-col items-center">
                                      {/*<span className={"font-bold text-xl text-black flex justify-center items-center"}>Welcome to AccessAI, a cutting-edge SMS messaging app powered by artificial intelligence. </span>*/}
                                      <div><span className={"text-xl"}>By using our app, you agree to be bound by the following terms and conditions (the "Terms"). If you do not agree to these Terms, please do not use our app.</span></div>
<br/>
                                      <div className={"flex justify-start"}><span className={'font-bold text-black  '}>Use of AccessAI</span></div>
AccessAI grants you a limited, non-exclusive, non-transferable license to use our app for personal, non-commercial purposes in accordance with these Terms. You may not use our app for any illegal or unauthorized purpose.


                                                                            <span className={'font-bold text-black '}>Third Party Services</span>
                                      <div>AccessAI uses third-party services, such as <span className={"text-red-700 font-bold text-lg"}>Twilio</span>, <span className={"text-gray-700 font-bold text-lg"}>Co:here</span>, and OpenAI, to provide certain features and functionality of our app. By using these services, you agree to be bound by the terms and conditions of these third-party services.</div>
                                                                            <span className={'font-bold text-black '}>Disclaimers</span>
AccessAI provides the app on an "as is" and "as available" basis, and makes no warranties, express or implied, as to the operation of our app or the information, content, materials, or products included on or accessible through our app. AccessAI does not guarantee that our app will be uninterrupted or error-free, and will not be liable for any interruption or errors.
                                                                            <span className={'font-bold text-black '}>Limitation of Liability</span>

AccessAI shall not be liable for any damages arising out of or in connection with your use of our app, including but not limited to indirect, incidental, special, or consequential damages.

                                      <br/>

                                                                            <span className={'font-bold text-black '}>Changes to These Terms</span>

AccessAI reserves the right to modify these Terms at any time. Your continued use of our app after any changes to these Terms indicates your acceptance of the revised Terms.
                                      <br/>
                                      <br/>

                                                                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Back
                                    </button>
                                    <a
                                        className="bg-green-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        href={"sms:+14509906969?&body=Why is the sky blue?"}
                                    >
                                        Message
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
  </div>
</>

    )
}
