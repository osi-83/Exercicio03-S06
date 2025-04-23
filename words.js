const words = [
    { word: "abacaxi", clue: "Fruta tropical amarela e doce." },
    { word: "amigo", clue: "Pessoa com quem você tem uma amizade." },
    { word: "bicicleta", clue: "Meio de transporte com duas rodas." },
    { word: "cachorro", clue: "Animal de estimação muito popular." },
    { word: "elefante", clue: "O maior mamífero terrestre." },
    { word: "gato", clue: "Animal doméstico muito popular, adorado no Egito." },
    { word: "livro", clue: "Objeto contendo textos e/ou imagens, geralmente encadernado." },
    { word: "abismo", clue: "Profundidade muito grande." },
    { word: "abismo", clue: "Profundidade muito grande." },
    { word: "lua", clue: "Satélite natural da Terra." },
    { word: "programacao", clue: "Atividade que envolve escrever código para criar programas." },
    { word: "chave", clue: "Objeto utilizado para abrir fechaduras." },
    { word: "montanha", clue: "Grande elevação natural de terreno." },
    { word: "computador", clue: "Máquina eletrônica usada para processamento de informações." },
    { word: "carro", clue: "Veículo motorizado utilizado para transporte de pessoas." },
    { word: "escola", clue: "Principal local de ensino em nível fundamental e médio." },
    { word: "dente", clue: "Parte do corpo que usamos para mastigar." },
    { word: "praia", clue: "Área de areia à beira-mar." },
    { word: "floresta", clue: "Grande área coberta por árvores." },
    { word: "sol", clue: "Estrela que dá luz e calor à Terra." },
    { word: "cavalo", clue: "Animal que pode ser montado e é usado para transporte e trabalho." },
    { word: "internet", clue: "Rede mundial de computadores interligados." },
    { word: "estudo", clue: "Atividade de aprendizado e aquisição de conhecimento." },
    { word: "femur", clue: "Maior osso do corpo humano." },
    { word: "coracao", clue: "Órgão responsável pela circulação sanguínea." },
    { word: "telefone", clue: "Dispositivo utilizado para comunicação à distância." },
    { word: "futebol", clue: "Esporte coletivo jogado com uma bola e dois times." },
    { word: "jardim", clue: "Espaço de terra cultivado com plantas e flores." },
    { word: "pintura", clue: "Atividade artística de aplicar tinta em uma superfície." },
    { word: "aviao", clue: "Veículo aéreo utilizado para transporte de pessoas e mercadorias." },
    { word: "teatro", clue: "Arte de representar histórias com atores e público." },
    { word: "universo", clue: "Tudo o que existe, incluindo estrelas, planetas, galáxias, etc." }
];
   
export default function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}