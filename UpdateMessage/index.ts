import { Client, Events, GatewayIntentBits, TextChannel } from 'discord.js';
import type { AzureFunction, Context } from '@azure/functions';
import { getEnv } from '../src/utils/getEnv';

const UpdateMessage: AzureFunction = async (
  context: Context,
): Promise<void> => {
  context.log.info('UpdateMessage timer function triggered');

  try {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.once(Events.ClientReady, () => {
      context.log.info('UpdateMessage client ready');
    });

    const token = getEnv('DISCORD_TOKEN');

    await client.login(token);

    const channelIdRekt = getEnv('CHANNEL_ID_REKT');

    const channel = await client.channels.fetch(channelIdRekt);

    if (channel && channel instanceof TextChannel) {
      const messages = await channel.messages.fetch();
      const lastMsg = messages
        .filter((m) => m.author.id === client.user?.id)
        .first();

      if (lastMsg) {
        await lastMsg.edit(`test ${Date.now()}`);
      } else {
        await channel.send(`test ${Date.now()}`);
      }
    } else {
      throw new Error('Channel not found');
    }
  } catch (error) {
    context.log.error('UpdateMessage timer function error:', error);
  }
};

export default UpdateMessage;
