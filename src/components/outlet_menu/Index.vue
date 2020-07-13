<template>
    <div>
        <AddTarget v-if="selected == 'add_outlet_target'"/>
    </div>
</template>

<script>
import AddTarget from "@/components/outlet_menu/AddTarget";
export default {
    name: 'IndexOutletMenu',
    components: {
        AddTarget
    },
    props: ['selected']
}
</script>