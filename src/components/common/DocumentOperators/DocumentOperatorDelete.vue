<template>
    <el-button
        v-bind="triggerConfig"
        @click="handleClick"
    >
        {{ triggerConfig.text }}
    </el-button>
</template>

<script>
import _id_mixin from '@/mixins/document/_id_mixin';
import {
    logError,
} from '@/widget/utility';

export default {
    name: 'DocumentOperatorDelete',
    mixins: [
        _id_mixin,
    ],
    props: {
        data: {
            type: Object,
            required: true,
        },
        doDeleteRequest: {
            type: Function,
            required: true,
        },
        triggerConfig: {
            type: Object,
            default () {
                return {};
            },
        },
    },
    state: {
        isDeleting: false,
    },
    methods: {
        handleClick () {
            if (this.isDeleting) {
                return;
            }

            this.$confirm('确认删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.isDeleting = true;
                this.doDeleteRequest(this.data).then(() => {
                    this.$emit('update');
                }).catch(logError).finally(() => {
                    this.isDeleting = false;
                });
            }).catch(logError);
        },
    },
};
</script>
