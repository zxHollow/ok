function menu(){
    if(mn.style.display == "none") { //verifica se a imagem está sendo exibida, se não estiver vai executar os comandos abaixo e se tiver vai executar o else
      mn.style.display="block"
      ul.style.display="block";

    }
    else { //se a imagem estiver sendo exibida vai executar os comandos abaixo
      mn.style.display="none";
      ul.style.display="none";
    }
}
