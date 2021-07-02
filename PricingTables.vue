<template>
  <section class="relative">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center">
          <h1 class="mb-4 h1" data-aos="fade-up">Strategic Pricing Proposal</h1>
          <p class="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">The goal of this proposal is to introduce the idea of value-based/strategic charging that will help address stadnrds of care, veterinary recruitment and retention, as well as client engagement and satisfaction.</p> 
        </div>
        <!-- Pricing tables -->
        <div>
          <!-- Pricing toggle -->
          <div class="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="400">
            <div class="inline-flex items-center">
              <div class="mr-3 font-medium text-gray-500">Time-Based</div>
              <div class="form-switch focus-within:shadow-outline">
                <input type="checkbox" name="pricing-toggle" id="pricing-toggle" class="sr-only" v-model="value" />
                <label class="bg-gray-600" for="pricing-toggle">
                  <span class="bg-gray-200" aria-hidden="true"></span>
                  <span class="sr-only">Enable to see bundled pricing</span>
                </label>
              </div>
              <div class="ml-3 font-medium text-gray-500">Value-Based</div>
            </div>
          </div>
<!-- End-Pricing toggle -->
          <div class="grid items-start max-w-sm gap-8 mx-auto lg:grid-cols-3 lg:gap-6 lg:max-w-none">
            <!-- Pricing table 1 -->
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <div class="inline-flex px-3 py-1 mt-px text-sm font-bold text-white uppercase bg-green-800 rounded-full">Time-Saver</div>
              </div>
              <div class="pb-4 mb-4 border-b border-gray-700">
                <div class="mb-1 text-purple-600 h4">{{priceOutput.plan1[value][0]}}</div>
                <div class="inline-flex items-baseline mb-2">
                  <span class="text-2xl font-medium text-gray-400 md:text-3xl">{{priceOutput.plan1[value][1]}}</span>
                  <span class="h2">{{priceOutput.plan1[value][2]}}</span>
                  <span class="font-medium text-gray-400">{{priceOutput.plan1[value][3]}}</span>
                </div>
                <div class="text-gray-400">{{priceOutput.plan1[value][4]}}</div>
              </div>
              <div class="mb-3 font-medium">{{priceOutput.plan1[value][5]}}</div>
              <ul class="flex-grow -mb-3 text-gray-400">
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][6]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][7]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][8]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][9]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][10]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][11]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][12]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][13]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][14]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan1[value][15]}}</span>
                </li>
              </ul>
              <div class="p-3 mt-6 border border-gray-700">
                <a class="w-full text-white bg-purple-600 btn-sm hover:bg-purple-700" href="#0"><span>{{priceOutput.plan1[value][16]}}</span></a>
              </div>
            </div>
            <!-- Pricing table 2 -->
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <div class="inline-flex px-3 py-1 mt-px text-sm font-bold text-white uppercase bg-green-800 rounded-full">Most Common</div>
              </div>
              <div class="pb-4 mb-4 border-b border-gray-700">
                <div class="mb-1 text-purple-600 h4">{{priceOutput.plan2[value][0]}}</div>
                <div class="inline-flex items-baseline mb-2">
                  <span class="text-2xl font-medium text-gray-400 md:text-3xl">{{priceOutput.plan2[value][1]}}</span>
                  <span class="h2">{{priceOutput.plan2[value][2]}}</span>
                  <span class="font-medium text-gray-400">{{priceOutput.plan2[value][3]}}</span>
                </div>
                <div class="text-gray-400">{{priceOutput.plan2[value][4]}}</div>
              </div>
              <div class="mb-3 font-medium">{{priceOutput.plan2[value][5]}}</div>
              <ul class="flex-grow -mb-3 text-gray-400">
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][6]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][7]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][8]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][9]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][10]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][11]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][12]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][13]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan2[value][14]}}</span>
                </li>
              </ul>
              <div class="p-3 mt-6 border border-gray-700">
                <a class="w-full text-white bg-purple-600 btn-sm hover:bg-purple-700" href="#0">Standards of Care</a>
              </div>
            </div>
            <!-- Pricing table 3 -->
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <div class="inline-flex px-3 py-1 mt-px text-sm font-bold text-white uppercase bg-green-800 rounded-full">Sick or Sad</div>
              </div>
              <div class="pb-4 mb-4 border-b border-gray-700">
                <div class="mb-1 text-purple-600 h4">{{priceOutput.plan3[value][0]}}</div>
                <div class="inline-flex items-baseline mb-2">
                  <span class="text-2xl font-medium text-gray-400 md:text-3xl">{{priceOutput.plan3[value][1]}}</span>
                  <span class="h2">{{priceOutput.plan3[value][2]}}</span>
                  <span class="font-medium text-gray-400">{{priceOutput.plan3[value][3]}}</span>
                </div>
                <div class="text-gray-400">{{priceOutput.plan3[value][4]}}</div>
              </div>
              <div class="mb-3 font-medium">{{priceOutput.plan3[value][5]}}</div>
              <ul class="flex-grow -mb-3 text-gray-400">
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][6]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][7]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][8]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][9]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][10]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][11]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][12]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][13]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][14]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][15]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][16]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][17]}}</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="flex-shrink-0 w-3 h-3 mr-3 text-green-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{priceOutput.plan3[value][18]}}</span>
                </li>
              </ul>
              <div class="p-3 mt-6 border border-gray-700">
                <a class="w-full text-white bg-purple-600 btn-sm hover:bg-purple-700" href="#0">{{priceOutput.plan3[value][19]}}</a>
              </div>
            </div>
            </div>
          <!-- Bottom infobox -->
          <div class="flex flex-col items-center justify-between mt-12 lg:flex-row lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
            <div class="mb-4 text-lg font-medium text-center lg:text-left lg:mb-0">Suggestions and Feedback?</div>
              <div>
                <a class="text-white bg-purple-600 btn-sm hover:bg-purple-700" href="#0">Let us know what you think</a>
              </div>
            </div>
          </div>
          <!-- Bottom infobox - End -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingTables',
  data: function () {
    return {
      value: true,
      priceOutput: {
        plan1: {
          false: ['$', '1000', '/day'],
          true: ['Vetcare Plan','$', '500', '/pet', 'Stable patients who require further work-up in-hospital','VetsBest Care Plan','Nurse Assessment','Consultation','Hospital Admission', 'IV Catheter', 'Sedation', 'Base-Line Blood Tests or;','Bedside Ultrsound', 'Nursing Procedure/Treaatment','Discharge Medication','VetCheck Discharge Notes','Standards of Care'],
        },
        plan2: {
          false: ['$', '85', '/mo'],
          true: ['Diagnostics Plan','$', '1,000', '/pet', 'Stable patients who require further work-up in-hospital','VetsBest Care Plan','Nurse Assessment','Consultation','Hospital Admission', 'IV Catheter', 'Sedation', 'Base-Line Blood Tests','Bedside Ultrsound', 'Radiographs (Inc SignalPet)','VetCheck Discharge Notes','Standards of Care'],
        },
        plan3: {
          false: ['$', '135', '/mo'],
          true: ['BestCare Plan','$', '2,000', '/day', 'Unstable patient who requires stabilisation, diagnostics and care in-hospital','VetsBest Care Plan','Emergency stabilisation','Shock-assessment and care','Nurse Assessment','Consultation','Hospital Admission', 'IV Catheter', 'Sedation','Analgesia', 'Medical Management', 'Base-Line Blood Tests','Bedside Ultrsound', 'Radiographs (Inc SignalPet)','Full Ultrasound Examination','VetCheck Discharge Notes','Standards of Care'],
        }        
      }
    }
  },  
}
</script>