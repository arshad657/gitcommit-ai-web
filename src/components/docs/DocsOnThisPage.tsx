"use client";

interface OnThisPageItem {
  id: string;
  label: string;
  depth?: number;
}

interface DocsOnThisPageProps {
  items: OnThisPageItem[];
}

export function DocsOnThisPage({ items }: DocsOnThisPageProps) {
  if (!items.length) return null;

  return (
    <aside className="w-44 shrink-0 hidden xl:block">
      <div className="sticky top-20">
        <p className="text-text-muted text-[10px] font-semibold uppercase tracking-widest mb-3 ">
          On this page
        </p>
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: item.depth ? (item.depth - 1) * 10 : 0 }}>
              <a
                href={`#${item.id}`}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors leading-relaxed block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
