#!/usr/bin/env node

import { Command } from 'commander';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
const program = new Command();

clear();
console.log(chalk.yellow(figlet.textSync('MocDoc', { horizontalLayout: 'full' })));
