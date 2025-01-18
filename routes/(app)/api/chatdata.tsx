import { define } from '@/lib/utils/utils.ts';
import { StreamSSR } from '../../../lib/stream/stream-sse.ts';
import { db } from '@/lib/utils/utils.ts';
import { HttpError } from 'fresh';
import { STATUS_CODE } from '@std/http/status';
import { ChatData } from '@/app/types.ts';
import { getChatData } from '@/app/chat-data.ts';

export const handler = define.handlers(async (ctx) => {
  if (!ctx.state.user) throw new HttpError(STATUS_CODE.Unauthorized);

  const path = ['chat', ctx.state.user.id];

  if (ctx.req.method == 'GET') {
    return StreamSSR({ watchKey: path });
  } else if (ctx.req.method == 'POST') {
    const chatData = await ctx.req.json() as ChatData;

    // Remove old messages
    chatData.messages = chatData.messages.slice(-20);
    await db.set(path, chatData);
    return Response.json({});
  } else if (ctx.req.method === 'DELETE') {
    const chatData = await getChatData(ctx.state.user);
    if (chatData.messages.length) chatData.messages = [chatData.messages[0]];
    await db.set(path, chatData);
    return new Response(null, { status: STATUS_CODE.NoContent });
  } else {
    throw new HttpError(STATUS_CODE.MethodNotAllowed);
  }
});
