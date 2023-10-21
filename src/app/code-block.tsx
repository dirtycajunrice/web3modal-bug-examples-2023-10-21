"use client";

import { CopyBlock, dracula } from "react-code-blocks";

export const CodeBlock = ({ text, language = "js" }: { text: string, language?: string}) => {
  return (
    <CopyBlock
      // @ts-ignore
      language={language}
      showLineNumbers
      wrapLines
      theme={dracula}
      text={text}
    />
  )
}
