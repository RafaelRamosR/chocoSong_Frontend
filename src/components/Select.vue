<template>
    <select class="px-2 mb-2 h-14 border-none bg-gray-600 focus:ring-0 focus:outline-none focus:border-transparent placeholder-gray-200 text-gray-300 rounded-lg" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="select">
        <option :value="null"/>
        <option v-for="data in datas" :key="data.id" :value="data.id" v-text="data.nombre"/>
    </select>
</template>

<script>
export default {
    props: ['modelValue','datas'],

    emits: ['update:modelValue'],

    methods: {
        focus() {
            this.$refs.input.focus()
        }
    }
}
</script>
