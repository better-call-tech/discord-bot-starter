import {
    ButtonInteraction,
    UserSelectMenuBuilder
} from 'discord.js'
import Button from '../templates/button.js'
import { createSelectMenu } from '../utils/selectMenuBuilder.js'
import { createActionRows } from '../utils/actionRowBuilder.js'
import { createEmbed } from '../utils/embedBuilder.js'

export default new Button({
    customId: 'selectOption',
    async execute(interaction: ButtonInteraction) {
        const selectMenu = createSelectMenu({
            type: 'user',
            customId: 'userSelect',
            placeholder: 'Select a user'
        }) as UserSelectMenuBuilder

        const rows = createActionRows([selectMenu])

        const embed = createEmbed({
            title: 'Select a User',
            description: 'This is a test embed with a dropdown menu for selecting a user.',
            color: '#00ff00',
            footer: 'User selection embed',
            timestamp: true,
        });

        await interaction.reply({
            content: 'Here is a dropdown menu:',
            components: rows,
            embeds: [embed],
            ephemeral: true
        })
    }
})

