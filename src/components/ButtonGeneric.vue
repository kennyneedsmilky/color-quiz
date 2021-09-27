<template>
    <div>
      <button class="button" @click="$router.push(linkTxt)">{{ btnTxt }}</button>
    </div>
</template>

<script>
export default {
    name: "ButtonGeneric",
    props: {
        btnTxt: String,
        linkTxt: String
    },
    data() {
        return {
            
        }
    },
    
}
</script>

<style scoped>
    .button {
        border: none;
        padding: var(--padding-default);
        background-color: var(--color-default-03);
        box-shadow: var(--shadow-button);
        margin: var(--margin-default-01);
        width: 266px;
        height: 64px;
        color: var(--color-default-01);
        font-size: 36px;
        font-weight: bold;
    }

    .button:active {
        background-color: var(--color-theme-01);
        box-shadow: var(--shadow-button-hover);
    }

    @media (hover: hover) {
        .button:hover {
            background-color: var(--color-theme-01);
            box-shadow: var(--shadow-button-hover);
        }
    }
</style>