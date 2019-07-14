<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
            <test></test>
        </div>
    </div>
</template>

<script>
import test from './test'

export default {
    components: {
        test
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
