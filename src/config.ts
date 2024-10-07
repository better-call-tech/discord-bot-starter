import dotenv from 'dotenv'

dotenv.config()

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env

if (!DISCORD_TOKEN)
    throw new Error('Missing DISCORD_TOKEN environment variable')
if (!DISCORD_CLIENT_ID)
    throw new Error('Missing DISCORD_CLIENT_ID environment variable')
if (!DISCORD_GUILD_ID)
    throw new Error('Missing DISCORD_GUILD_ID environment variable')

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID
}
