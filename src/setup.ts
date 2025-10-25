/* Package imports */
import chalk from 'chalk';

/* Local imports */
import { manager, rl, tournament } from './index.js';

/* Setup function */
export const setup = async (): Promise<void> => {
    let name = '';
    do {
        console.log(`\n${chalk.green('New Tournament')}\n\nTournament Name`);
        let response = await rl.question(`>> `);
        name = response.trim();
        if (name === '') {
            console.log(`\n${chalk.red('Name is required and cannot be blank')}`);
        }
    } while (name === '');
    const formats = [
        'Single Elimination',
        'Double Elimination',
        'Stepladder',
        'Swiss',
        'Round-Robin',
        'Double Round-Robin'
    ];

    console.log(`\nTournament Format`);
    console.log(formats.reduce((str, format, i) => `${str}[${i + 1}] ${format}\n`, `\n`));
    let format: string;
    do {
        let response = await rl.question(`>> `);
        if (parseInt(response) <= 0 || parseInt(response) > formats.length || isNaN(parseInt(response))) {
            console.log(`\n${chalk.red(`${response} is an invalid selection\n`)}`)
        } else {
            format = formats[parseInt(response) - 1].toLowerCase().replace(/\s/g, '-');
        }
    } while (format === undefined);

    let consolation: boolean;
    let numberOfRounds: number;
    let playoffs: object;
    if (['single-elimination', 'double-elimination', 'stepladder'].includes(format)) {
        console.log(`\nThird Place Match?`);
        console.log(`\n[1] Yes\n[2] No`);
        do {
            let response = await rl.question(`\n>> `);
            if (parseInt(response) <= 0 || parseInt(response) > 2 || isNaN(parseInt(response))) {
                console.log(`\n${chalk.red(`${response} is an invalid selection\n`)}`);
            } else {
                consolation = response === '1';
            }
        } while (consolation === undefined);
    } else {
        if (format === 'swiss') {
            console.log(`\nNumber of Rounds?\n(Leave blank or enter 0 to be determined by number of playrs)`);
            do {
                let response = await rl.question(`>> `);
                
            } while (numberOfRounds === undefined);
        }
        // playoffs? if yes, consolation? cut method/value?
    }

    // max number of players?

    // custom IDs for players?

    // values for players?

    // seating order matters?

    // starting round number?

    // scoring values?

    // tiebreaks?

    // save path

    // create tournament
}