function escrevaMeuNome(nome){
    return 'Meu nome é ',nome;
}
escrevaMeuNome('Henry');
escrevaMeuNome('Pollack');

function verificarIdade (idade){
    if (idade >= 18) {
        console.log('Você é maior de idade ' + escrevaMeuNome('Henry'));
    } else {
        console.log('Você e menor de idade')
    }
     
}
verificarIdade(30);