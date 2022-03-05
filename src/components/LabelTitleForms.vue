<template>
    <label class="block mt-2 font-semibold uppercase text-xl text-gray-400">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>

<script>
export default {
    props: ['value']
}
</script>
