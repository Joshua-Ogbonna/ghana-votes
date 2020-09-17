<template>
    <div>
        <chartjs-bar :labels="labels" :datasets="datasets" :option="option"></chartjs-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labels: ["Votes 1", "Votes 2", "Votes 3"],
                datasets: [
                    {
                        data: [20, 30, 50],
                        backgroundColor: ['Blue', 'Green', 'Purple']
                    }
                ],
                option: {
                    title: {
                        display: true,
                        position: 'bottom',
                        text: 'Votes'
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>