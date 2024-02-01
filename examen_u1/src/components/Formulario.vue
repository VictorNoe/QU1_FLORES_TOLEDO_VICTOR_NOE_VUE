<template lang="">
    <b-container>
        <b-row>
            <b-col>
                <b-form @submit="onRegister" v-if='show'>
                    <label>Marca</label>
                    <b-form-input type="text" v-model="marca"></b-form-input>
                    <label>Modelo</label>
                    <b-form-input type="text" v-model="modelo"></b-form-input>
                    <label>Año de fablicacion</label>
                    <b-form-input type="date" v-model="year"></b-form-input>
                    <label>Numero de serie</label>
                    <b-form-input type="text" v-model="numS"></b-form-input>
                    <b-button varian="success" type="submit"> Agregar auto</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            marca: null,
            modelo: null,
            year: null,
            numS: null,
        }
    },
    methods: {
        onRegister(event) {
            event.preventDefault()
            let validateCaracters = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM0987654321";

            for (let i = 0; i < this.marca.length; i++) {
                for (let j = 0; j < validateCaracters.length; j++) {
                    if (this.marca[i] === validateCaracters[j]) {
                        break;  
                    }
                }
            }



        }
    },
}
</script>
<style lang="">
    
</style>