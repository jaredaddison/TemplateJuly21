<template>
	<main class="prose prose-sm mx-auto text-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
		<router-view v-bind="$attrs" />
		<Footer />
		<div class="mt-5 mx-auto text-center opacity-25 text-sm">
			[Home Layout]
		</div>
	</main>
</template>
