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
    const timer = setTimeout(() => setLoading(true), 2000);
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
          children={markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      )}
    </div>
  );
};

export default Markdown;
