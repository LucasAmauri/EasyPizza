function acesso(form){


if(form.nome.value == "Lucas" && form.senha.value == "pizza12345"){
    location = "index_logged.html";
}else{
    alert("Os dados estão incorretos!")
}
}