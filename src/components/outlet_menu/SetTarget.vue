<template>
    <div>
        set target container
    </div>
</template>

<script>
export default {
    name: 'SetTarget',
    methods: {
        confirm_to_set: function(){
            console.log(this.$props.outlet_id)
        }
    },
    props: ['outlet_id']
}
</script>