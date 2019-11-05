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
import axios from 'axios'

export default {
  data () {
    return {
      valorX1: 1,
      valorX2: 2,
      valorX3: 3,
      valorX4: 4,
      valorX5: 5,
      valorF1: 11,
      valorF2: 22,
      valorF3: 33,
      valorF4: 44,
      valorF5: 55,
      valorX: 999,
      apiUrl: ''
    }
  },
  created () {
    let isDev = process.env.NODE_ENV === 'development'

    let prefixo = 'http://'

    let endereco = isDev ? 'localhost:8000' : 'matheusmuriel.pythonanywhere.com'

    let sufixo = '/lagrange/'

    this.apiUrl = prefixo + endereco + sufixo
  },
  methods: {
    clickCalcular () {
      let objectValores = {}

      objectValores['X1'] = this.valorX1
      objectValores['X2'] = this.valorX2
      objectValores['X3'] = this.valorX3
      objectValores['X4'] = this.valorX4
      objectValores['X5'] = this.valorX5

      objectValores['F1'] = this.valorF1
      objectValores['F2'] = this.valorF2
      objectValores['F3'] = this.valorF3
      objectValores['F4'] = this.valorF4
      objectValores['F5'] = this.valorF5

      objectValores['X'] = this.valorX

      let strObject = JSON.stringify(objectValores)

      axios.post(this.apiUrl, strObject)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
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
