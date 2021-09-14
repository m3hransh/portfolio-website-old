import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';

interface MarkdownProps {
  className?: string;
  markdown?: string;
}

const Markdown: FC<MarkdownProps> = ({ className, markdown }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Timer to do the prcessing of markdown
    const timer = setTimeout(() => setLoading(true), 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className={className}>
      {!loading ? (
        <div className="flex b items-center justify-center">
          <Loader
            type="ThreeDots"
            color="rgb(79, 70, 229)"
            height={80}
            width={80}
          />
        </div>
      ) : (
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default Markdown;
