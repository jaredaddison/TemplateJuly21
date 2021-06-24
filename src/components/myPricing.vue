<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
			<div class="sm:flex sm:flex-col sm:align-center">
				<h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Admission Bundles</h1>
				<p class="mt-5 text-xl text-gray-500 sm:text-center">These prices are all inclusive, however the items within them are fixed. The premise being that if you require tests or treatments from a higher category, it is fairly likely that you really need to be treating that patient with more medications / providing more intensive care. </p>
				<div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
					<button
						type="button"
						class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
					>Option One</button>
					<button
						type="button"
						class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
					>Option Two</button>
				</div>
			</div>
			<div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
				<div
					v-for="tier in tiers"
					:key="tier.name"
					class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
				>
					<div class="p-6">
						<h2 class="text-lg leading-6 font-medium text-gray-900">{{ tier.name }}</h2>
						<p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
						<p class="mt-8">
							<span class="text-4xl font-extrabold text-gray-900">${{ tier.priceMonthly }}</span>
							{{ ' ' }}
							<span class="text-base font-medium text-gray-500"></span>
						</p>
						<a
							:href="tier.href"
							class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
						>{{ tier.name }} Bundle</a>
					</div>
					<div class="pt-6 pb-8 px-6">
						<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
						<ul class="mt-6 space-y-4">
							<li
								v-for="feature in tier.includedFeatures"
								:key="feature"
								class="flex space-x-3"
							>
								<CheckIcon
									class="flex-shrink-0 h-5 w-5 text-green-500"
									aria-hidden="true"
								/>
								<span class="text-sm text-gray-500">{{ feature }}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { CheckIcon } from '@heroicons/vue/solid'

	const tiers = [
		{
			name: 'Unsure & Off-Color',
			href: '#',
			priceMonthly: Unsure & Off - Color,
			description: 'All the basics for starting a new business',
			includedFeatures: [
				'',
				'',
				'',
			]
		}
	]
</script>
