<template>
    <headbody></headbody>
    <Information />
    <Medication></Medication>
</template>
<script>
import Headbody from './Headbody.vue'
import Information from './Information.vue'
import Medication from './Medication.vue'

// import TextLeft from './TextLeft.vue'
export default ({
    components: {
        Headbody,
        Medication,
        Information,
    }
})
</script>

