<template>
<div>
    <nuxt-link class="btn-back" to="/"><Arrow />Back</nuxt-link>

    <div class="container">

        <div>
            <section class="section">

                <h2 class="subtitle">My game(s)</h2>

                <div class="game-list">
                    My games
                </div>

            </section>
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
}
</script>