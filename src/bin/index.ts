#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
const program = new Command();

console.log(chalk.yellow(figlet.textSync('MocDoc', { horizontalLayout: 'full' })));
