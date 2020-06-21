<template>
    <div>
        <div class="container wrapper-center">
            <div class="modal-content wrapper-center">
                <div>{{selected}}</div>
                <div @click="hide">close</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterModal",
    props: [
        'selected'
    ],
    methods: {
        hide: function(){
            this.$emit('switch_modal')
        }
    }
}
</script>

<style scoped>
.container{
    position: fixed;
    width: 100%;
    height: 45%;
    top: 29vh;
    z-index: 1;
}
.wrapper-center{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
}
.modal-content{
    background: #C4C4C4;
    width: 500px;
    height: 265px;
    border-radius: 10px;
    padding: 10px;
    align-items: normal;
}
</style>