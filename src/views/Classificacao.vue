<template>
  <div class="classificacao">
    <h1>Aqui a Galera Classifica!</h1>
  </div>
</template>

<script>
export default {
  name: "Classificacao",
  data() {
    return {
      clubesLista: []
    };
  },
  computed: {
    clubesListaOrdenada() {
      const listaOrdenada = this.clubesLista.slice(0).sort(
        (a,b) => a.pontos > b.pontos ? -1 : 1
      );
      return listaOrdenada;
    }
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then(resposta => resposta.json())
      .then(json => {
        this.clubesLista = json;
        console.log(this.clubesLista);
    });
  }
}

</script>