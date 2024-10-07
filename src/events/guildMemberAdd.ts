import { Events, GuildMember } from 'discord.js'
import Event from '../templates/event.js'
import { createUser, findUserByDiscordId } from '../services/userService.js'

export default new Event({
    name: Events.GuildMemberAdd,
    once: true,
    async execute(member: GuildMember) {
        const discordId = member.id
        const username = member.user.username

        try {
            const existingUser = await findUserByDiscordId(discordId)

            if (!existingUser) {
                await createUser(discordId, username)
                console.log(`New user ${username} has been created`)
            } else {
                console.log(`User ${username} already exists in the database.`)
            }
        } catch (error) {
            console.error(`Error processing new member ${username}:`, error)
        }
    }
})

