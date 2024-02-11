
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);
let soma = 0;
console.log(notas.length);
for (let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media)

/*const alunos = ['Jõao','Henry','Maria'];
console.log(alunos);
console.log(alunos.pop());
console.log(alunos);
console.log(alunos.shift());
console.log(alunos);
alunos.push('Heitor');
alunos[4] = 'Andressa';
console.log(alunos)
alunos[2] = 'Beatriz';
console.log(alunos);*/