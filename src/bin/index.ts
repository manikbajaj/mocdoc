#!/usr/bin/env node
import { Command } from 'commander';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
import child_process, { ExecException } from 'child_process';

/* Import the project files*/
import files from '../lib/commands/files/files';

/* Clear the console before printing anything */
clear();

/* Create the new instance of Commander*/
const program = new Command();

/* Declare default usage of Mocdoc */
program.usage('command [option]');

/* Adding a description */
program.description('An application for pizza ordering');

/*Parse all the options added to programn object*/
program.parse(process.argv);

/* Print the mocdoc logo using chalk and ASCII characters*/
console.log(chalk.yellow(figlet.textSync('MocDoc', { horizontalLayout: 'full' })));

/* Instantiate the help command by default if only mocdoc is executed without options*/
child_process.exec(
    'mocdoc --help',
    (error: ExecException | null, stdout: string, stderr: string): void => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    }
);

const directory = files.getCurrentDirectoryBase();
console.log(files.getCurrentDirectoryBase());
console.log(files.directoryExists(directory));
