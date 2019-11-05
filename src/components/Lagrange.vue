<template>
  <div class="div-principal">
    <img src="https://i.imgur.com/vBqV9Gx.jpg" class="img-principal">

    <b-container class="inputs">
      <b-row class="linha-input" align-h="center">
        <b-col>
          <b-input class="input-input" v-model="valorX1" placeholder="X1"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorX2" placeholder="X2"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorX3" placeholder="X3"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorX4" placeholder="X4"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorX5" placeholder="X5"/>
        </b-col>
      </b-row>

      <b-row class="linha-input" align-h="center">
        <b-col>
          <b-input class="input-input" v-model="valorF1" placeholder="F1"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorF2" placeholder="F2"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorF3" placeholder="F3"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorF4" placeholder="F4"/>
        </b-col>
        <b-col>
          <b-input class="input-input" v-model="valorF5" placeholder="F5"/>
        </b-col>
      </b-row>

      <b-row class="linha-input" align-h="center">
        <b-col cols="2">
          <b-input class="input-input" v-model="valorX" placeholder="X"/>
        </b-col>
      </b-row>

      <b-row class="justify-content-md-center btn-input">
        <b-button variant="outline-primary" @click="clickCalcular">Calcular</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: function () {
    return {
      valorX1: null,
      valorX2: null,
      valorX3: null,
      valorX4: null,
      valorX5: null,
      valorF1: null,
      valorF2: null,
      valorF3: null,
      valorF4: null,
      valorF5: null,
      valorX: null
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
.linha-input {
  margin: 30px;
}
.linha-input input {
  text-align: center;
}
</style>
