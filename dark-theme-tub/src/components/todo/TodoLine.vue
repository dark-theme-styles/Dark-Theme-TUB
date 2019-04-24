<template>
    <v-container fluid pa-0>
        <v-layout>
            <v-flex xs1 grow>
                <v-card color="primary" height="100%" flat tile>
                    <v-card-text class="pa-2 error--text text-xs-right">{{ line }}.</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1>
                <v-card color="primary" height="100%" flat tile>
                    <v-card-text class="pa-2 success--text text-xs-center">{{
                        todoType
                    }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs10>
                <v-card color="primary" height="100%" flat tile>
                    <v-card-text class="pa-2 info--text">{{ comment }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "TodoLine",
    props: {
        line: {
            type: Number,
            default: 0
        },
        todoType: {
            type: String,
            default: "",
            validator: val => ["TODO", "FIXME"].includes(val)
        },
        comment: {
            type: String,
            default: ""
        },
        code: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
// #first {
//     background-color: red;
// }

// ::v-deep .v-expansion-panel__header {
//     padding: 0;
// }
</style>
