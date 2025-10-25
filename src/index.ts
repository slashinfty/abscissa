#!/usr/bin/env node
//const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
//import AsciiTable3 from 'ascii-table3';

/* Node.js imports */
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { stdin, stdout } from 'node:process';
import * as readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

/* Package imports */
import chalk from 'chalk';
import figlet from 'figlet';
import TO from 'tournament-organizer';
import { Tournament } from 'tournament-organizer/components';

/* Local imports */
import { setup } from './setup.js';

/* Package version - generated with prebuild script */
import { VERSION } from './version.js';

/* Readline setup and export */
export const rl: readline.Interface = readline.createInterface({ 
    input: stdin,
    output: stdout
});
const ctrl: AbortController = new AbortController();
rl.on('SIGINT', () => {
    ctrl.abort();
    rl.close();
});

/* Exports */
export const manager = new TO();
export var tournament: Tournament;

/* Welcome function */
const welcome = async (): Promise<void> => {
    const title = await figlet.text('abscissa', { font: 'Modular' });
    console.clear();
    console.log(chalk.green(title));
    console.log(`\n\n${chalk.blue(`Version ${VERSION}`)}`);
    console.log(`\n\n[1] New Tournament\n[2] Load Tournament\n[0] Close`);
    const response = await rl.question(`\n>> `);
    if (response === '1') {
        setup();
    } else if (response === '2') {
        // load function
    } else {
        rl.close();
    }
}
welcome();
