<template>
	<div class="relative lg:py-16 sm:py-10 bg-white">
		<div
			class="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-100 lg:block"
			aria-hidden="true"
		/>
		<div class="max-w-7xl mx-auto bg-vetpartners lg:bg-transparent lg:px-8">
			<div class="lg:grid lg:grid-cols-12">
				<div
					class="
						relative
						z-10
						lg:col-start-1
						lg:row-start-1
						lg:col-span-4
						lg:py-16
						lg:bg-transparent
					"
				>
					<div
						class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
						aria-hidden="true"
					/>
					<div
						class="
							max-w-md
							mx-auto
							px-4
							sm:max-w-3xl
							sm:px-6
							lg:max-w-none
							lg:p-0
						"
					>
						<div
							class="
								aspect-w-10 aspect-h-6
								sm:aspect-w-2 sm:aspect-h-1
								lg:aspect-w-1
							"
						>
							<img
								class="object-cover object-center rounded-3xl shadow-2xl"
								:src="url"
								alt="Anaesthesia and Critical Care Nursing"
							/>
						</div>
					</div>
				</div>

				<div
					class="
						relative
						bg-vetpartners
						lg:col-start-3
						lg:row-start-1
						lg:col-span-10
						lg:rounded-3xl
						lg:grid lg:grid-cols-10
						lg:items-center
					"
				>
					<div
						class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
						aria-hidden="true"
					>
						<svg
							class="
								absolute
								bottom-full
								left-full
								transform
								translate-y-1/3
								-translate-x-2/3
								xl:bottom-auto
								xl:top-0
								xl:translate-y-0
							"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-green-600"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width="404"
								height="384"
								fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
							/>
						</svg>
						<svg
							class="
								absolute
								top-full
								transform
								-translate-y-1/3 -translate-x-1/3
								xl:-translate-y-1/2
							"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-green-600"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width="404"
								height="384"
								fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
							/>
						</svg>
					</div>
					<div
						class="
							relative
							max-w-md
							mx-auto
							py-12
							px-4
							space-y-6
							sm:max-w-3xl
							sm:py-16
							sm:px-6
							lg:max-w-none
							lg:p-0
							lg:col-start-4 lg:col-span-6
						"
					>
						<h1
							class="text-7xl font-extrabold text-white text-left"
							id="join-heading"
							v-text="msg"
						/>
						<p class="text-lg text-white" v-text="content" />
						<a
							class="
								block
								w-full
								py-3
								px-5
								text-center
								bg-white
								border border-transparent
								rounded-md
								shadow-md
								text-base
								font-medium
								text-vetpartners
								hover:bg-gray-50
								sm:inline-block
								sm:w-auto
							"
							:href="href"
							v-text="apply"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
let msg = 'Advanced Emergency Nursing'
let content =
	'This course is designed for those nurses who have experience in Emergency and Critical Care nursing.'
let apply = 'Course Content'
let url =
	'https://up.raindrop.io/raindrop/files/268/872/162/20210310_075259_0002.png'
</script>
