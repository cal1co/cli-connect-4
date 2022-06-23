#! /usr/bin/env node

import board from './board.js'
import msg from './messages.js'


await msg.welcome()
await msg.gameTypePrompt()
board.drawBoard()
await msg.playPrompt()