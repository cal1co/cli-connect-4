#! /usr/bin/env node

import board from './board.js'
import msg from './messages.js'
import chalkAnimation from 'chalk-animation'


await msg.welcome()
await msg.gameTypePrompt()
board.drawBoard()
await msg.playPrompt()