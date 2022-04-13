const nomeEmpresa = "Sistema Omma";
console.log (nomeEmpresa);


let listaDeReceitas = [ // isso é um Array
    { //professor colocou para que seja uma lista Deful
    id: 1, //Um identificador único que não pode se repetir no sistema
    titulo: "Cachorro quente", //titulo da receita
    dificuldade: "simples", // dificuldade
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"], //Array de string
    preparo: "coloque a salsicha para cozinhar, após cozida coloque no pão junto com os demais ingredientes",
    link: "http://youtube.com", 
    vegano: false,
    },
];

const cadastrarReceita = ( // Arrow Function
    id, 
    titulo, 
    dificuldade, 
    ingredientes, 
    preparo, 
    link, 
    vegano,
    ) => {
        
    const novaReceita = {
        id, 
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };

    listaDeReceitas.push(novaReceita); // p/ cadastrar a receita dentro da lista de receitas

    console.log (`Cadastro da receita ${titulo} feito com sucesso!`)

    };

    function exibirReceitas() {
        for(let i=0; i< listaDeReceitas.length; i++){
        const receita = listaDeReceitas[i]; 
        console.log("-------------------------------");
        console.log(`Titulo: ${receita.titulo}`);
       
        for(let j=0; j< receita.ingredientes.length; j++) {
        console.log(`-${receita.ingredientes[j]}`);
    }
        console.log("É vegano?" , receita.vegano);
        console.log("-------------------------------");



        }
    }

    function deletarReceita(id){   // 6 função para deletar a receita
        let novaListaDeReceitas = []
        for (let i = 0; i< listaDeReceitas.length; i++) {
            const receita = listaDeReceitas[i];

            if (receita.id !== id){  //quando eu não encontrar esse ID, manda para essa nova lista de Receitas
                novaListaDeReceitas.push(receita);
            }
        }

            if (novaListaDeReceitas.length === listaDeReceitas.length) {
                return console.log("Receita não encontrada")
            }

            listaDeReceitas = novaListaDeReceitas;
            console.log("Receita deletada com sucesso")
    }

    //console.log(listaDeReceitas);

    cadastrarReceita(
        2,
        "Ovo Frito",
        "Simples",
        ["1 ovo", "1 colher de azeite", "Sal a gosto"],
        "Leve o azeite ao fogo, coloque o ovo e coloque o sal",
        "https://wwww.google.com.br",
        "false",
    );

    //console.log(listaDeReceitas);

    exibirReceitas();
    deletarReceita(1);
    exibirReceitas();




//     listaDeReceitas.push(novaReceita);

//     console.log(`Cadastro da receita "${titulo}" feito com sucesso!`);

// };

// function exibirReceitas(){
//     for(let i=0; i< listaDeReceitas.çenght, i++)

//         const receita = listaDeReceitas[i];
//         //olhar print 1 e 2 - Olhar no github o material do professor//////

//     }
// }

//     cadastrarReceita(
//         2,
//         "Ovo frito",
//         "Simples",
//         ["1 ovo", "1 colher de azeite", "Sal a gosto"],
//         "Quebre o ovo, jogue na frigideira, coloque sal",
//         "https://www.google.com",
//         false,
//         );
    
//         console.log(listaDeReceitas)

    