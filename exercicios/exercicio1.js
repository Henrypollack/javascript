/*
    1) Faça um algorimto que dadp as 3 notas tiradas por um aluno em
    um semetre da faculdade, calcule e imprima sua media e sua 
    classificação conforme a tabela abaixo
    
    Classificação:
    - Menor que 5, Reprovado;
    - 5 e 7, recuperação;
    - acima de 7, passou de semestre.

*/
let aluno = 'Henry';
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
const media = (nota1+nota2+nota3)/3;
if (media < 5){
    console.log('O aluno ',aluno,'tirou nota menor que',media,', Ele esta REPROVADO');
} else if (media >=5 && media <= 7) {
    console.log('O aluno ',aluno,'tiro nota ',media,' Vai fica em RECUPERAÇÃO');
} else {
    console.log('O aluno',aluno,'tirou nota ',media,' por isso ele foi APROVADO');
}