import Link from 'next/link';

/**
 * Renders a post section body. Leading markers in each string map to elements:
 *   '## '  -> h2
 *   '### ' -> h3
 *   '- '   -> list item (consecutive items form a <ul>)
 * Everything else is a paragraph. Inline links written as [text](url) are supported.
 */
function renderInline(text: string, key: number) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    parts.push(
      href.startsWith('/') ? (
        <Link key={`l${key}-${i}`} href={href}>
          {label}
        </Link>
      ) : (
        <a key={`l${key}-${i}`} href={href} target="_blank" rel="noopener">
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
    i += 1;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

export default function ArticleBody({ body }: { body: string[] }) {
  const nodes: React.ReactNode[] = [];
  let list: string[] = [];

  const flush = (key: string) => {
    if (list.length) {
      nodes.push(
        <ul key={key}>
          {list.map((item, i) => (
            <li key={i}>{renderInline(item.slice(2), i)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  body.forEach((line, idx) => {
    if (line.startsWith('- ')) {
      list.push(line);
      return;
    }
    flush(`ul-${idx}`);
    if (line.startsWith('### ')) {
      nodes.push(<h3 key={idx}>{renderInline(line.slice(4), idx)}</h3>);
    } else if (line.startsWith('## ')) {
      nodes.push(<h2 key={idx}>{renderInline(line.slice(3), idx)}</h2>);
    } else {
      nodes.push(<p key={idx}>{renderInline(line, idx)}</p>);
    }
  });
  flush(`ul-end`);

  return <>{nodes}</>;
}