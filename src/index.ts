import { Client, GatewayIntentBits } from 'discord.js'
import { config } from './config.js'
import { readdirSync } from 'fs'
import path, { dirname, join } from 'path'
import type Event from './templates/event.js'
import { fileURLToPath } from 'url'

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
})

const loadEvents = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const eventsPath = join(__dirname, './events')

    console.log(`Looking for event files in: ${eventsPath}`)

    const eventFiles: string[] = readdirSync(eventsPath).filter(
        (file) => file.endsWith('.js') || file.endsWith('.ts')
    )

    for (const file of eventFiles) {
        const event: Event = (await import(`./events/${file}`)).default as Event
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args))
        } else {
            client.on(event.name, (...args) => event.execute(...args))
        }
    }
}

const startBot = async () => {
    await loadEvents()

    try {
        await client.login(config.DISCORD_TOKEN)
        console.log('Bot has logged in successfully.')
    } catch (err) {
        console.error('Login failed:', err)
    }
}

startBot()
