<template>
<div>
    SoltTest 1:
    <SoltTest>改了名字</SoltTest>
    SoltTest 2:
    <SoltTest>
        <template v-slot:header>
            <b>传入的HTML header</b>
        </template>
        <template #footer>
            <b>传入的HTML footer</b>
        </template>
    </SoltTest>
</div>
</template>
<script>
import SoltTest from '@/components/SoltTest'
export default{
    components:{SoltTest}
}
</script>