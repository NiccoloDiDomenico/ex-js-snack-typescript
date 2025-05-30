// Snack 1
let dato: unknown;

switch (true) {
    case typeof dato === 'string':
        console.log((dato as string).toUpperCase());
        break;
    case typeof dato === 'number':
        console.log((dato as number) * 2);
        break;
    case typeof dato === 'boolean':
        console.log((dato as boolean) ? 'Si' : 'No');
        break;
    // Bonus
    case dato === null:
        console.log('Il dato è vuoto');
        break;
    case Array.isArray(dato):
        console.log(dato.length);
        break;
    case dato instanceof Promise:
        dato.then(value => console.log(value));
        break;
    default:
        console.log('Tipo non supportato');
}

// Snack 2
type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: 'm' | 'f',
    anniDiServizio: number[],
    // Bonus
    readonly emailAziendalee: string,
    contratto: "indeterminato" | "determinato" | "freelance"
};

// Snack 3
type Developer = Dipendente & {
    livelloDiEsperienza: 'junior' | 'mid' | 'senior',
    linguaggi?: string[],
    certificazioni: string[],
};

type ProjectManager = Dipendente & {
    teamSize: null | number,
    budgetGestito?: number,
    stakeholderPrincipali: string[],
};

// Bonus
type Team = {
    nome: string,
    progettoAttuale: null | string,
    budget: number,
    membri: [ProjectManager, Developer, ...Developer[]]
};

