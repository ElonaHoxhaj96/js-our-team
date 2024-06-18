// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// creo il mio ciclo di object
const arrayteam = [
    {
        "nomeECognome": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo.jpg",
    }, 
    {
        "nomeECognome": "Angela OPEN",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg",
    },
    {
        "nomeECognome": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager.jpg",
    },
    {
        "nomeECognome": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg",
    },
    {
        "nomeECognome": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg",
    },
    {
        "nomeECognome": "Barbara Ramos",
        "role": "Founder & CEO",
        "image": "barbara-ramos-graphic-designer.jpg",
    }
];
//seleziono il contenirore in pagina
let riga  = document.querySelector(".cards_member");
// ciclo tuuti i membri per stampargli singolarmente 
for (let i = 0; i < arrayteam.length; i++){
    let teamMemer = arrayteam[i];
    let nomeMembro = teamMemer.nomeECognome;
    let ruoloMembro = teamMemer.role;
    let photoMembro = teamMemer.image;
    console.log(nomeMembro, ruoloMembro, photoMembro);


    let card = `<div class="col-4"> ${nomeMembro + ' - '+  ruoloMembro + ' - ' + photoMembro} </div>`;
    console.log(card);
    riga.innerHTML += card;
}
  
  