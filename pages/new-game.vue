<template>
<div>
    <nuxt-link class="button--green" to="/">Back</nuxt-link>
    <div class="wrapper">
        <div>
            <h2>Add game</h2>

            <div>
                <label for="gamename">Game name</label>
                <input id="gamename" type="text" />
            </div>
            <div>
            <label for="amountplayers">Amount of players</label>
            <input id="amountplayers" type="text" value="0" />
            </div>

            <div class="buttons-group">
                <span class="button--grey">Submit</span>
            </div>
        </div>    
    </div>
</div>
</template>

<style scoped>
.button--green {
    margin: 25px;
}

label {
    display: block;
}

.wrapper {
    margin: 0 25px;
    display: flex;
    justify-content: center;
}
</style>