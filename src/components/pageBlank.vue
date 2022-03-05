<template>
    <div class="bg-gray-50 ">
        <div class="flex px-4 items-center justify-between sticky  bg-gray-100 h-12 w-full top-0">
            <div class=" justify-start">
                <slot name="back"/>
            </div>
            <div class="justify-center">
                <slot name="title"/>
            </div>
        </div>

        <div class="min-h-screen">
            <div class="w-full px-4 py-2">
                <slot/>
            </div>
        </div>
    </div>
</template>