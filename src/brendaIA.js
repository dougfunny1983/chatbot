const answer_1 = {
    "Não estou encontrando a chave do carro": "Elas estão no Porta Luvas! Caso não, verifique no contato e próximo ao cambio. Encontrou?",
};

const answer_2 = {
    Não: "Isso foi um erro nosso! Nossa equipe da agência irá ajuda-lo. Vamos adiciona-lo em uma fila especial de atendimento.",
};

const answer_3 = {
    "Encontrei uma avaria no carro": "Não se preocupe, já mapeamos essa situação do carro! Salvamos sua mensagem como garantia de segurança. Caso deseja, pode tirar um foto para registrar",
};

const answer_4 = {
    "Posso Escolher outro veículo?": "A escolha de veículo é feito pela disponibilidade de carros no grupo reservado, de modo a não ser possível a troca.",
};

const answer_5 = {
    "Não sei o que é o FAST": "O FAST é a forma agilizada de locação da Localiza! Você não precisa passar no balcão, é só ir direto para o carro! Posso guiar você até lá, as chaves já estão no porta-luvas. Vamos lá?",
};

const answer_6 = {
    "Não estou encontrando o meu carro": "Não se preocupe, eu vou te ajudar! Posso guia-lo pelo mapa e ativar um sinal sonoro do carro para ajuda-lo. Isso te ajuda?",
};

const answer_7 = {
    "Como é feita a devolução?": "A devolução é feita normalmente, não é necessário estacionar em uma vaga especifica! Ao chegar, nossa equipe da agência ira te dar o apoio necessário. Deseja ir para lá agora?",
};

const answer_8 = {
    "As portas não abrem": "As travas são abertas eletronicamente através do botão. Basta clicar aqui! Consegui te ajudar?",
};

const answer_9 = {
    default: "Não entendi sua pergunta... Poderia digitar novamente?",
};

const answer_10 = {'Obrigado Brenda':'Minha resposta te ajudou?'}

const answer_11 = {'Sim':'Tudo bem, sempre que precisar pode me chamar que estarei aqui pra ajudar! 🥰 Tenha um ótimo dia e boa viagem💚'}

const answer_12 = {'Infelizmente não':'Sinto muito que não consegui te ajudar.'}


const answer_final = {
    ...answer_1,
    ...answer_2,
    ...answer_3,
    ...answer_4,
    ...answer_5,
    ...answer_6,
    ...answer_7,
    ...answer_8,
    ...answer_9,
    ...answer_10,
    ...answer_11,
    ...answer_12,
};

const brendaIA = (question, answer = answer_final) =>
    answer[question] || answer.default;

export default brendaIA;