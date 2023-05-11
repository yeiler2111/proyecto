<template>
    <div>
        {{ title }}
    </div>
</template>
<script>
export default {
    name: "Header",
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>