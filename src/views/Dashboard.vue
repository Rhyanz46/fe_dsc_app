<template>
    <div>
        <Menus/>
        <DataList/>
    </div>
</template>

<script>
import Menus from "@/components/Menus";
import DataList from "@/components/DataList";
export default {
    name: "Dashboard",
    components: {
        Menus,
        DataList
    }
}
</script>