import { Events, Guild } from 'discord.js'
import Event from '../templates/event.js'
import { deployCommands } from '../deploy-commands.js'

export default new Event({
    name: Events.GuildCreate,
    once: true,
    execute: async (guild: Guild) => {
        console.log(`Bot added to a new guild: ${guild.id}`)
        await deployCommands({ guildId: guild.id })
    }
})

