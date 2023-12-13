export default class Team {
    constructor(name) {
        this.name = name;
        this.characters = new Set();
    }

    add(character) {
        if (this.characters.has(character)) {
            throw new Error('Такой персонаж уже есть');
        }
        this.characters.add(character);
    }

    // 1 Задача. Итераторы

    [Symbol.iterator]() {
        const teamArray = Array.from(this.characters);
        let current = -1;
        return {
            next() {
                current += 1;
                if (teamArray[current] === undefined) {
                    return {
                        done: true,
                    };
                }
                return {
                    value: teamArray[current],
                    done: false,
                };
            },
        };
    }

    // 2 Задача. Генераторы

    // *[Symbol.iterator]() {
    //     const teamArray = Array.from(this.characters);
    //     for (let i = 0; i <= teamArray.length; i += 1) {
    //         yield teamArray[i];
    //     }
    // }


}

