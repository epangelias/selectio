import { useComputed, useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import IconBack from 'tabler-icons/arrow-left.tsx';
import IconPlus from 'tabler-icons/plus.tsx';
import { fetchOrError } from '@/lib/utils/fetch.ts';
import { useGlobal } from '@/islands/Global.tsx';
import { renderMarkdown } from '@/lib/utils/md.ts';

interface Thread {
  title: string;
  selectedText: string;
  loading: boolean;
  content: string;
}

async function getAnswer(selection: string, context: string) {
  const res = await fetchOrError<{ content: string }>('/api/get-answer', {
    method: 'POST',
    body: {
      selection,
      context,
    },
  });
  return res;
}

export function AnswerBox() {
  const global = useGlobal();
  const selectedText = useSignal('');
  const selectionContext = useSignal('');
  const threads = useSignal<Thread[]>([]);
  const currentThread = useComputed(() => threads.value.at(-1));
  const canGenerate = useComputed(() => selectedText.value && currentThread.value?.selectedText != selectedText.value);

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      const selection = globalThis.getSelection()!;
      selectedText.value = selection.toString() || '';
      selectionContext.value = selection.anchorNode?.textContent || '';
    });
  }, []);

  async function generateAnswer() {
    if (global.user.value?.tokens! <= 0 && !global.user.value?.isSubscribed) {
      alert('No tokens');
      return;
    }

    const thread = {
      title: selectedText.value,
      selectedText: selectedText.value,
      loading: true,
    } as Thread;
    threads.value = [...threads.value, thread];

    try {
      const answer = await getAnswer(selectedText.value, selectionContext.value);
      console.log(answer);
      thread.content = answer.content;
    } catch (e) {
      console.error('Error loading answer: ', e);
      thread.content = 'Error loading: ' + e.message;
    }

    thread.loading = false;
    threads.value = [...threads.value];
  }

  function back() {
    threads.value = threads.value.slice(0, -1);
  }

  useEffect(() => {
    const selectWord = (event: MouseEvent) => {
      if (selectedText.value) return;

      const target = event.target as HTMLElement;

      if (target && target.nodeType === Node.ELEMENT_NODE) {
        const range = document.createRange();
        const selection = globalThis.getSelection();

        if (selection && target.firstChild) {
          range.selectNodeContents(target);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    };

    const initializeWordSelect = () => {
      document.querySelectorAll('[data-role] .word').forEach((element) => {
        (element as HTMLElement).addEventListener('click', selectWord);
      });
    };

    const observer = new MutationObserver(() => initializeWordSelect());
    observer.observe(document.body, { childList: true, subtree: true });
    initializeWordSelect();
  }, []);

  if (!canGenerate.value && !currentThread.value) return <></>;

  return (
    <div class='answer-box'>
      {!!threads.value.length
        ? (
          <>
            {canGenerate.value &&
              (
                <button class='generate-small' onClick={generateAnswer}>
                  <IconPlus />
                </button>
              )}
            <button class='back' onClick={back}>
              <IconBack />
            </button>
            <div style={{ textAlign: 'center' }}>
              <h3>{currentThread.value?.title}</h3>
              {currentThread.value?.loading ? <div className='loader'></div> : (
                <div
                  dangerouslySetInnerHTML={{ __html: currentThread.value?.content! }}
                  style={{ textAlign: 'left' }}
                  class='scrollable'
                >
                </div>
              )}
            </div>
          </>
        )
        : (
          <>
            <p class='selection-preview'>{selectedText.value}</p>
            <button disabled={!canGenerate.value} class='generate' onClick={generateAnswer}>Generate Answer</button>
          </>
        )}
    </div>
  );
}
