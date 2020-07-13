<template>
    <div class="flex-container">
        <div class="row-table">
            <div class="list-menu">
                <div>
                    Pasang Target Outlet
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
            </div>
            <div class="close" @click="close">
                <font-awesome-icon icon="home" size="2x"/>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'OutletMenu',
    methods: {
        close: function(){
            this.$router.replace({path: '/report/kabupaten'})
        }
    }
}
</script>

<style scoped>
.flex-container{
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    position: relative;
}
.row-table {
    width: 75%;
    background: #4D527E;
    border-radius: 10px;
    padding: 10px;
    color: white;
    display: flex;
    /* align-items: center; */
    min-height: 80vh;
    flex-direction: column;
    position: relative;
}
.close{
    position: absolute;
    left: -43px;
    cursor: pointer;
    color: #4d527d;
}
.list-menu{
    display: grid;
    grid-template-rows: repeat(3, [row-start] 1fr [row-end]);
    grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
}
.list-menu > div {
    background: #d3d2d8;
    padding: 50px;
    margin: 2px;
    cursor: pointer;
    border-radius: 10px;
    color: black;
    border: 1px #d3d2d8 solid;
}
.list-menu > div:hover {
    color: white;
    background: rgb(211,210,216);
    background: linear-gradient(0deg, rgba(211,210,216,1) 0%, rgba(77,82,126,1) 8%, rgba(211,210,216,0.34637605042016806) 100%);
}
</style>