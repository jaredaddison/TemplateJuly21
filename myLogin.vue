<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="
        flex-1 flex flex-col
        justify-center
        py-12
        px-4
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      "
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-gray-400.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Veterinary Nurse Training Resource
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Helping Vets
            {{ " " }}
            <router-link to="/" class="font-medium text-vetpartners hover:text-vetpartners">
              save Pets
            </router-link>
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <div class="mt-1 grid grid-cols-3 gap-3">
                <div>
                  <router-link
                    to="/"
                    class="
                      w-full
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      bg-white
                      text-sm
                      font-medium
                      text-gray-500
                      hover:bg-gray-50
                    "
                  >
                    <span class="sr-only">Sign in with Facebook</span>
                    <heroicons-solid:mail />
                  </router-link>
                </div>

                <div>
                  <router-link
                    to="/"
                    class="
                      w-full
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      bg-white
                      text-sm
                      font-medium
                      text-gray-500
                      hover:bg-gray-50
                    "
                  >
                    <span class="sr-only">Sign in with Twitter</span>
                    <svg
                      class="w-5 h-5"

                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </router-link>
                </div>
                <div>
                  <router-link
                    to="/"
                    class="
                      w-full
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      bg-white
                      text-sm
                      font-medium
                      text-gray-500
                      hover:bg-gray-50
                    "
                  >
                    <span class="sr-only">Sign in with GitHub</span>
                    <heroicons-solid:phone />
                  </router-link>
                </div>
              </div>
            </div>

            <div class="mt-6 relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500"> Or continue with </span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required="true"
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none focus:ring-vetpartners focus:border-vetpartners
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required="false"
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none focus:ring-vetpartners focus:border-vetpartners
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      text-vetpartners
                      focus:ring-vetpartners
                      border-gray-300
                      rounded
                    "
                  />
                  <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <router-link to="/" class="font-medium text-vetpartners hover:text-vetpartners">
                    Forgot your password?
                  </router-link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="
                    w-full
                    flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    rounded-md
                    shadow-sm
                    text-sm
                    font-medium
                    text-white
                    bg-vetpartners
                    hover:bg-vetpartners
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-vetpartners
                  "
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="" alt="" />
    </div>
  </div>
</template>
