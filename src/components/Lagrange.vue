<template>
  <div class="div-principal">
    <b-container class="images">
      <b-row align-h="center">
        <h2>Selecione seu personagem</h2>
      </b-row>
      <b-row>
        <b-col>
          <b-row align-h="end">
            <!-- Lagrange -->
            <img :class="newtonSelected ? 'img-principal' : 'img-principal personagemSelecionado'"
                  @click="selectLagrange" src="https://i.imgur.com/vBqV9Gx.jpg" >
          </b-row>
        </b-col>
        <b-col>
          <b-row align-h="start">
            <!-- Newton -->
            <img :class="newtonSelected ? 'img-principal personagemSelecionado' : 'img-principal'"
                  @click="selectNewton" src="https://i.imgur.com/V8U6qzr.jpg">
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="inputs">
      <b-row class="linha-input" align-h="center">
        <div v-if="resposta">
          Resposta: {{resposta}}
        </div>
      </b-row>

      <!-- Head -->
      <b-row>
        <b-col sm="auto">
          <b-row align-v="center" class="coluninha-linha"><h5></h5></b-row>
        </b-col>
        <b-col  cols="11">
          <b-row class="linha-header" align-h="center">
            <b-col><h5>1</h5></b-col>
            <b-col><h5>2</h5></b-col>
            <b-col><h5>3</h5></b-col>
            <b-col><h5>4</h5></b-col>
            <b-col><h5>5</h5></b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- Input X -->
      <b-row>
        <b-col sm="auto">
          <b-row align-v="center" class="coluninha-linha"><h5>x</h5></b-row>
        </b-col>
        <b-col cols="11">
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
        </b-col>
      </b-row>

      <!-- Input Fx -->
      <b-row>
        <b-col sm="auto">
          <b-row align-v="center" class="coluninha-linha"><h5>F(x)</h5></b-row>
        </b-col>
        <b-col  cols="11">
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
        </b-col>
      </b-row>

      <!-- Input PX -->
      <b-row align-h="center">
        <b-col cols="2">
          <b-row align-h="center">
            <P>P(x)</P>
          </b-row>
          <b-row class="inputpx" align-h="center">
            <b-input class="input-input" v-model="valorX" placeholder="X"/>
          </b-row>
        </b-col>
      </b-row>

      <b-row  align-h="center" class="btn-input">
        <b-col cols="2">
          <b-button variant="outline-primary" @click="clickCalcular">Calcular</b-button>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      valorX1: -2,
      valorX2: -1,
      valorX3: 0,
      valorX4: 1,
      valorX5: 2,
      valorF1: -2,
      valorF2: 29,
      valorF3: 30,
      valorF4: 31,
      valorF5: 62,
      valorX: 1.5,
      resposta: '',
      newtonSelected: false
    }
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

      objectValores['PX'] = this.valorX

      for (let chave in objectValores) {
        let valor = objectValores[chave]
        // eslint-disable-next-line
        if (valor || valor === 0){
          objectValores[chave] = valor
        } else {
          objectValores[chave] = 'null'
        }
      }

      let strObject = JSON.stringify(objectValores)
      console.log(this.getUrl())
      axios.post(this.getUrl(), strObject)
        .then((response) => {
          this.exibirResposta(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getUrl () {
      let isDev = process.env.NODE_ENV === 'development'
      let endereco = isDev ? 'http://localhost:8000' : 'https://matheusmuriel.pythonanywhere.com'
      let sufixo = this.newtonSelected ? '/newton/' : '/lagrange/'
      return (endereco + sufixo)
    },
    exibirResposta (valor) {
      this.resposta = valor
    },
    selectLagrange () {
      this.newtonSelected = false
    },
    selectNewton () {
      this.newtonSelected = true
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
.div-principal .images{
  height: 200px;
  align-self: center;
  align-content: center;
}
.img-principal {
  height: 200px;
  padding: 10px;
  border-radius: 40%;
}
.inputs {
  align-self: center;
}
.btn-input {
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
}
.btn-input button{
  width: 100%;
}
.linha-input {
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
}
.linha-input input {
  text-align: center;
  height: 100%;
}
.linha-input .px {
  margin-inline-start: -150px;
}
.linha-header {
  text-align: center;
  margin-bottom: -15px;
  height: 100%;
}
.coluninha-linha {
  height: 100%;
  justify-content: center;
}
.input-input {
  text-align: center;
}
.personagemSelecionado {
  border-width: medium;
  border-style: solid;
  border-color: #00f;
}
</style>
