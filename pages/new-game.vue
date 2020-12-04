<template>
<div>
    <nuxt-link class="btn-back" to="/"><Arrow />Back</nuxt-link>

    <div class="container">

        <div>
            <section class="section">

                <h2 class="subtitle">Add game</h2>

                <div class="field">
                    <input id="gamename" class="input" type="text" placeholder="Game name" />
                </div>

                <div class="field">
                    <input id="amountplayers" class="input" type="text" placeholder="Amount of players" />
                </div>

            </section>
            <span class="btn" @click="addNewGame">Submit</span> 
        </div>
    </div>
</div>
</template>

<script>
import Arrow from "~/components/arrow.vue";
export default {
    components: {
        Arrow
    },
    data() {
        return {
            
        };
    },
    methods: {
        async addNewGame() {
            
        }
    }
}
</script>