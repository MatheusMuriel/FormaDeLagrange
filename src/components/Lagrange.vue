<template>
  <div class="div-principal">
    <img src="https://i.imgur.com/vBqV9Gx.jpg" class="img-principal">

    <b-container class="inputs">
      <b-row>
        <b-col>
          <b-input v-model="valor1"></b-input>
        </b-col>
        <b-col>
          <b-input v-model="valor2"></b-input>
        </b-col>
        <b-col>
          <b-input v-model="valor3"></b-input>
        </b-col>
        <b-col>
          <b-input v-model="valor4"></b-input>
        </b-col>
        <b-col>
          <b-input v-model="valor5"></b-input>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center btn-input">
        <b-button variant="outline-primary" @click="clickCalcular">Calcular</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      valor1: 0,
      valor2: 0,
      valor3: 0,
      valor4: 0,
      valor5: 0
    }
  },
  methods: {
    clickCalcular () {
      // axios
        // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        // .then(response => (console.log(response.data.bpi)))
    }
  }
}
</script>

<style>
.div-principal {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}
.img-principal {
  flex-wrap: wrap;
  width: 10%;
  height: 10%;
  margin: 50px;
}
.inputs {
  align-self: center;
}
.btn-input {
  margin: 30px;
}
</style>
