import { useComputed, useSignal } from '@preact/signals';
import { useEffect, useMemo } from 'preact/hooks';
import IconBack from 'tabler-icons/arrow-left.tsx';
import IconPlus from 'tabler-icons/plus.tsx';

interface Thread {
  title: string;
  selectedText: string;
}

export function AnswerBox() {
  const selectedText = useSignal('');
  const threads = useSignal<Thread[]>([]);
  const currentThread = useComputed(() => threads.value.at(-1));
  const canGenerate = useComputed(() => selectedText.value && currentThread.value?.selectedText != selectedText.value);

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      selectedText.value = globalThis.getSelection()?.toString() || '';
    });
  }, []);

  async function generateAnswer() {
    const thread = {
      title: selectedText.value,
      selectedText: selectedText.value,
    } as Thread;
    threads.value = [...threads.value, thread];
  }

  function back() {
    threads.value = threads.value.slice(0, -1);
  }

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
            <div>
              <h3>{currentThread.value.title}</h3>
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
