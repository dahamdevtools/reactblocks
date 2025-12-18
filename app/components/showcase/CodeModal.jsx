import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

export default function CodeModal({ isOpen, onClose, component }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(0);
      setCopied(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const copyToClipboard = async () => {
    try {
      const currentFile = component.files[activeTab];
      await navigator.clipboard.writeText(currentFile.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!isOpen) return null;

  const currentFile = component.files[activeTab];

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center p-10 fixed top-0 left-0 z-40 bg-neutral-500/10 dark:bg-neutral-950/50">
      <div className="w-full max-w-7xl h-fit max-h-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl flex flex-col overflow-hidden">
        <div className="w-full flex justify-between gap-8 p-8 border-b border-b-neutral-200 dark:border-b-neutral-800">
          <div className="w-full flex flex-col gap-1.5">
            <h3 className="text-2xl font-semibold">{component.name}</h3>
            <p className="text-neutral-500 text-ellipsis line-clamp-2 md:line-clamp-none">
              {component.description}
            </p>
          </div>
          <div className="w-fit h-full flex items-start">
            <button
              onClick={() => onClose()}
              className="w-7 h-7 flex items-center justify-center aspect-square rounded-full border-4 border-rose-200 dark:border-rose-900 bg-rose-400 dark:bg-rose-600 text-neutral-50 cursor-pointer"
            >
              <LuX className="text-sm text-rose-200" />
            </button>
          </div>
        </div>
        <div className="w-full h-fit flex flex-wrap gap-2 px-8 py-3.5">
          {component.files.map((file, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setCopied(false);
              }}
              className={`px-5 py-2.5 rounded-xl cursor-pointer ${
                activeTab === index
                  ? "bg-neutral-200/50 dark:bg-neutral-700/50"
                  : "bg-neutral-100 dark:bg-neutral-800/50"
              }`}
            >
              {file.name}
            </button>
          ))}
        </div>
        <div className="w-full flex-1 min-h-0 border-y border-y-neutral-200 dark:border-y-neutral-800 overflow-auto">
          <SyntaxHighlight
            code={currentFile.code}
            language={currentFile.language}
            theme={theme}
          />
        </div>
        <div className="w-full h-fit p-8 gap-3 flex flex-wrap items-center justify-end">
          <button
            onClick={copyToClipboard}
            className="w-fit h-fit px-5 py-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-xl cursor-pointer"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <a
            href={component.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-xl cursor-pointer"
          >
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
}

function SyntaxHighlight({ code, language, theme }) {
  const lines = code.split("\n");

  return (
    <pre className="leading-relaxed w-full p-6 overflow-x-auto">
      <code className="block min-w-max">
        {lines.map((line, i) => {
          const highlightedLine = highlightSyntax(line, language, theme);

          return (
            <div key={i} className="flex">
              <span className="inline-block text-right pr-4 select-none text-neutral-400 w-12 shrink-0">
                {i + 1}
              </span>
              <span className="inline-block min-w-0 flex-1 pr-6">
                {highlightedLine}
              </span>
            </div>
          );
        })}
      </code>
    </pre>
  );
}

function highlightSyntax(line, language, theme) {
  if (!line.trim()) {
    return <span className="inline-block h-5">&nbsp;</span>;
  }

  if (language === "jsx" || language === "javascript" || language === "js") {
    return highlightJSX(line, theme);
  }

  if (language === "css") {
    return highlightCSS(line, theme);
  }

  return <span>{line}</span>;
}

const COLORS = {
  light: {
    comment: "#6B8E23", // Olive green
    string: "#A0522D", // Sienna brown
    keyword: "#9B59B6", // Purple
    function: "#0066CC", // Blue
    prop: "#008B8B", // Dark cyan
    tag: "#16A085", // Teal
    number: "#27AE60", // Green
    identifier: "#2C3E50", // Dark slate
    punctuation: "#7F8C8D", // Gray
    selector: "#D2691E", // Chocolate
    property: "#008B8B", // Dark cyan
    value: "#34495E", // Dark slate blue
  },
  dark: {
    comment: "#6A9955", // Green
    string: "#CE9178", // Orange
    keyword: "#C586C0", // Purple
    function: "#DCDCAA", // Yellow
    prop: "#9CDCFE", // Light blue
    tag: "#4EC9B0", // Cyan
    number: "#B5CEA8", // Light green
    identifier: "#9CDCFE", // Light blue
    punctuation: "#D4D4D4", // Light gray
    selector: "#D7BA7D", // Gold
    property: "#9CDCFE", // Light blue
    value: "#CE9178", // Orange
  },
};

function highlightJSX(line, theme = "light") {
  const colors = COLORS[theme];
  const tokens = [];
  let remaining = line;
  let key = 0;

  const patterns = [
    { regex: /^(\/\/.*$)/, color: colors.comment, type: "comment" },
    { regex: /^(\/\*[\s\S]*?\*\/)/, color: colors.comment, type: "comment" },
    {
      regex: /^(['"`])((?:\\.|(?!\1)[^\\])*)\1/,
      color: colors.string,
      type: "string",
    },
    {
      regex:
        /^(export|default|function|const|let|var|if|else|return|import|from|class|extends|new|this|super|static|async|await|try|catch|finally|throw|typeof|instanceof|in|of|for|while|do|break|continue|switch|case|null|undefined|true|false)\b/,
      color: colors.keyword,
      type: "keyword",
    },
    {
      regex: /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/,
      color: colors.function,
      type: "function",
    },
    {
      regex:
        /^(className|onClick|onChange|onClose|disabled|type|value|placeholder|href|src|alt|style|id|key|ref)\b/,
      color: colors.prop,
      type: "prop",
    },
    { regex: /^(<\/?[a-zA-Z][a-zA-Z0-9]*>?)/, color: colors.tag, type: "tag" },
    { regex: /^(\d+\.?\d*)/, color: colors.number, type: "number" },
    {
      regex: /^([a-zA-Z_$][a-zA-Z0-9_$]*)/,
      color: colors.identifier,
      type: "identifier",
    },
    {
      regex: /^([{}[\]().,;:=<>!&|+\-*/%?])/,
      color: colors.punctuation,
      type: "punctuation",
    },
    { regex: /^(\s+)/, color: null, type: "whitespace" },
  ];

  while (remaining.length > 0) {
    let matched = false;

    for (const pattern of patterns) {
      const match = remaining.match(pattern.regex);
      if (match) {
        const text = match[0];

        if (pattern.color) {
          tokens.push(
            <span key={key++} style={{ color: pattern.color }}>
              {text}
            </span>
          );
        } else {
          tokens.push(<span key={key++}>{text}</span>);
        }

        remaining = remaining.slice(text.length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      tokens.push(<span key={key++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }
  }

  return <>{tokens}</>;
}

function highlightCSS(line, theme = "light") {
  const colors = COLORS[theme];
  const tokens = [];
  let remaining = line;
  let key = 0;

  const patterns = [
    { regex: /^(\/\*[\s\S]*?\*\/)/, color: colors.comment, type: "comment" },
    {
      regex: /^([.#]?[a-zA-Z][a-zA-Z0-9-_]*)\s*(?=[{:])/,
      color: colors.selector,
      type: "selector",
    },
    { regex: /^([a-z-]+)(?=\s*:)/, color: colors.property, type: "property" },
    {
      regex: /^(['"])((?:\\.|(?!\1)[^\\])*)\1/,
      color: colors.string,
      type: "string",
    },
    {
      regex: /^(\d+(?:px|em|rem|%|vh|vw|s|ms|deg)?)/,
      color: colors.number,
      type: "value",
    },
    { regex: /^([a-zA-Z-]+)/, color: colors.value, type: "value" },
    { regex: /^([{}:;,])/, color: colors.punctuation, type: "punctuation" },
    { regex: /^(\s+)/, color: null, type: "whitespace" },
  ];

  while (remaining.length > 0) {
    let matched = false;

    for (const pattern of patterns) {
      const match = remaining.match(pattern.regex);
      if (match) {
        const text = match[0];

        if (pattern.color) {
          tokens.push(
            <span key={key++} style={{ color: pattern.color }}>
              {text}
            </span>
          );
        } else {
          tokens.push(<span key={key++}>{text}</span>);
        }

        remaining = remaining.slice(text.length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      tokens.push(<span key={key++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }
  }

  return <>{tokens}</>;
}
