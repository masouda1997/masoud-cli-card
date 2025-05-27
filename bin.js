#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("                    Hi, My name is ");
const name = chalk.red.bold.italic("Masoud!");
const title = chalk.white.bold("Front-End Developer");
const skills= chalk.red.bold.italic("TypeScript, JavaScript, React.js, Next.js.")
const aboutMe = chalk.italic("I'm a passionate front developer in the JavaScript ecosystem\nworking with ");

const contact = `
${chalk.bold.white("Email:")}     masoud.anaraki97@gmail.com
${chalk.bold.white("GitHub:")}    https://github.com/masouda1997
${chalk.bold.white("LinkedIn:")}  https://www.linkedin.com/in/masoud-anaraki
`;

const output = boxen(`${greeting}${name}\n\n\n${title}\n\n${aboutMe}${skills}\n\n${contact}`, {
    padding: 3,
    margin: 1,
    borderStyle: "round",
    borderColor: "red",
    dimBorder:true
});

console.log(output);
