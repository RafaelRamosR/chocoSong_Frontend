<template>
    <input class="h-14 border-none bg-gray-600 focus:ring-0 focus:outline-none focus:border-transparent text-sm placeholder-gray-300 text-gray-300 rounded-lg "
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    />
</template>

<script>
export default {
    props: ['modelValue'],

    emits: ['update:modelValue'],
}
</script>
