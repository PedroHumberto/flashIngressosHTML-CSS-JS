class Ingresso{
    constructor(data, nome, endereco, tipo, imagem){
        this.data = data;
        this.nome = nome;
        this.endereco = endereco;
        this.tipo = tipo;
        this.imagem = imagem;
    };
};
let ingressosDestaque = [];
let ingressosFilme =[];
let infoIngressos = [                      
                 ["SEX, 27 AGO 12:00", "TANGO NA RUA","Rua Barata Ribeiro, Rio de Janeiro - RJ","destaque", "tango.jpg"], 
                 ["03 DEZ > 28 DEZ","DEADPOOL", "Cinemax", "destaque" , "DeadPool.jpg"], 
                 ["15 DEZ > 20 DEZ", "ORQUESTRA FILARMONICA DE OURO PRETO", "Teatro Municipal do Rio de Janeiro", "destaque" , "orquestra.jpg"], 
                 ["10 DEZ > 20 DEZ", "Circo Da Alegria", "Praça Tira Dentes", "destaque" ,"circo.jpg"],
                 ["05 JAN > 15 JAN", "A MINHA VIDA", "Cinemax", "filme","filmeminhavida.jpg"],
                 ["15 JAN > 30 JAN", "TENET", "Cinemax", "filme","tenet.jpg"],
                 ["15 JAN > 30 JAN", "BACURAU", "Cinemax", "filme","bacurau.jpg"],
                 ["15 JAN > 30 JAN", "VENOM", "Cinemax", "filme","venom.jpg"]
];
//ingressos de destaque
for(let i = 0; i<infoIngressos.length; i++){
    let ingressos = new Ingresso(infoIngressos[i][0], infoIngressos[i][1], infoIngressos[i][2], infoIngressos[i][3],infoIngressos[i][4])
    if (ingressos.tipo === 'destaque'){
        ingressosDestaque.push(ingressos)
    }
    else if(ingressos.tipo === "filme"){
        ingressosFilme.push(ingressos)
    } 
};
//Ingressos destaques
ingressosDestaque.forEach(ingresso => {
    const getHtml = document.querySelector(".lista-destaques")       
        getHtml.innerHTML += ` <div class="card">
                                    <div class="card-img"><img src="/img/${ingresso.imagem}" alt="${ingresso.nome}" title="${ingresso.nome}"></div>
                                    <div class="card-content">
                                    <p class="dia">${ingresso.data}</p>
                                    <p class="nome">${ingresso.nome}</p>
                                    <p class="endereco">${ingresso.endereco}</p>
                                </div>`                          
});
//Ingressos filmes
ingressosFilme.forEach(ingresso => {
    const getHtml = document.querySelector(".lista-filmes")       
        getHtml.innerHTML += ` <div class="card">
                                    <div class="card-img"><img src="/img/${ingresso.imagem}" alt="${ingresso.nome}" title="${ingresso.nome}"></div>
                                    <div class="card-content">
                                    <p class="dia">${ingresso.data}</p>
                                    <p class="nome">${ingresso.nome}</p>
                                    <p class="endereco">${ingresso.endereco}</p>
                                </div>`
});