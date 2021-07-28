<template>
<div>
    <button>
        <slot>submit button</slot>
    </button>
    <!-- 多个插槽时，可以设置name -->
    <header>
        <slot name="header">这是header</slot>
    </header>
    <p style="margin-top:50px"></p>
    <footer>
        <slot name="footer">这是footer</slot>
    </footer>
</div>
</template>
<script>
export default{

}
</script>