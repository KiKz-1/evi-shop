<template>
<div>
    <nuxt-link class="btn-back" to="/"><Arrow />Back</nuxt-link>

    <div class="container">

        <div>
            <section class="section">

                <h2 class="subtitle">Add game</h2>

                <div class="field">
                    <input id="gamename" class="input" type="text" placeholder="Game name" v-model="gameName" />
                    <span class="error" v-if="gameName == '' ? false : !validateName">Alphabetic characters only</span>
                </div>

                <div class="field">
                    <input id="playerAmount" class="input" type="text" placeholder="Amount of players" v-model="playerAmount" />
                    <span class="error" v-if="!validatePlayerAmount">Numbers only</span>
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
            gameName: '',
            playerAmount: ''
        };
    },
    methods: {
        async addNewGame() {
            try {
                if(!this.validForm || this.formIsEmpty) {
                    return
                }
                
                const newGame = {
                    name: this.gameName,
                    playerAmount: this.playerAmount
                }

                const queuedGames = this.$http.$post('/api/PostQueuedGames', {newGame})
            } catch (err) {
                console.error(err)
            }  
        }
    },
    computed: {
        validForm: function () {
            return this.validateName && this.validatePlayerAmount
        },
        formIsEmpty: function () {
            const gameName = this.gameName == ''
            const playerAmount = this.playerAmount == ''
            return (gameName || playerAmount)
        },
        validateName: function () {
            const regexPattern = /^[A-Z]+$/i;
            return regexPattern.test(this.gameName)
        },
        validatePlayerAmount: function () {
            const regexPattern = /^[0-9]*$/;
            return regexPattern.test(this.playerAmount)
        }
    }
}
</script>