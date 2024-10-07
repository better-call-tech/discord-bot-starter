import { Interaction } from 'discord.js';
import { SelectMenuInteractionType } from '../templates/selectMenu.js';


export function isSelectMenuInteraction(
  interaction: Interaction
): interaction is SelectMenuInteractionType {
  return (
    interaction.isStringSelectMenu() ||
    interaction.isUserSelectMenu() ||
    interaction.isRoleSelectMenu() ||
    interaction.isChannelSelectMenu() ||
    interaction.isMentionableSelectMenu()
  );
}
