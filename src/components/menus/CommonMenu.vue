<template> 
    <div>
        <div class="sub-menu wrapper-center">
            <div class="menus-container">
            </div>
            <div class="menus-container">
                <div class="filter-list wrapper-center" @click="to_data_outlet">Menu Lanjutan</div>
            </div>
            <div class="menus-container">
            </div>
            <div class="menus-container" >
                <div class="filter-list wrapper-center" @click="logout">Keluar</div>
            </div>
            <div class="menus-container">
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: "CommonMenu",
    methods: {
        logout: function(){
            window.localStorage.removeItem('token')
            window.location.reload()
        },
        to_data_outlet: function(){
            this.$router.replace({path: '/menu'})
        }
    }
}
</script>

<style scoped>

.sub-menu{
    background: #FFFFFF;
    margin: 5px 10% 5px 10%;
    box-shadow: 3px 5px 19px 0px rgba(0,0,0,0.75);
    padding: 5px;
    border-radius: 10px;
    height: 60px;
}

.sub-menu > .menus-container:nth-child(1) {
    flex: 1;
}

.sub-menu > .menus-container:nth-child(2) {
    flex: 2;
}

.sub-menu > .menus-container:nth-child(4) {
    flex: 2;
}

.sub-menu > .menus-container:nth-child(5) {
    flex: 1;
}

.filter-list{
    padding: 15px;
    cursor: pointer;
}

.filter-list:hover{
    background: #868686;
    color: white;
}

.wrapper-center{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: flex-end;
}

.menus-container {
    position: static;
    align-self: stretch;
    order: 0;
    flex-shrink: 0;
    flex-basis: 90px;
    padding-top: 5px;
}
</style>