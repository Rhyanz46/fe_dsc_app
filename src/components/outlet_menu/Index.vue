<template>
    <div>
        <OutletList 
            v-if="selected == 'add_outlet_target'" 
            @sub_menu_selected="sub_menu_selected"/>
    </div>
</template>

<script>
import OutletList from "@/components/outlet_menu/OutletList";
export default {
    name: 'IndexOutletMenu',
    methods: {
        sub_menu_selected: function(data){
            this.$emit('sub_menu_selected', data)
        }
    },
    components: {
        OutletList
    },
    props: ['selected']
}
</script>