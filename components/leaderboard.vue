<template>
    <div>
        <h2>Leaderboard</h2>
        <table>
            <tr>
                <th>
                    #
                </th>
                <th>
                    ID
                </th>
                <th>
                    Tracker Score
                </th>
            </tr>
            <tr v-for="(p, i) in lb">
                <td>
                    {{i+1}}
                </td>
                <td>
                    {{p.name}}
                </td>
                <td>
                    {{p.score}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                apiurl: this.$store.state.apiurl
            }    
        },
        computed:{
//            events () {
//                return this.$store.getters.getCollection('events');
//            },
            lb () {
                return [
                    {
                        name: "cevian",
                        score: 4112
                    },
                    {
                        name: "bloodrun_0",
                        score: 3875
                    },
                    {
                        name: "Luminosis",
                        score: 2180
                    },
                    {
                        name: "chickrn",
                        score: 2037
                    },
                    {
                        name: "Bapzy",
                        score: 1704
                    }
                ]
                
            }
        },
    }
</script>