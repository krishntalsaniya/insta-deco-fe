import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <>
      <Breadcrumb title={"Signin"} pages={["Signin"]} />
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[770px] mx-auto rounded-2xl bg-white shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Left Illustration */}
            <div className="hidden md:block bg-gradient-to-br from-purple-600 to-blue-500 relative">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Welcome Back!</h3>
                <p className="opacity-90">
                  Sign in to continue your journey with us
                </p>
                <div className="mt-8 w-full max-w-[200px]">
                  <img
                    src="https://imgs.search.brave.com/FCbIYdcUvdnc1cljKlzRv3DpNSB551f4wSMtvmYAuMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b21wdXRlci1zZWN1/cml0eS13aXRoLWxv/Z2luLXBhc3N3b3Jk/LXBhZGxvY2tfMTA3/NzkxLTE2MTkxLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
                    alt="Authentication"
                    className="w-full h-auto animate-float"
                  />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-8 sm:p-12 xl:p-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Sign In 🔐
                </h2>
                <p className="text-gray-500">
                  Unlock your account with your credentials
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pr-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-purple-600 hover:text-purple-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pr-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3.5 px-6 rounded-lg font-semibold transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-purple-200"
                >
                  Continue →
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {/* <svg className="w-5 h-5" viewBox="0 0 48 48">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                    </svg> */}
                    <span className="text-sm font-medium">Google</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {/* <svg className="w-5 h-5" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg> */}
                    <span className="text-sm font-medium">GitHub</span>
                  </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Dont have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-purple-600 hover:text-purple-500 transition-colors"
                  >
                    Sign up here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
