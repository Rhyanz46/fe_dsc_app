<template>
    <div>
        <div>
            <table>
                <tr>
                    <th>Outlet ID</th>
                    <th>Name</th>
                    <th>Last Month Target</th>
                    <th>This Mont Target</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>SUmbeeerr Cell</td>
                    <td>100</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddTarget'
}
</script>

<style scoped>
table{
    color: black;
    background: white;
    padding: 12px;
    cursor: pointer;
    border-spacing: 0px;
    width: 100%;
    border-collapse: collapse;
}
table th{
    padding: 10px;
    background: #bebdc3;
}
table td, th{
    padding: 10px;
    border: 1px solid #ddd;
}
</style>