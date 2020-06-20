<template>
    <div>
        <div class="container wrapper-center">
            <div class="modal-content wrapper-center">
                upload modal
                <div><input type="date"></div>
                <div><input type="file"></div>
                <div><button>Upload</button></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    position: fixed;
    background: linear-gradient(180deg, #221F39 1.06%, rgba(236, 117, 117, 0) 100%);
    width: 100%;
    height: 100%;
    top: 0px;
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