import { define } from '@/lib/utils/utils.ts';
import { AIMessage } from '@/lib/stream/types.ts';
import { StreamAI } from '../../../lib/stream/stream-ai.ts';
import { setUserData } from '../../../lib/user/user-data.ts';
import { HttpError } from 'fresh';
import { STATUS_CODE } from '@std/http/status';
import { getChatData, setChatData } from '@/app/chat-data.ts';
import { generateChatCompletion } from '@/lib/stream/oai.ts';
import { renderMarkdown } from '@/lib/utils/md.ts';

export const handler = define.handlers({
  POST: async (ctx) => {
    const user = ctx.state.user;

    if (!user) throw new HttpError(STATUS_CODE.Unauthorized);
    if (user.tokens <= 0 && !user.isSubscribed) throw new HttpError(STATUS_CODE.Unauthorized);
    await setUserData(user.id, (u) => u.tokens--);

    const options: { selection: string; context: string } = await ctx.req.json();

    const messages: AIMessage[] = [
      {
        role: 'system',
        content:
          `Explain the following latin word or selection "${options.selection}" in the context "${options.context}. Respond in only 20-50 words. Explain the significance, roots, and if there is a related English word to aid memory."`,
      },
    ];

    const response = await generateChatCompletion(undefined, messages);

    const content = await renderMarkdown(response.choices[0].message.content!);

    return Response.json({
      content: content,
    });
  },
});
