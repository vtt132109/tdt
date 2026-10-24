/* =========================================================
   Trường điện từ · Ôn thi lý thuyết
   Ứng dụng offline, thuần HTML/CSS/JavaScript.
   ========================================================= */
(function () {
  "use strict";

  const CHAPTERS = Array.isArray(window.CHAPTERS) ? window.CHAPTERS : [];
  const QUESTIONS = (Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : []).filter((q) => {
    return q && q.id && typeof q.question === "string" && Array.isArray(q.options) && q.options.length === 4 &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3;
  });
  const FORMULAS = Array.isArray(window.FORMULAS) ? window.FORMULAS : [];
  const QUESTION_MAP = new Map(QUESTIONS.map((q) => [q.id, q]));
  const CHAPTER_MAP = new Map(CHAPTERS.map((c) => [c.number, c]));
  const STORAGE_KEY = "tdt-review-v1";
  const PASS_SCORE = 70;
  const OPTION_LETTERS = ["A", "B", "C", "D"];
  const ROUTE_LABELS = {
    dashboard: "Tổng quan",
    practice: "Luyện theo chương",
    practiceQuiz: "Đang luyện",
    exam: "Thi thử có giờ",
    examQuiz: "Đang thi",
    result: "Kết quả",
    wrong: "Câu đã làm sai",
    bookmarks: "Câu đánh dấu",
    notebook: "Sổ công thức",
    history: "Lịch sử học",
    settings: "Cài đặt"
  };

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
  const viewEl = $("#view");
  const modalRoot = $("#modal-root");
  const toastRegion = $("#toast-region");

  let store = loadStore();
  sanitizeStore();

  const state = {
    view: "dashboard",
    practiceSetup: { chapter: 1, count: 10 },
    examSetup: { chapters: CHAPTERS.map((c) => c.number), count: 20, duration: 30 },
    practice: null,
    exam: null,
    result: null,
    resultOrigin: "practice",
    wrongFilter: "all",
    bookmarkFilter: "all",
    historyFilter: "all",
    notebookFilter: "all",
    notebookQuery: "",
    formulaCopyMap: {},
    pendingConfirm: null,
    lastFocused: null
  };

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function rich(value) {
    return esc(value).replace(/\n/g, "<br>");
  }

  /* ---------------------------------------------------------
     Lightweight LaTeX for formula-like question text
     --------------------------------------------------------- */

  const MATH_WORDS = new Set([
    "rot", "div", "grad", "sin", "cos", "tan", "cot", "ln", "log", "const",
    "max", "min", "det", "mod"
  ]);
  const NON_MATH_WORDS = new Set([
    "va", "voi", "khi", "trong", "tren", "duoi", "tai", "la", "cho", "co",
    "khong", "theo", "bang", "neu", "thi", "hoac", "mot", "hai", "ba", "cua",
    "dien", "tu", "truong", "dong", "moi", "song", "nguoc", "cung", "chieu",
    "do", "lon", "huong", "diem", "mat", "phan", "cach", "vat", "dan", "thong",
    "cam", "ung", "nang", "luong", "the", "dung", "hieu", "giua", "truc", "goc",
    "phang", "tuyen", "kinh", "vi", "nghiem", "phuong", "trinh", "ham", "so",
    "gia", "tri", "bai", "toan", "ket", "qua", "du", "dang", "ban", "hay",
    "chon", "dap", "an", "sai", "mo", "ta", "tinh", "chat", "dac", "trung",
    "dinh", "nghia", "he", "thuc", "cong", "thuc", "day", "roi", "nhanh",
    "cham", "lon", "nho", "tang", "giam", "phu", "thuoc", "khac", "nhu",
    "sau", "truoc", "len", "xuong", "ra", "vao", "den", "tu", "moi", "nao",
    "gi", "dau", "bao", "nhieu", "it", "tat", "ca", "chi", "rieng", "cung"
  ]);
  const TEX_SYMBOLS = {
    "·": "\\cdot ", "×": "\\times ", "−": "-", "∂": "\\partial ", "∇": "\\nabla ",
    "∫": "\\int ", "∮": "\\oint ", "√": "\\sqrt ", "≈": "\\approx ", "≠": "\\neq ",
    "≤": "\\leq ", "≥": "\\geq ", "→": "\\to ", "↔": "\\leftrightarrow ",
    "⇒": "\\Rightarrow ", "∞": "\\infty ", "∠": "\\angle ", "∥": "\\parallel ",
    "⊥": "\\perp ", "±": "\\pm ", "∝": "\\propto ", "°": "^\\circ ", "½": "\\tfrac12 ",
    "α": "\\alpha ", "β": "\\beta ", "γ": "\\gamma ", "δ": "\\delta ",
    "ε": "\\varepsilon ", "ζ": "\\zeta ", "η": "\\eta ", "θ": "\\theta ",
    "ι": "\\iota ", "κ": "\\kappa ", "λ": "\\lambda ", "μ": "\\mu ",
    "ν": "\\nu ", "ξ": "\\xi ", "π": "\\pi ", "ρ": "\\rho ", "σ": "\\sigma ",
    "τ": "\\tau ", "υ": "\\upsilon ", "φ": "\\varphi ", "χ": "\\chi ",
    "ψ": "\\psi ", "ω": "\\omega ", "Γ": "\\Gamma ", "Δ": "\\Delta ",
    "Θ": "\\Theta ", "Λ": "\\Lambda ", "Ξ": "\\Xi ", "Π": "\\Pi ", "Σ": "\\sum ",
    "Υ": "\\Upsilon ", "Φ": "\\Phi ", "Ψ": "\\Psi ", "Ω": "\\Omega ",
    "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6",
    "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-",
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6",
    "₇": "7", "₈": "8", "₉": "9", "₊": "+", "₋": "-", "ₘ": "m", "ₖ": "k",
    "ₙ": "n", "ᵣ": "r", "ₗ": "l"
  };

  function replaceSqrtGroups(value) {
    let result = "";
    let index = 0;
    while (index < value.length) {
      const start = value.indexOf("√", index);
      if (start === -1) {
        result += value.slice(index);
        break;
      }
      result += value.slice(index, start);
      let cursor = start + 1;
      while (cursor < value.length && value[cursor] === " ") cursor += 1;
      if (value[cursor] !== "(") {
        result += "√";
        index = start + 1;
        continue;
      }
      let depth = 0;
      let end = cursor;
      for (; end < value.length; end += 1) {
        if (value[end] === "(") depth += 1;
        else if (value[end] === ")") {
          depth -= 1;
          if (depth === 0) break;
        }
      }
      if (depth !== 0 || end >= value.length) {
        result += "√";
        index = start + 1;
        continue;
      }
      result += "\\sqrt{" + value.slice(cursor + 1, end) + "}";
      index = end + 1;
    }
    return result;
  }

  function toTeX(value) {
    let text = String(value == null ? "" : value).trim().replace(/[.。]$/, "");
    text = text.replace(/ε̃/g, "\\tilde{\\varepsilon}");
    text = text.replace(/μr/g, "\\mu_{r}");
    text = text.replace(/εr/g, "\\varepsilon_{r}");
    text = text.replace(/([A-Za-z])₁([tn])\b/g, "$1_{1$2}");
    text = text.replace(/([A-Za-z])₂([tn])\b/g, "$1_{2$2}");
    text = text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g, (run) => {
      return "^{" + Array.from(run).map((character) => TEX_SYMBOLS[character] || "").join("") + "}";
    });
    text = text.replace(/[₀₁₂₃₄₅₆₇₈₉₊₋ₘₖₙᵣₗ]+/g, (run) => {
      return "_{" + Array.from(run).map((character) => TEX_SYMBOLS[character] || "").join("") + "}";
    });
    text = text.replace(/[αβγδεζηθικλμνξπρστυφχψωΓΔΘΛΞΠΣΥΦΨΩ]/g, (character) => TEX_SYMBOLS[character] || character);
    text = replaceSqrtGroups(text);
    text = text.replace(/√\s*\(([^()]*)\)/g, "\\sqrt{$1}");
    text = text.replace(/√\s*([A-Za-z0-9]+)/g, "\\sqrt{$1}");
    text = text.replace(/[·×−∂∇∫∮√≈≠≤≥→↔⇒∞∠∥⊥±∝°½]/g, (character) => TEX_SYMBOLS[character] || character);
    text = text.replace(/\b(grad|div|rot)(?=[A-Z\s(\\])/g, "\\operatorname{$1} ");
    text = text.replace(/\b(sin|cos|tan|cot|ln|log)(?=[A-Z\s(\\])/g, "\\$1 ");
    text = text.replace(/\bconst\b/g, "\\text{const}");
    text = text.replace(/\bi_/g, "\\mathbf{i}_");
    text = text.replace(/\^\(([^()]*)\)/g, "^{$1}");
    text = text.replace(/\^([A-Za-z0-9]+)/g, "^{$1}");
    text = text.replace(/_([A-Za-z0-9]+)/g, "_{$1}");
    return text;
  }

  function looksLikeFormula(value) {
    const text = String(value == null ? "" : value).trim();
    if (!text || text.length > 260) return false;
    if (!/[=≠≈≤≥∂∇∫∮Σ√·×^_]|[\u0370-\u03ff]/.test(text)) return false;
    if (/[ăâđêôơưĂÂĐÊÔƠƯ]/u.test(text)) return false;
    if (/[^\x00-\x7F\u00A0-\u00BF\u00D7\u0370-\u03FF\u2000-\u206F\u2070-\u209F\u2200-\u22FF]/u.test(text)) {
      return false;
    }
    const tokens = text.split(/\s+/);
    for (const token of tokens) {
      const words = token.match(/[A-Za-z]+/g) || [];
      for (const word of words) {
        const folded = fold(word);
        if (NON_MATH_WORDS.has(folded)) return false;
        if (word.length >= 4 && !MATH_WORDS.has(folded) &&
          !["grad", "div", "rot", "sin", "cos", "tan", "cot", "ln", "log", "const", "max", "min", "det", "mod"].some((prefix) => folded.startsWith(prefix))) {
          return false;
        }
      }
    }
    return true;
  }

  function inlineMath(value) {
    if (!window.katex || typeof window.katex.renderToString !== "function") return null;
    try {
      const markup = window.katex.renderToString(toTeX(value), {
        displayMode: false,
        throwOnError: true,
        strict: false,
        trust: false,
        output: "htmlAndMathml"
      });
      return '<span class="math-inline">' + markup + '</span>';
    } catch (error) {
      return null;
    }
  }

  function mixedMath(value) {
    const text = String(value == null ? "" : value);
    const parts = text.split(/(,\s+|\s+và\s+|\bvới\s+)/);
    if (parts.length < 2) return rich(text);
    let mathCount = 0;
    const html = parts.map((part) => {
      if (!part) return "";
      if (/^(,\s+|\s+và\s+|\bvới\s+)$/.test(part)) return rich(part);
      if (looksLikeFormula(part)) {
        const markup = inlineMath(part);
        if (markup) {
          mathCount += 1;
          return markup;
        }
      }
      return rich(part);
    }).join("");
    return mathCount ? html : rich(text);
  }

  function richMath(value, allowMixed) {
    if (looksLikeFormula(value)) {
      const markup = inlineMath(value);
      if (markup) return markup;
      return rich(value);
    }
    if (allowMixed) return mixedMath(value);
    return rich(value);
  }

  function icon(name, extraClass) {
    return '<svg class="icon ' + (extraClass || "") + '" aria-hidden="true"><use href="#i-' + name + '"></use></svg>';
  }

  function percent(part, total) {
    return total ? Math.round((part / total) * 100) : 0;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function unique(values) {
    return Array.from(new Set(values));
  }

  function fold(value) {
    return String(value == null ? "" : value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .trim();
  }

  function todayKey(date) {
    const d = date || new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + month + "-" + day;
  }

  function dateFromKey(key) {
    const parts = key.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function formatDate(timestamp) {
    if (!timestamp) return "—";
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(timestamp));
  }

  function formatDateTime(timestamp) {
    if (!timestamp) return "—";
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(timestamp));
  }

  function relativeDate(timestamp) {
    if (!timestamp) return "—";
    const key = todayKey(new Date(timestamp));
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const time = new Intl.DateTimeFormat("vi-VN", { hour: "2-digit", minute: "2-digit" }).format(new Date(timestamp));
    if (key === todayKey()) return "Hôm nay · " + time;
    if (key === todayKey(yesterday)) return "Hôm qua · " + time;
    return formatDate(timestamp);
  }

  function formatDuration(totalSeconds) {
    const seconds = Math.max(0, Math.round(totalSeconds || 0));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const rest = seconds % 60;
    if (hours > 0) {
      return hours + ":" + String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
    }
    return String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
  }

  function difficultyLabel(level) {
    if (level === "hard") return "Khó";
    if (level === "medium") return "Trung bình";
    return "Cơ bản";
  }

  function chapterName(number) {
    const chapter = CHAPTER_MAP.get(number);
    return chapter ? chapter.title : "Chương " + number;
  }

  function chapterTag(number) {
    return "Chương " + number;
  }

  function chaptersLabel(chapters) {
    const list = unique((chapters || []).filter(Boolean));
    if (list.length === CHAPTERS.length) return "Tổng hợp 6 chương";
    if (list.length === 1) return chapterTag(list[0]);
    return list.map((number) => "C" + number).join(" · ");
  }

  function modeLabel(mode) {
    if (mode === "exam") return "Thi thử";
    if (mode === "wrong") return "Ôn câu sai";
    if (mode === "bookmarks") return "Ôn câu đánh dấu";
    return "Luyện tập";
  }

  /* ---------------------------------------------------------
     Local storage
     --------------------------------------------------------- */

  function makeDefaultStore() {
    return {
      version: 1,
      theme: "light",
      settings: {
        shuffleQuestions: true,
        showExplanation: true,
        dailyGoal: 20
      },
      records: {},
      bookmarks: [],
      wrong: {},
      activity: {},
      attempts: []
    };
  }

  function loadStore() {
    const base = makeDefaultStore();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return base;
      return {
        version: 1,
        theme: parsed.theme === "dark" ? "dark" : "light",
        settings: Object.assign({}, base.settings, parsed.settings || {}),
        records: parsed.records && typeof parsed.records === "object" ? parsed.records : {},
        bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
        wrong: parsed.wrong && typeof parsed.wrong === "object" ? parsed.wrong : {},
        activity: parsed.activity && typeof parsed.activity === "object" ? parsed.activity : {},
        attempts: Array.isArray(parsed.attempts) ? parsed.attempts : []
      };
    } catch (error) {
      return base;
    }
  }

  function sanitizeStore() {
    if (!store || typeof store !== "object") store = makeDefaultStore();
    if (store.theme !== "dark") store.theme = "light";
    store.settings = Object.assign(makeDefaultStore().settings, store.settings || {});
    store.settings.dailyGoal = [10, 20, 30].includes(Number(store.settings.dailyGoal)) ? Number(store.settings.dailyGoal) : 20;
    store.records = store.records && typeof store.records === "object" ? store.records : {};
    store.wrong = store.wrong && typeof store.wrong === "object" ? store.wrong : {};
    store.activity = store.activity && typeof store.activity === "object" ? store.activity : {};
    store.bookmarks = Array.isArray(store.bookmarks) ? store.bookmarks : [];
    store.attempts = Array.isArray(store.attempts) ? store.attempts : [];

    if (QUESTIONS.length > 0) {
      const known = new Set(QUESTIONS.map((question) => question.id));
      store.bookmarks = unique(store.bookmarks.filter((id) => known.has(id)));
      Object.keys(store.wrong).forEach((id) => {
        if (!known.has(id)) delete store.wrong[id];
      });
      Object.keys(store.records).forEach((id) => {
        if (!known.has(id)) delete store.records[id];
      });
    }
  }

  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      showToast("Không thể lưu dữ liệu vào trình duyệt.", "error");
    }
  }

  function recordAnswer(questionId, isCorrect, options) {
    const opts = options || {};
    const previous = store.records[questionId] || { attempts: 0, correct: 0, lastAt: 0 };
    store.records[questionId] = {
      attempts: previous.attempts + 1,
      correct: previous.correct + (isCorrect ? 1 : 0),
      lastAt: Date.now()
    };

    const key = todayKey();
    store.activity[key] = (store.activity[key] || 0) + 1;

    if (isCorrect) {
      delete store.wrong[questionId];
    } else {
      const existing = store.wrong[questionId] || { count: 0, lastAt: 0 };
      store.wrong[questionId] = { count: existing.count + 1, lastAt: Date.now() };
    }

    if (opts.save !== false) saveStore();
  }

  /* ---------------------------------------------------------
     Analytics
     --------------------------------------------------------- */

  function questionsForChapter(number) {
    return QUESTIONS.filter((question) => Number(question.chapter) === Number(number));
  }

  function chapterStats(number) {
    const questions = questionsForChapter(number);
    let attempts = 0;
    let correct = 0;
    let answered = 0;
    questions.forEach((question) => {
      const record = store.records[question.id];
      if (record && record.attempts > 0) {
        answered += 1;
        attempts += record.attempts;
        correct += record.correct;
      }
    });
    return {
      total: questions.length,
      answered,
      attempts,
      correct,
      accuracy: attempts ? Math.round((correct / attempts) * 100) : 0,
      progress: percent(answered, questions.length)
    };
  }

  function overallStats() {
    let attempts = 0;
    let correct = 0;
    let answered = 0;
    Object.keys(store.records).forEach((id) => {
      const record = store.records[id];
      if (!record || !QUESTION_MAP.has(id)) return;
      if (record.attempts > 0) {
        answered += 1;
        attempts += record.attempts;
        correct += record.correct;
      }
    });
    return {
      answered,
      attempts,
      correct,
      accuracy: attempts ? Math.round((correct / attempts) * 100) : 0,
      progress: percent(answered, QUESTIONS.length)
    };
  }

  function todayCount() {
    return Number(store.activity[todayKey()] || 0);
  }

  function getStreak() {
    const cursor = new Date();
    if (!store.activity[todayKey(cursor)]) cursor.setDate(cursor.getDate() - 1);
    let streak = 0;
    while (store.activity[todayKey(cursor)]) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
      if (streak > 3650) break;
    }
    return streak;
  }

  function getWeakestChapter() {
    if (!CHAPTERS.length) return null;
    const withStats = CHAPTERS.map((chapter) => ({ chapter, stats: chapterStats(chapter.number) }))
      .filter((entry) => entry.stats.total > 0);
    if (!withStats.length) return null;
    const incomplete = withStats.filter((entry) => entry.stats.answered < entry.stats.total);
    if (incomplete.length) {
      incomplete.sort((a, b) => {
        if (a.stats.progress !== b.stats.progress) return a.stats.progress - b.stats.progress;
        return a.stats.accuracy - b.stats.accuracy;
      });
      return incomplete[0];
    }
    withStats.sort((a, b) => a.stats.accuracy - b.stats.accuracy);
    return withStats[0];
  }

  function questionsForIds(ids) {
    return unique(ids || []).map((id) => QUESTION_MAP.get(id)).filter(Boolean);
  }

  /* ---------------------------------------------------------
     Navigation & rendering
     --------------------------------------------------------- */

  function applyTheme(theme) {
    document.body.dataset.theme = theme === "dark" ? "dark" : "light";
    const button = $("#theme-toggle");
    if (button) {
      button.setAttribute("aria-label", theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối");
      button.setAttribute("title", theme === "dark" ? "Giao diện sáng" : "Giao diện tối");
    }
  }

  function updateSidebar() {
    const stats = overallStats();
    const wrongCount = Object.keys(store.wrong).length;
    const bookmarkCount = store.bookmarks.length;
    const wrongBadge = $("#wrong-count");
    const bookmarkBadge = $("#bookmark-count");
    if (wrongBadge) {
      wrongBadge.textContent = String(wrongCount);
      wrongBadge.hidden = wrongCount === 0;
    }
    if (bookmarkBadge) {
      bookmarkBadge.textContent = String(bookmarkCount);
      bookmarkBadge.hidden = bookmarkCount === 0;
    }
    const bar = $("#sidebar-progress-bar");
    const value = $("#sidebar-progress-value");
    const caption = $("#sidebar-progress-caption");
    if (bar) bar.style.width = stats.progress + "%";
    if (value) value.textContent = stats.progress + "%";
    if (caption) caption.textContent = QUESTIONS.length + " câu · " + CHAPTERS.length + " chương";
  }

  function updateTopbarLabel() {
    const label = $("#current-view-label");
    if (label) label.textContent = ROUTE_LABELS[state.view] || "Tổng quan";
    document.title = (ROUTE_LABELS[state.view] || "Tổng quan") + " · Trường điện từ";
  }

  function activeNavRoute() {
    if (state.view === "practiceQuiz" || state.view === "practice") return "practice";
    if (state.view === "examQuiz" || state.view === "exam") return "exam";
    if (state.view === "result") {
      if (state.resultOrigin === "exam") return "exam";
      if (state.resultOrigin === "history") return "history";
      if (state.resultOrigin === "wrong") return "wrong";
      if (state.resultOrigin === "bookmarks") return "bookmarks";
      return "practice";
    }
    return state.view;
  }

  function setActiveNav() {
    const active = activeNavRoute();
    $$(".sidebar .nav-item").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.route === active);
    });
  }

  function render() {
    if (!viewEl) return;
    switch (state.view) {
      case "practice":
        renderPracticeSetup();
        break;
      case "practiceQuiz":
        renderPracticeQuiz();
        break;
      case "exam":
        renderExamSetup();
        break;
      case "examQuiz":
        renderExamQuiz();
        break;
      case "result":
        renderResult();
        break;
      case "wrong":
        renderWrong();
        break;
      case "bookmarks":
        renderBookmarks();
        break;
      case "notebook":
        renderNotebook();
        break;
      case "history":
        renderHistory();
        break;
      case "settings":
        renderSettings();
        break;
      default:
        renderDashboard();
        break;
    }
    updateSidebar();
    setActiveNav();
    updateTopbarLabel();
    if (state.view === "examQuiz" && state.exam) {
      updateExamTimerDOM();
      startExamTicker();
    }
  }

  function performNavigate(route, options) {
    const opts = options || {};
    if (route === "result" && !state.result) route = "dashboard";
    state.view = route;
    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: opts.instant ? "auto" : "smooth" });
    render();
    if (viewEl) {
      viewEl.focus({ preventScroll: true });
    }
  }

  function requestNavigate(route, options) {
    const opts = options || {};
    if (state.practice) {
      showConfirm({
        title: "Rời phiên luyện?",
        message: "Các câu đã trả lời vẫn được ghi vào tiến độ, nhưng phiên hiện tại sẽ không được lưu vào lịch sử.",
        confirmLabel: "Rời phiên",
        onConfirm: () => {
          state.practice = null;
          performNavigate(route, opts);
        }
      });
      return;
    }
    if (state.exam) {
      showConfirm({
        title: "Rời bài thi?",
        message: "Bài thi đang diễn ra sẽ không được nộp và không được lưu vào lịch sử. Bạn chắc chắn muốn rời?",
        confirmLabel: "Rời bài thi",
        danger: true,
        onConfirm: () => {
          clearExamTimer();
          state.exam = null;
          performNavigate(route, opts);
        }
      });
      return;
    }
    performNavigate(route, opts);
  }

  function clearExamTimer() {
    if (state.exam && state.exam.timerId) {
      clearInterval(state.exam.timerId);
      state.exam.timerId = null;
    }
  }

  /* ---------------------------------------------------------
     Dashboard
     --------------------------------------------------------- */

  function heroArt() {
    return '<svg viewBox="0 0 390 280" role="img" aria-label="Minh họa sóng điện từ lan truyền từ một anten">' +
      '<defs>' +
        '<linearGradient id="heroWave" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#5fd6c7" stop-opacity=".25"/><stop offset=".55" stop-color="#8be1d6"/><stop offset="1" stop-color="#7db3ff" stop-opacity=".3"/></linearGradient>' +
        '<linearGradient id="heroArc" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#8be1d6" stop-opacity=".3"/><stop offset="1" stop-color="#8be1d6" stop-opacity="0"/></linearGradient>' +
      '</defs>' +
      '<g fill="none">' +
        '<circle cx="216" cy="143" r="108" stroke="rgba(255,255,255,.09)" stroke-dasharray="2 8"/>' +
        '<circle cx="216" cy="143" r="74" stroke="rgba(255,255,255,.07)"/>' +
        '<path d="M184 235c31-21 51-52 51-92s-20-71-51-92" stroke="url(#heroArc)" stroke-width="1.5"/>' +
        '<path d="M252 235c31-21 51-52 51-92s-20-71-51-92" stroke="url(#heroArc)" stroke-width="1.5"/>' +
        '<path d="M47 176c30-60 65-60 95 0s65 60 95 0 65-60 95 0" stroke="url(#heroWave)" stroke-width="2.6" stroke-linecap="round" class="wave-line"/>' +
        '<path d="M47 190c30-60 65-60 95 0s65 60 95 0 65-60 95 0" stroke="rgba(125,179,255,.18)" stroke-width="1.4" stroke-linecap="round"/>' +
      '</g>' +
      '<g stroke="#8be1d6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="216" y1="55" x2="216" y2="231"/>' +
        '<line x1="205" y1="231" x2="227" y2="231"/>' +
        '<g fill="#8be1d6" stroke="none">' +
          '<circle cx="216" cy="55" r="3.5"/><circle cx="216" cy="104" r="2.3" opacity=".7"/><circle cx="216" cy="143" r="2.3" opacity=".5"/>' +
        '</g>' +
        '<path d="M244 110l22-13" opacity=".8"/><path d="M266 97l-7 1.5 4.5 5.5" fill="none"/>' +
        '<path d="M308 154l24-10" stroke="#7db3ff" opacity=".8"/><path d="M332 144l-7 .7 3.7 5.7" fill="none"/>' +
      '</g>' +
      '<g fill="#bfe8e4">' +
        '<circle cx="288" cy="86" r="2.5"/><circle cx="326" cy="198" r="2"/><circle cx="104" cy="93" r="2" opacity=".6"/>' +
      '</g>' +
    '</svg>';
  }

  function renderDashboard() {
    const stats = overallStats();
    const streak = getStreak();
    const doneToday = todayCount();
    const goal = Number(store.settings.dailyGoal) || 20;
    const goalProgress = Math.min(100, percent(doneToday, goal));
    const weakest = getWeakestChapter();
    const totalQuestions = QUESTIONS.length || 0;

    const statCards = [
      { icon: "layers", tone: "accent", value: stats.answered + "/" + totalQuestions, label: "Câu đã làm · ngân hàng" },
      { icon: "target", tone: "success", value: stats.attempts ? stats.accuracy + "%" : "—", label: "Độ chính xác tích lũy" },
      { icon: "flame", tone: "warning", value: streak + " ngày", label: streak ? "Chuỗi ngày học liên tiếp" : "Bắt đầu chuỗi hôm nay" },
      { icon: "spark", tone: "danger", value: doneToday + "/" + goal, label: "Mục tiêu câu hỏi hôm nay" }
    ].map((item) => '<div class="stat-card">' +
      '<span class="stat-icon ' + item.tone + '">' + icon(item.icon) + '</span>' +
      '<span class="stat-content"><span class="stat-value">' + esc(item.value) + '</span><span class="stat-label">' + esc(item.label) + '</span></span>' +
    '</div>').join("");

    const chapterCards = CHAPTERS.map((chapter) => {
      const chapterStat = chapterStats(chapter.number);
      return '<article class="chapter-card" style="--chapter-color:' + esc(chapter.color) + '">' +
        '<div class="chapter-card-top">' +
          '<span class="chapter-number">' + String(chapter.number).padStart(2, "0") + '</span>' +
          '<span class="badge">' + chapterStat.total + " câu</span>" +
        '</div>' +
        '<h3>' + esc(chapter.title) + '</h3>' +
        '<p class="chapter-sub">' + esc(chapter.subtitle) + '</p>' +
        '<p class="chapter-desc">' + esc(chapter.description) + '</p>' +
        '<div class="chapter-progress">' +
          '<div class="chapter-progress-top"><span>Đã làm ' + chapterStat.answered + "/" + chapterStat.total + '</span><strong>' + chapterStat.progress + '%</strong></div>' +
          '<div class="progress-track"><span style="width:' + chapterStat.progress + '%"></span></div>' +
        '</div>' +
        '<div class="chapter-footer">' +
          '<button class="text-button" type="button" data-action="open-chapter" data-chapter="' + chapter.number + '">Luyện chương này ' + icon("arrow-right") + '</button>' +
          '<span class="mini-badge">' + (chapterStat.attempts ? "Ôn " + chapterStat.accuracy + "%" : "Chưa bắt đầu") + '</span>' +
        '</div>' +
      '</article>';
    }).join("");

    const progressRows = CHAPTERS.map((chapter) => {
      const chapterStat = chapterStats(chapter.number);
      return '<div class="progress-chapter-row" style="--row-color:' + esc(chapter.color) + '">' +
        '<span class="num">' + chapter.number + '</span>' +
        '<span><span class="name">' + esc(chapter.title) + '</span><span class="progress-track"><span style="width:' + chapterStat.progress + '%"></span></span></span>' +
        '<span class="pct">' + chapterStat.progress + '%</span>' +
      '</div>';
    }).join("");

    const focusChapter = weakest ? weakest.chapter : null;
    const focusStats = weakest ? weakest.stats : null;
    const focusTags = focusChapter ? focusChapter.topics.slice(0, 4).map((topic) => '<span class="focus-tag">' + esc(topic) + '</span>').join("") : "";

    viewEl.innerHTML =
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<span class="hero-kicker">' + icon("spark") + 'Bám sát slide bài giảng · Chương 1–6</span>' +
          '<h1>Ôn lý thuyết,<br><em>hiểu bản chất.</em></h1>' +
          '<p>Hệ thống câu hỏi trắc nghiệm theo từng chương, có giải thích ngay sau mỗi câu. Học ngắn, nhớ lâu, biết mình còn thiếu gì.</p>' +
          '<div class="hero-actions">' +
            '<button class="button button-primary button-lg" type="button" data-action="hero-start">' + icon("play") + 'Luyện ngay</button>' +
            '<button class="button button-secondary button-lg" type="button" data-route="exam">' + icon("clock") + 'Thi thử có giờ</button>' +
          '</div>' +
          '<div class="hero-meta">' +
            '<span>' + icon("layers") + CHAPTERS.length + ' chương</span>' +
            '<span>' + icon("target") + totalQuestions + ' câu hỏi</span>' +
            '<span>' + icon("book") + FORMULAS.length + ' nhóm công thức</span>' +
          '</div>' +
        '</div>' +
        '<div class="hero-art">' + heroArt() +
          '<div class="hero-goal">' +
            '<div class="hero-goal-top"><span>Mục tiêu hôm nay</span><strong>' + doneToday + '/' + goal + '</strong></div>' +
            '<div class="progress-track"><span style="width:' + goalProgress + '%"></span></div>' +
            '<p>' + (doneToday >= goal ? "Đã hoàn thành mục tiêu. Làm thêm cho chắc!" : "Còn " + (goal - doneToday) + " câu để chạm mục tiêu.") + '</p>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="stat-grid" aria-label="Thống kê học tập">' + statCards + '</section>' +
      '<div class="section-head"><div class="section-sub"><h2>Lộ trình 6 chương</h2><p>Đi theo từng chương hoặc nhảy đến phần còn yếu.</p></div>' +
        '<button class="text-button" type="button" data-route="practice">Xem cấu hình luyện tập ' + icon("arrow-right") + '</button></div>' +
      '<section class="chapter-grid">' + chapterCards + '</section>' +
      '<div class="section-head"><div class="section-sub"><h2>Ôn tập thông minh</h2><p>Ưu tiên những câu bạn từng làm sai và các công thức hay quên.</p></div></div>' +
      '<section class="smart-grid">' +
        '<article class="smart-card"><span class="smart-icon">' + icon("refresh") + '</span><h3>Câu đã làm sai</h3><p>' + Object.keys(store.wrong).length + ' câu đang chờ ôn lại. Làm đúng sẽ tự động xóa khỏi danh sách.</p><button class="text-button" type="button" data-route="wrong">Mở danh sách ' + icon("arrow-right") + '</button></article>' +
        '<article class="smart-card"><span class="smart-icon">' + icon("bookmark") + '</span><h3>Câu đánh dấu</h3><p>' + store.bookmarks.length + ' câu bạn muốn xem lại. Thêm dấu ngay trong lúc luyện hoặc thi.</p><button class="text-button" type="button" data-route="bookmarks">Xem câu đánh dấu ' + icon("arrow-right") + '</button></article>' +
        '<article class="smart-card"><span class="smart-icon">' + icon("book") + '</span><h3>Sổ công thức</h3><p>Tra nhanh công thức trọng tâm của cả 6 chương, có ghi chú điều kiện áp dụng.</p><button class="text-button" type="button" data-route="notebook">Mở sổ công thức ' + icon("arrow-right") + '</button></article>' +
      '</section>' +
      '<section class="dashboard-bottom">' +
        '<div class="focus-panel">' +
          '<div><span class="eyebrow">' + icon("target") + 'Gợi ý hôm nay</span>' +
          (focusChapter
            ? '<h3>Ôn lại ' + esc(focusChapter.title) + '</h3><p>' + esc(focusChapter.description) + ' Hiện bạn đã làm ' + focusStats.answered + '/' + focusStats.total + ' câu của chương này.</p>'
            : '<h3>Bắt đầu với chương đầu tiên</h3><p>Ngân hàng câu hỏi đang được chuẩn bị. Hãy quay lại sau hoặc mở sổ công thức để xem trước.</p>') +
          '</div><div class="focus-tags">' + focusTags + '</div>' +
          (focusChapter ? '<div><button class="button button-primary" type="button" data-action="open-chapter" data-chapter="' + focusChapter.number + '">' + icon("play") + 'Ôn chương này</button></div>' : '') +
        '</div>' +
        '<div class="mini-leaderboard"><h3>Tiến độ từng chương</h3><p>Tỷ lệ câu đã làm trên ngân hàng của chương.</p><div class="progress-chapter-list">' + progressRows + '</div></div>' +
      '</section>';
  }

  /* ---------------------------------------------------------
     Practice setup
     --------------------------------------------------------- */

  function shuffle(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      const temp = copy[index];
      copy[index] = copy[swap];
      copy[swap] = temp;
    }
    return copy;
  }

  function renderPracticeSetup() {
    if (!["all"].includes(state.practiceSetup.chapter)) {
      const number = Number(state.practiceSetup.chapter);
      state.practiceSetup.chapter = CHAPTER_MAP.has(number) ? number : 1;
    }
    const selected = state.practiceSetup.chapter;
    const pool = selected === "all" ? QUESTIONS : questionsForChapter(selected);
    const actualCount = Math.min(Number(state.practiceSetup.count) || 10, pool.length);
    const chapter = selected === "all" ? null : CHAPTER_MAP.get(selected);
    const allCard = '<button class="select-card' + (selected === "all" ? " is-selected" : "") + '" type="button" data-action="pick-practice-chapter" data-chapter="all" style="--chapter-color:var(--accent)" aria-pressed="' + (selected === "all") + '">' +
      '<span class="select-num">∑</span>' +
      '<span class="select-body"><strong>Tất cả chương</strong><small>Trộn câu hỏi từ Chương 1–6 · ' + QUESTIONS.length + ' câu</small></span>' +
      '<span class="check-indicator">' + icon("check") + '</span>' +
    '</button>';

    const chapterCards = CHAPTERS.map((item) => '<button class="select-card' + (Number(selected) === item.number ? " is-selected" : "") + '" type="button" data-action="pick-practice-chapter" data-chapter="' + item.number + '" style="--chapter-color:' + esc(item.color) + '" aria-pressed="' + (Number(selected) === item.number) + '">' +
      '<span class="select-num">' + item.number + '</span>' +
      '<span class="select-body"><strong>' + esc(item.title) + '</strong><small>' + chapterStats(item.number).total + ' câu · ' + esc(item.subtitle) + '</small></span>' +
      '<span class="check-indicator">' + icon("check") + '</span>' +
    '</button>').join("");

    const countButtons = [10, 20, 30].map((count) => '<button class="seg-btn' + (Number(state.practiceSetup.count) === count ? " is-selected" : "") + '" type="button" data-action="pick-practice-count" data-count="' + count + '" aria-pressed="' + (Number(state.practiceSetup.count) === count) + '">' + count + ' câu</button>').join("");

    viewEl.innerHTML =
      '<div class="page-head">' +
        '<div><span class="eyebrow">' + icon("target") + 'Luyện tập chủ động</span><h1 class="page-title">Luyện theo chương</h1><p class="page-lead">Chọn một chương hoặc trộn cả 6 chương. Trả lời từng câu, xem giải thích ngay và để hệ thống ghi nhận những câu cần ôn lại.</p></div>' +
        '<div class="page-head-actions"><button class="button button-secondary" type="button" data-route="notebook">' + icon("book") + 'Sổ công thức</button><button class="button button-primary" type="button" data-route="exam">' + icon("clock") + 'Thi thử</button></div>' +
      '</div>' +
      '<div class="setup-layout">' +
        '<div class="setup-main">' +
          '<section class="panel">' +
            '<div class="panel-head"><div><h2>1. Chọn phạm vi</h2><p>Mỗi chương gồm 30 câu hỏi bám sát slide bài giảng.</p></div></div>' +
            '<div class="panel-body"><div class="chapter-select-grid">' + allCard + chapterCards + '</div></div>' +
          '</section>' +
          '<section class="panel">' +
            '<div class="panel-head"><div><h2>2. Cấu hình phiên luyện</h2><p>Ngắn hay dài tùy thời gian bạn có.</p></div></div>' +
            '<div class="panel-body">' +
              '<div class="field"><div class="field-label"><span>Số câu hỏi</span><span class="field-hint">Có ' + pool.length + ' câu trong phạm vi đã chọn</span></div><div class="segmented">' + countButtons + '</div></div>' +
              '<div class="field" style="margin-top:22px"><div class="toggle-row"><div class="toggle-copy"><strong>Trộn thứ tự câu hỏi</strong><span>Mỗi lần luyện sẽ có thứ tự khác nhau.</span></div><button class="switch" type="button" data-action="toggle-setting" data-key="shuffleQuestions" aria-pressed="' + Boolean(store.settings.shuffleQuestions) + '" aria-label="Trộn thứ tự câu hỏi"></button></div>' +
              '<div class="toggle-row"><div class="toggle-copy"><strong>Hiện giải thích ngay</strong><span>Mở phần giải thích ngay sau khi chọn đáp án.</span></div><button class="switch" type="button" data-action="toggle-setting" data-key="showExplanation" aria-pressed="' + Boolean(store.settings.showExplanation) + '" aria-label="Hiện giải thích ngay"></button></div></div>' +
            '</div>' +
          '</section>' +
          '<div class="notice">' + icon("shield") + '<span>Không cần đăng nhập. Tiến độ, câu sai và câu đánh dấu được lưu cục bộ trong trình duyệt này.</span></div>' +
        '</div>' +
        '<aside class="setup-summary" aria-label="Tóm tắt phiên luyện">' +
          '<h2>Phiên luyện của bạn</h2><p>Kiểm tra nhanh trước khi bắt đầu.</p>' +
          '<div class="summary-line"><span>Phạm vi</span><span>' + (chapter ? esc(chapter.title) : "Tất cả chương") + '</span></div>' +
          '<div class="summary-line"><span>Ngân hàng</span><span>' + pool.length + ' câu</span></div>' +
          '<div class="summary-line"><span>Hình thức</span><span>Có giải thích</span></div>' +
          '<div class="summary-line"><span>Trộn câu</span><span>' + (store.settings.shuffleQuestions ? "Có" : "Không") + '</span></div>' +
          '<div class="summary-total"><span>Sẽ làm</span><strong>' + actualCount + ' câu</strong></div>' +
          '<button class="button button-primary button-lg button-block" type="button" data-action="start-practice"' + (pool.length ? "" : " disabled") + '>' + icon("play") + 'Bắt đầu luyện</button>' +
          (pool.length ? '' : '<p class="field-hint" style="margin:10px 0 0;text-align:center">Chưa có câu hỏi cho phạm vi này.</p>') +
        '</aside>' +
      '</div>';
  }

  /* ---------------------------------------------------------
     Practice quiz
     --------------------------------------------------------- */

  function startPracticeSession(ids, title, mode, returnTo) {
    const pool = questionsForIds(ids);
    if (!pool.length) {
      showToast("Không có câu hỏi nào để bắt đầu.", "error");
      return;
    }
    const ordered = store.settings.shuffleQuestions ? shuffle(pool) : pool;
    state.practice = {
      questions: ordered,
      index: 0,
      answers: {},
      revealed: {},
      startedAt: Date.now(),
      mode: mode || "practice",
      title: title || "Phiên luyện tập",
      chapters: unique(ordered.map((question) => Number(question.chapter))),
      returnTo: returnTo || "practice"
    };
    state.view = "practiceQuiz";
    window.scrollTo({ top: 0, behavior: "auto" });
    render();
    if (viewEl) viewEl.focus({ preventScroll: true });
  }

  function practiceOptionHtml(question, selected, answered, index) {
    let classes = "option";
    let mark = "";
    if (answered) {
      if (index === Number(question.answer)) {
        classes += " is-correct";
        mark = '<span class="option-mark">' + icon("check") + '</span>';
      } else if (index === Number(selected)) {
        classes += " is-wrong";
        mark = '<span class="option-mark">' + icon("close") + '</span>';
      } else {
        classes += " is-dimmed";
      }
    }
    return '<button class="' + classes + '" type="button" data-action="answer-practice" data-index="' + index + '"' + (answered ? " disabled" : "") + ' aria-pressed="' + (index === Number(selected)) + '">' +
      '<span class="option-letter">' + OPTION_LETTERS[index] + '</span>' +
      '<span class="option-text">' + richMath(question.options[index], true) + '</span>' + mark +
    '</button>';
  }

  function renderPracticeQuiz() {
    const practice = state.practice;
    if (!practice) {
      performNavigate("practice", { instant: true });
      return;
    }
    const question = practice.questions[practice.index];
    if (!question) {
      finishPractice();
      return;
    }
    const selected = practice.answers[question.id];
    const answered = selected !== undefined;
    const isCorrect = answered && Number(selected) === Number(question.answer);
    const bookmarked = store.bookmarks.includes(question.id);
    const progress = percent(practice.index + (answered ? 1 : 0), practice.questions.length);
    const isLast = practice.index === practice.questions.length - 1;
    const explanationVisible = Boolean(practice.revealed[question.id]);
    const optionHtml = question.options.map((option, index) => practiceOptionHtml(question, selected, answered, index)).join("");

    let feedback = "";
    if (answered) {
      if (explanationVisible) {
        feedback = '<div class="feedback ' + (isCorrect ? "feedback-correct" : "feedback-wrong") + '" role="status">' +
          '<div class="feedback-title">' + icon(isCorrect ? "check" : "alert") + (isCorrect ? "Chính xác" : "Chưa đúng") + '</div>' +
          '<p class="feedback-body">' + richMath(question.explain) + '</p>' +
          '<span class="feedback-source">Nguồn: ' + esc(question.source || ("Chương " + question.chapter)) + '</span>' +
        '</div>';
      } else {
        feedback = '<div class="feedback ' + (isCorrect ? "feedback-correct" : "feedback-wrong") + '">' +
          '<div class="feedback-title">' + icon(isCorrect ? "check" : "alert") + (isCorrect ? "Chính xác" : "Chưa đúng") + '</div>' +
          '<p class="feedback-body">Đáp án đã được ghi nhận. <button class="text-button" type="button" data-action="reveal-explanation">Xem giải thích ' + icon("arrow-right") + '</button></p>' +
        '</div>';
      }
    }

    viewEl.innerHTML =
      '<div class="quiz-shell">' +
        '<div class="quiz-top"><div class="quiz-top-left">' +
          '<button class="button button-ghost button-sm" type="button" data-action="exit-practice">' + icon("arrow-left") + 'Thoát</button>' +
          '<span class="badge badge-accent">' + (practice.chapters.length === 1 ? "Chương " + practice.chapters[0] : "Tổng hợp") + '</span>' +
          '<span class="quiz-counter">Câu ' + (practice.index + 1) + ' / ' + practice.questions.length + '</span>' +
        '</div><button class="bookmark-button' + (bookmarked ? " is-active" : "") + '" type="button" data-action="toggle-bookmark" data-id="' + esc(question.id) + '" aria-pressed="' + bookmarked + '">' + icon("bookmark") + (bookmarked ? "Đã đánh dấu" : "Đánh dấu") + '</button></div>' +
        '<div class="quiz-progress" aria-hidden="true"><span style="width:' + progress + '%"></span></div>' +
        '<section class="quiz-card">' +
          '<div class="question-head"><span class="question-index">Câu ' + String(practice.index + 1).padStart(2, "0") + '</span>' +
            '<span class="badge">' + esc(question.topic || "Trường điện từ") + '</span>' +
            '<span class="difficulty difficulty-' + esc(question.difficulty || "medium") + '">' + difficultyLabel(question.difficulty) + '</span>' +
          '</div>' +
          '<h1 class="question-text">' + richMath(question.question) + '</h1>' +
          '<div class="options" role="group" aria-label="Các phương án trả lời">' + optionHtml + '</div>' +
          feedback +
          '<div class="quiz-footer">' +
            '<span class="quiz-footer-note keyboard-hint"><span class="kbd">1</span>–<span class="kbd">4</span> chọn · <span class="kbd">Enter</span> tiếp tục</span>' +
            '<button class="button button-primary" type="button" data-action="next-practice"' + (answered ? "" : " disabled") + '>' + (isLast ? "Xem kết quả" : "Câu tiếp theo") + ' ' + icon("arrow-right") + '</button>' +
          '</div>' +
        '</section>' +
      '</div>';
  }

  function finishPractice() {
    const practice = state.practice;
    if (!practice) return;
    const answers = practice.questions.map((question) => {
      const selected = practice.answers[question.id];
      return {
        qid: question.id,
        selected: selected === undefined ? null : Number(selected),
        correct: selected !== undefined && Number(selected) === Number(question.answer)
      };
    });
    const correct = answers.filter((answer) => answer.correct).length;
    const finishedAt = Date.now();
    const attempt = {
      id: "attempt-" + finishedAt,
      mode: practice.mode || "practice",
      title: practice.title,
      chapters: practice.chapters,
      total: practice.questions.length,
      correct,
      score: percent(correct, practice.questions.length),
      startedAt: practice.startedAt,
      finishedAt,
      durationSec: Math.max(1, Math.round((finishedAt - practice.startedAt) / 1000)),
      answers
    };
    store.attempts.unshift(attempt);
    store.attempts = store.attempts.slice(0, 50);
    saveStore();
    state.result = attempt;
    state.resultOrigin = practice.mode === "wrong" ? "wrong" : practice.mode === "bookmarks" ? "bookmarks" : "practice";
    state.practice = null;
    state.view = "result";
    window.scrollTo({ top: 0, behavior: "auto" });
    render();
  }

  /* ---------------------------------------------------------
     Exam setup
     --------------------------------------------------------- */

  function selectedExamChapters() {
    return state.examSetup.chapters.filter((number) => CHAPTER_MAP.has(Number(number))).map(Number);
  }

  function examPool() {
    const selected = selectedExamChapters();
    return QUESTIONS.filter((question) => selected.includes(Number(question.chapter)));
  }

  function renderExamSetup() {
    const selected = selectedExamChapters();
    const pool = examPool();
    const actualCount = Math.min(Number(state.examSetup.count) || 20, pool.length);
    const chapterCards = CHAPTERS.map((chapter) => {
      const active = selected.includes(chapter.number);
      return '<button class="chapter-check' + (active ? " is-selected" : "") + '" type="button" data-action="pick-exam-chapter" data-chapter="' + chapter.number + '" style="--chapter-color:' + esc(chapter.color) + '" aria-pressed="' + active + '">' +
        '<span class="check-indicator">' + icon("check") + '</span>' +
        '<span><strong>' + esc(chapter.title) + '</strong><small>' + chapterStats(chapter.number).total + ' câu</small></span>' +
      '</button>';
    }).join("");
    const countButtons = [10, 20, 30, 40].map((count) => '<button class="seg-btn' + (Number(state.examSetup.count) === count ? " is-selected" : "") + '" type="button" data-action="pick-exam-count" data-count="' + count + '" aria-pressed="' + (Number(state.examSetup.count) === count) + '">' + count + '</button>').join("");
    const durationButtons = [10, 20, 30, 45].map((minutes) => '<button class="seg-btn' + (Number(state.examSetup.duration) === minutes ? " is-selected" : "") + '" type="button" data-action="pick-exam-duration" data-duration="' + minutes + '" aria-pressed="' + (Number(state.examSetup.duration) === minutes) + '">' + minutes + ' phút</button>').join("");

    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("clock") + 'Kiểm tra như thi thật</span><h1 class="page-title">Thi thử có giờ</h1><p class="page-lead">Trộn câu hỏi trong phạm vi bạn chọn, làm bài liên tục và nộp trước khi hết giờ. Kết quả được chấm ngay, kèm phần xem lại từng câu.</p></div><div class="page-head-actions"><button class="button button-secondary" type="button" data-route="practice">' + icon("target") + 'Luyện theo chương</button></div></div>' +
      '<div class="setup-layout">' +
        '<div class="setup-main">' +
          '<section class="panel"><div class="panel-head"><div><h2>1. Phạm vi ra đề</h2><p>Chọn một hoặc nhiều chương. Câu hỏi sẽ được trộn ngẫu nhiên.</p></div><span class="badge badge-accent">' + pool.length + ' câu khả dụng</span></div>' +
            '<div class="panel-body"><div class="chapter-check-grid">' + chapterCards + '</div>' +
              '<div class="field" style="margin-top:18px"><div class="field-label"><span>Chọn nhanh đề mẫu</span><span class="field-hint">Có thể chỉnh lại bên dưới</span></div><div class="segmented">' +
                '<button class="seg-btn" type="button" data-action="exam-preset" data-count="10" data-duration="10">Kiểm tra nhanh · 10 câu</button>' +
                '<button class="seg-btn" type="button" data-action="exam-preset" data-count="20" data-duration="20">Giữa kỳ · 20 câu</button>' +
                '<button class="seg-btn" type="button" data-action="exam-preset" data-count="30" data-duration="30">Tổng ôn · 30 câu</button>' +
              '</div></div>' +
            '</div>' +
          '</section>' +
          '<section class="panel"><div class="panel-head"><div><h2>2. Thời lượng & số câu</h2><p>Đồng hồ bắt đầu chạy ngay khi bạn vào phòng thi.</p></div></div>' +
            '<div class="panel-body">' +
              '<div class="field"><div class="field-label"><span>Số câu hỏi</span><span class="field-hint">Tối đa theo phạm vi: ' + pool.length + ' câu</span></div><div class="segmented">' + countButtons + '</div></div>' +
              '<div class="field" style="margin-top:18px"><div class="field-label"><span>Thời gian làm bài</span><span class="field-hint">Có thể nộp sớm</span></div><div class="segmented">' + durationButtons + '</div></div>' +
              '<div class="field" style="margin-top:18px"><div class="notice notice-warning">' + icon("alert") + '<span>Trong lúc thi, đáp án đúng chưa được hiển thị. Bạn có thể đánh dấu câu để xem lại trước khi nộp.</span></div></div>' +
            '</div>' +
          '</section>' +
        '</div>' +
        '<aside class="setup-summary" aria-label="Tóm tắt bài thi">' +
          '<h2>Bài thi của bạn</h2><p>Điểm đạt được tính từ 70%.</p>' +
          '<div class="summary-line"><span>Phạm vi</span><span>' + (selected.length === 6 ? "Tất cả 6 chương" : selected.length ? selected.map((number) => "C" + number).join(" · ") : "Chưa chọn chương") + '</span></div>' +
          '<div class="summary-line"><span>Ngân hàng</span><span>' + pool.length + ' câu</span></div>' +
          '<div class="summary-line"><span>Thời gian</span><span>' + Number(state.examSetup.duration) + ' phút</span></div>' +
          '<div class="summary-line"><span>Điểm đạt</span><span>' + PASS_SCORE + '%</span></div>' +
          '<div class="summary-total"><span>Sẽ làm</span><strong>' + actualCount + ' câu</strong></div>' +
          '<button class="button button-primary button-lg button-block" type="button" data-action="start-exam"' + (pool.length ? "" : " disabled") + '>' + icon("play") + 'Vào phòng thi</button>' +
          (pool.length ? '' : '<p class="field-hint" style="margin:10px 0 0;text-align:center">Hãy chọn ít nhất một chương.</p>') +
        '</aside>' +
      '</div>';
  }

  /* ---------------------------------------------------------
     Exam quiz
     --------------------------------------------------------- */

  function examRemainingSeconds() {
    if (!state.exam) return 0;
    return Math.max(0, Math.ceil((state.exam.deadline - Date.now()) / 1000));
  }

  function updateExamTimerDOM() {
    const timer = $("#exam-timer");
    const value = $("#exam-time-value");
    if (!timer || !value || !state.exam) return;
    const remaining = examRemainingSeconds();
    value.textContent = formatDuration(remaining);
    timer.classList.toggle("is-urgent", remaining <= 60);
  }

  function startExamTicker() {
    if (!state.exam) return;
    if (state.exam.timerId) return;
    state.exam.timerId = setInterval(() => {
      if (!state.exam) {
        clearExamTimer();
        return;
      }
      if (examRemainingSeconds() <= 0) {
        clearExamTimer();
        submitExam(true);
        return;
      }
      updateExamTimerDOM();
    }, 500);
  }

  function examOptionHtml(question, selected, index) {
    const isSelected = Number(selected) === index;
    return '<button class="option' + (isSelected ? " is-selected" : "") + '" type="button" data-action="answer-exam" data-index="' + index + '" aria-pressed="' + isSelected + '">' +
      '<span class="option-letter">' + OPTION_LETTERS[index] + '</span>' +
      '<span class="option-text">' + richMath(question.options[index], true) + '</span>' +
      (isSelected ? '<span class="option-mark">' + icon("check") + '</span>' : "") +
    '</button>';
  }

  function renderExamQuiz() {
    const exam = state.exam;
    if (!exam) {
      performNavigate("exam", { instant: true });
      return;
    }
    const question = exam.questions[exam.index];
    if (!question) {
      submitExam(false);
      return;
    }
    const selected = exam.answers[question.id];
    const answeredCount = Object.keys(exam.answers).length;
    const flagged = exam.flagged.has(question.id);
    const progress = percent(answeredCount, exam.questions.length);
    const optionHtml = question.options.map((option, index) => examOptionHtml(question, selected, index)).join("");
    const navHtml = exam.questions.map((item, index) => {
      const classes = ["nav-q"];
      if (Number(exam.answers[item.id]) >= 0 && exam.answers[item.id] !== undefined) classes.push("is-answered");
      if (index === exam.index) classes.push("is-current");
      if (exam.flagged.has(item.id)) classes.push("is-flagged");
      return '<button class="' + classes.join(" ") + '" type="button" data-action="exam-goto" data-index="' + index + '" aria-label="Câu ' + (index + 1) + '" aria-current="' + (index === exam.index) + '">' + (index + 1) + '</button>';
    }).join("");

    viewEl.innerHTML =
      '<div class="exam-layout">' +
        '<div class="exam-main">' +
          '<div class="quiz-top"><div class="quiz-top-left"><button class="button button-ghost button-sm" type="button" data-action="exam-exit">' + icon("arrow-left") + 'Thoát</button><span class="badge badge-accent">Thi thử</span><span class="quiz-counter">Câu ' + (exam.index + 1) + ' / ' + exam.questions.length + '</span></div><span class="badge">Đang làm bài</span></div>' +
          '<div class="quiz-progress" aria-hidden="true"><span style="width:' + progress + '%"></span></div>' +
          '<section class="quiz-card">' +
            '<div class="question-head"><span class="question-index">Câu ' + String(exam.index + 1).padStart(2, "0") + '</span><span class="badge">' + esc(question.topic || "Trường điện từ") + '</span><span class="difficulty difficulty-' + esc(question.difficulty || "medium") + '">' + difficultyLabel(question.difficulty) + '</span></div>' +
            '<h1 class="question-text">' + richMath(question.question) + '</h1>' +
            '<div class="options" role="group" aria-label="Các phương án trả lời">' + optionHtml + '</div>' +
            '<div class="mark-row"><button class="bookmark-button' + (flagged ? " is-active" : "") + '" type="button" data-action="exam-flag">' + icon("flag") + (flagged ? "Đã đánh dấu xem lại" : "Đánh dấu xem lại") + '</button><span class="answered-summary"><strong>' + answeredCount + '</strong> / ' + exam.questions.length + ' câu đã trả lời</span></div>' +
            '<div class="quiz-footer"><button class="button button-secondary button-sm" type="button" data-action="exam-prev"' + (exam.index === 0 ? " disabled" : "") + '>' + icon("arrow-left") + 'Câu trước</button><button class="button button-primary button-sm" type="button" data-action="exam-next"' + (exam.index === exam.questions.length - 1 ? " disabled" : "") + '>Câu sau' + icon("arrow-right") + '</button></div>' +
          '</section>' +
        '</div>' +
        '<aside class="exam-side" aria-label="Bảng điều khiển bài thi">' +
          '<div class="exam-timer" id="exam-timer"><span class="timer-icon">' + icon("clock") + '</span><span class="timer-copy"><span>Thời gian còn lại</span><strong class="timer-value" id="exam-time-value">' + formatDuration(examRemainingSeconds()) + '</strong></span></div>' +
          '<h3>Bảng câu hỏi</h3>' +
          '<div class="navigator-grid">' + navHtml + '</div>' +
          '<div class="exam-legend"><span><i class="legend-dot"></i>Chưa làm</span><span><i class="legend-dot answered"></i>Đã trả lời</span><span><i class="legend-dot flagged"></i>Đánh dấu</span></div>' +
          '<div class="exam-actions"><button class="button button-primary button-block" type="button" data-action="exam-submit">' + icon("check") + 'Nộp bài</button><button class="button button-ghost button-block button-sm" type="button" data-action="exam-exit">Thoát bài thi</button></div>' +
        '</aside>' +
      '</div>';
  }

  /* ---------------------------------------------------------
     Results
     --------------------------------------------------------- */

  function renderResult() {
    const attempt = state.result;
    if (!attempt) {
      performNavigate("dashboard", { instant: true });
      return;
    }
    const total = Number(attempt.total) || attempt.answers.length || 0;
    const correct = Number(attempt.correct) || 0;
    const wrong = Math.max(0, total - correct);
    const score = Number.isFinite(Number(attempt.score)) ? Number(attempt.score) : percent(correct, total);
    const ringClass = score < 50 ? "is-low" : score < PASS_SCORE ? "is-medium" : "";
    const circumference = 2 * Math.PI * 62;
    const offset = circumference * (1 - Math.min(100, Math.max(0, score)) / 100);
    const passed = score >= PASS_SCORE;
    const heading = score >= 90 ? "Rất tốt!" : passed ? "Đạt yêu cầu" : score >= 50 ? "Cần ôn thêm" : "Cần củng cố";
    const subline = attempt.mode === "exam"
      ? "Bài thi đã được chấm tự động. Xem lại các câu sai để biết phần nào cần đọc lại."
      : "Phiên luyện đã hoàn tất. Các câu sai đã được đưa vào danh sách ôn tập.";
    const chapterText = chaptersLabel(attempt.chapters);
    const reviewHtml = attempt.answers.map((answer) => {
      const question = QUESTION_MAP.get(answer.qid);
      if (!question) return "";
      const isCorrect = Boolean(answer.correct);
      const selected = answer.selected == null ? null : Number(answer.selected);
      const options = question.options.map((option, index) => {
        const classes = ["review-option"];
        if (index === Number(question.answer)) classes.push("is-correct");
        if (selected !== null && index === selected && index !== Number(question.answer)) classes.push("is-wrong");
        return '<div class="' + classes.join(" ") + '"><span class="mini-letter">' + OPTION_LETTERS[index] + '</span><span class="review-option-text">' + richMath(option, true) + '</span></div>';
      }).join("");
      return '<details class="review-item"' + (isCorrect ? "" : " open") + '>' +
        '<summary class="review-summary">' +
          '<span class="review-status' + (isCorrect ? "" : " is-wrong") + '">' + icon(isCorrect ? "check" : "close") + '</span>' +
          '<span class="review-summary-body"><strong>' + richMath(question.question) + '</strong>' +
            '<span class="review-summary-meta"><span>Chương ' + esc(question.chapter) + '</span><span>·</span><span>' + esc(question.topic || "") + '</span><span>·</span><span>' + (selected === null ? "Chưa trả lời" : isCorrect ? "Đúng" : "Sai") + '</span></span>' +
          '</span>' + icon("chevron", "review-chevron") +
        '</summary>' +
        '<div class="review-body">' + options +
          '<div class="review-explanation">' + richMath(question.explain) + '<span class="review-source">Nguồn: ' + esc(question.source || ("Chương " + question.chapter)) + '</span></div>' +
        '</div>' +
      '</details>';
    }).join("");

    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("spark") + 'Kết quả phiên học</span><h1 class="page-title">' + (attempt.mode === "exam" ? "Kết quả thi thử" : "Kết quả luyện tập") + '</h1><p class="page-lead">' + esc(chapterText) + ' · ' + total + ' câu · ' + modeLabel(attempt.mode) + '</p></div><div class="page-head-actions"><button class="button button-secondary" type="button" data-action="go-dashboard">' + icon("grid") + 'Về tổng quan</button></div></div>' +
      '<section class="result-hero">' +
        '<div class="score-ring ' + ringClass + '" aria-label="Điểm số ' + score + ' phần trăm">' +
          '<svg viewBox="0 0 154 154" aria-hidden="true"><circle class="ring-bg" cx="77" cy="77" r="62"></circle><circle class="ring-value" cx="77" cy="77" r="62" stroke-dasharray="' + circumference.toFixed(2) + '" stroke-dashoffset="' + offset.toFixed(2) + '"></circle></svg>' +
          '<span class="score-ring-inner"><strong>' + score + '%</strong><span>' + correct + '/' + total + ' câu đúng</span></span>' +
        '</div>' +
        '<div class="result-copy"><span class="badge ' + (passed ? "badge-success" : "badge-warning") + '">' + (passed ? "Đạt" : "Chưa đạt") + ' · mốc ' + PASS_SCORE + '%</span>' +
          '<h2 style="margin-top:9px">' + heading + '</h2><p>' + subline + '</p>' +
          '<div class="result-stats">' +
            '<div class="result-stat"><strong>' + correct + '</strong><span>Câu đúng</span></div>' +
            '<div class="result-stat"><strong>' + wrong + '</strong><span>Câu sai / bỏ</span></div>' +
            '<div class="result-stat"><strong>' + formatDuration(attempt.durationSec) + '</strong><span>Thời gian</span></div>' +
            '<div class="result-stat"><strong>' + esc(chapterText) + '</strong><span>Phạm vi</span></div>' +
          '</div>' +
          '<div class="result-actions">' +
            (wrong ? '<button class="button button-primary" type="button" data-action="retry-wrong">' + icon("refresh") + 'Luyện lại câu sai (' + wrong + ')</button>' : '') +
            '<button class="button button-secondary" type="button" data-action="retry-all">' + icon("play") + 'Làm lại bộ này</button>' +
            (attempt.mode === "exam" ? '<button class="button button-ghost" type="button" data-route="exam">' + icon("clock") + 'Thi đề mới</button>' : '<button class="button button-ghost" type="button" data-route="practice">' + icon("target") + 'Luyện chương khác</button>') +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="review-section"><div class="review-section-head"><div><h2>Xem lại ' + total + ' câu</h2><p>Câu sai được mở sẵn. Nhấn vào từng câu để xem đáp án và giải thích.</p></div></div>' +
        '<div class="review-list">' + reviewHtml + '</div>' +
      '</section>';
  }

  /* ---------------------------------------------------------
     Wrong questions & bookmarks
     --------------------------------------------------------- */

  function emptyState(iconName, title, text, actionHtml) {
    return '<div class="empty-state"><span class="empty-icon">' + icon(iconName) + '</span><h2>' + esc(title) + '</h2><p>' + esc(text) + '</p>' + (actionHtml || "") + '</div>';
  }

  function filterTabs(current, actionName) {
    const allActive = current === "all" || current == null;
    return '<div class="filter-tabs" role="group" aria-label="Lọc theo chương">' +
      '<button class="filter-tab' + (allActive ? " is-active" : "") + '" type="button" data-action="' + actionName + '" data-filter="all">Tất cả</button>' +
      CHAPTERS.map((chapter) => '<button class="filter-tab' + (Number(current) === chapter.number ? " is-active" : "") + '" type="button" data-action="' + actionName + '" data-filter="' + chapter.number + '">C' + chapter.number + '</button>').join("") +
    '</div>';
  }

  function wrongEntries(filter) {
    return Object.keys(store.wrong)
      .map((id) => ({ id, question: QUESTION_MAP.get(id), meta: store.wrong[id] }))
      .filter((entry) => entry.question && (filter === "all" || Number(entry.question.chapter) === Number(filter)))
      .sort((a, b) => (b.meta.lastAt || 0) - (a.meta.lastAt || 0));
  }

  function bookmarkEntries(filter) {
    return store.bookmarks
      .map((id) => QUESTION_MAP.get(id))
      .filter((question) => question && (filter === "all" || Number(question.chapter) === Number(filter)));
  }

  function renderWrong() {
    const entries = wrongEntries(state.wrongFilter);
    const allEntries = wrongEntries("all");
    const hasAny = allEntries.length > 0;
    const actions = allEntries.length
      ? '<button class="button button-primary" type="button" data-action="practice-wrong-all">' + icon("play") + 'Luyện tất cả (' + allEntries.length + ')</button><button class="button button-ghost" type="button" data-action="clear-wrong">' + icon("trash") + 'Xóa danh sách</button>'
      : '<button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Bắt đầu luyện</button>';

    let content = "";
    if (!hasAny) {
      content = emptyState("refresh", "Chưa có câu sai nào", "Khi bạn trả lời sai trong luyện tập hoặc thi thử, câu đó sẽ xuất hiện ở đây. Trả lời đúng lại sẽ tự động xóa khỏi danh sách.", '<button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Luyện tập ngay</button>');
    } else if (!entries.length) {
      content = emptyState("refresh", "Chương này chưa có câu sai", "Bạn đang lọc theo một chương không có câu sai nào. Chuyển về Tất cả để xem toàn bộ danh sách.", '<button class="button button-secondary" type="button" data-action="filter-wrong" data-filter="all">Xem tất cả câu sai</button>');
    } else {
      content = '<div class="question-list">' + entries.map((entry) => {
        const question = entry.question;
        return '<article class="list-card">' +
          '<div class="list-card-main"><div class="list-card-meta"><span class="badge badge-accent">Chương ' + question.chapter + '</span><span>' + esc(question.topic || "") + '</span><span>·</span><span>Sai ' + entry.meta.count + ' lần</span><span>·</span><span>' + relativeDate(entry.meta.lastAt) + '</span></div>' +
            '<h3 class="list-card-title">' + richMath(question.question) + '</h3>' +
            '<p class="list-card-answer"><strong>Đáp án đúng:</strong> ' + richMath(question.options[question.answer], true) + '</p>' +
            '<p class="list-card-note">' + richMath(question.explain) + '</p>' +
          '</div>' +
          '<div class="list-card-actions"><button class="button button-primary button-sm" type="button" data-action="practice-single" data-id="' + esc(question.id) + '" data-mode="wrong">' + icon("play") + 'Luyện câu này</button><button class="button button-ghost button-sm" type="button" data-action="remove-wrong" data-id="' + esc(question.id) + '">' + icon("close") + 'Bỏ khỏi danh sách</button></div>' +
        '</article>';
      }).join("") + '</div>';
    }

    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("refresh") + 'Học từ lỗi sai</span><h1 class="page-title">Câu đã làm sai</h1><p class="page-lead">Danh sách này chỉ giữ những câu bạn từng trả lời sai. Luyện lại và trả lời đúng để tự động đánh dấu đã khắc phục.</p></div><div class="page-head-actions">' + actions + '</div></div>' +
      '<div class="list-toolbar">' + filterTabs(state.wrongFilter, "filter-wrong") + '<span class="spacer"></span><span class="list-count">' + entries.length + ' câu đang hiển thị</span></div>' +
      content;
  }

  function renderBookmarks() {
    const entries = bookmarkEntries(state.bookmarkFilter);
    const allEntries = bookmarkEntries("all");
    const actions = allEntries.length
      ? '<button class="button button-primary" type="button" data-action="practice-bookmarks-all">' + icon("play") + 'Luyện tất cả (' + allEntries.length + ')</button>'
      : '<button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Luyện tập ngay</button>';

    let content = "";
    if (!allEntries.length) {
      content = emptyState("bookmark", "Chưa đánh dấu câu nào", "Nhấn nút Đánh dấu trong lúc luyện hoặc thi để lưu câu hỏi vào đây. Rất tiện cho những công thức bạn hay quên.", '<button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Luyện tập ngay</button>');
    } else if (!entries.length) {
      content = emptyState("bookmark", "Chương này chưa có câu đánh dấu", "Chuyển về Tất cả để xem những câu bạn đã lưu ở các chương khác.", '<button class="button button-secondary" type="button" data-action="filter-bookmarks" data-filter="all">Xem tất cả</button>');
    } else {
      content = '<div class="question-list">' + entries.map((question) => {
        return '<article class="list-card">' +
          '<div class="list-card-main"><div class="list-card-meta"><span class="badge badge-warning">Chương ' + question.chapter + '</span><span>' + esc(question.topic || "") + '</span><span>·</span><span>' + difficultyLabel(question.difficulty) + '</span></div>' +
            '<h3 class="list-card-title">' + richMath(question.question) + '</h3>' +
            '<p class="list-card-answer"><strong>Đáp án:</strong> ' + richMath(question.options[question.answer], true) + '</p>' +
            '<p class="list-card-note">' + richMath(question.explain) + '</p>' +
          '</div>' +
          '<div class="list-card-actions"><button class="button button-primary button-sm" type="button" data-action="practice-single" data-id="' + esc(question.id) + '" data-mode="bookmarks">' + icon("play") + 'Luyện câu này</button><button class="button button-ghost button-sm" type="button" data-action="remove-bookmark" data-id="' + esc(question.id) + '">' + icon("trash") + 'Bỏ đánh dấu</button></div>' +
        '</article>';
      }).join("") + '</div>';
    }

    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("bookmark") + 'Danh sách cá nhân</span><h1 class="page-title">Câu đánh dấu</h1><p class="page-lead">Những câu bạn muốn xem lại. Có thể luyện riêng từng câu hoặc luyện toàn bộ danh sách.</p></div><div class="page-head-actions">' + actions + '</div></div>' +
      '<div class="list-toolbar">' + filterTabs(state.bookmarkFilter, "filter-bookmarks") + '<span class="spacer"></span><span class="list-count">' + entries.length + ' câu đang hiển thị</span></div>' +
      content;
  }

  /* ---------------------------------------------------------
     Notebook
     --------------------------------------------------------- */

  function formulaCount() {
    return FORMULAS.reduce((total, group) => total + (Array.isArray(group.items) ? group.items.length : 0), 0);
  }

  function renderFormulaMath(root) {
    if (!root) return;
    const canRender = window.katex && typeof window.katex.render === "function";
    $$(".formula-math", root).forEach((element) => {
      const tex = element.getAttribute("data-formula-tex") || "";
      const fallback = element.getAttribute("data-formula-fallback") || tex;
      if (!canRender) {
        element.textContent = fallback;
        element.classList.add("is-fallback");
        return;
      }
      try {
        window.katex.render(tex, element, {
          displayMode: true,
          throwOnError: false,
          strict: false,
          trust: false,
          output: "htmlAndMathml"
        });
      } catch (error) {
        element.textContent = fallback;
        element.classList.add("is-fallback");
      }
    });
  }

  function formatFormulaTex(tex) {
    if (!tex || tex.indexOf("\\begin{") !== -1) return tex;
    const parts = tex.split(/;\s*(?:\\qquad|\\quad)\s*/).filter(Boolean);
    if (parts.length < 2) return tex;
    return "\\begin{array}{l}" + parts.join("\\\\[3pt]") + "\\end{array}";
  }

  function formulaRowsHtml(item) {
    if (!Array.isArray(item.latexRows) || !item.latexRows.length) {
      return '<div class="formula-expression">' + esc(item.formula) + '</div>';
    }
    return item.latexRows.map((row) => {
      const label = row && row.label ? '<span class="formula-label">' + esc(row.label) + '</span>' : "";
      const tex = formatFormulaTex(row && row.tex ? row.tex : "");
      return '<div class="formula-row">' + label +
        '<div class="formula-math" data-formula-tex="' + esc(tex) + '" data-formula-fallback="' + esc(item.formula) + '"></div>' +
      '</div>';
    }).join("");
  }

  function filteredFormulaGroups() {
    const query = fold(state.notebookQuery);
    return FORMULAS
      .filter((group) => state.notebookFilter === "all" || Number(group.chapter) === Number(state.notebookFilter))
      .map((group) => {
        const items = (Array.isArray(group.items) ? group.items : []).filter((item) => {
          if (!query) return true;
          return fold([group.title, item.name, item.formula, item.note].join(" ")).includes(query);
        });
        return Object.assign({}, group, { items });
      })
      .filter((group) => group.items.length > 0);
  }

  function renderFormulaResults() {
    const resultsEl = $("#formula-results");
    if (!resultsEl) return;
    const groups = filteredFormulaGroups();
    state.formulaCopyMap = {};
    const visibleCount = groups.reduce((total, group) => total + group.items.length, 0);
    const countEl = $("#formula-count");
    if (countEl) {
      countEl.textContent = visibleCount === formulaCount()
        ? visibleCount + " mục công thức"
        : visibleCount + " / " + formulaCount() + " mục công thức";
    }
    if (!groups.length) {
      resultsEl.innerHTML = '<div class="formula-empty">Không tìm thấy công thức phù hợp. Thử từ khóa khác hoặc chọn “Tất cả”.</div>';
      return;
    }
    let serial = 0;
    const sections = CHAPTERS.map((chapter) => {
      const chapterGroups = groups.filter((group) => Number(group.chapter) === chapter.number);
      if (!chapterGroups.length) return "";
      const cards = chapterGroups.map((group) => {
        const items = group.items.map((item) => {
          serial += 1;
          const formulaId = "formula-" + serial;
          state.formulaCopyMap[formulaId] = item.formula;
          return '<div class="formula-item">' +
            '<div class="formula-name">' + esc(item.name) + '</div>' +
            formulaRowsHtml(item) +
            (item.note ? '<p class="formula-note">' + rich(item.note) + '</p>' : '') +
            (item.source ? '<span class="formula-source">Nguồn: ' + esc(item.source) + '</span>' : '') +
            '<button class="copy-btn" type="button" data-action="copy-formula" data-formula-id="' + formulaId + '" aria-label="Sao chép công thức dạng văn bản" title="Sao chép công thức">' + icon("copy") + '</button>' +
          '</div>';
        }).join("");
        return '<article class="formula-card"><h3>' + esc(group.title || "Công thức trọng tâm") + '</h3>' + items + '</article>';
      }).join("");
      return '<section class="formula-chapter-section" style="--chapter-color:' + esc(chapter.color) + '">' +
        '<div class="formula-chapter-head"><span class="formula-chapter-num">' + chapter.number + '</span><h2>' + esc(chapter.title) + '</h2><span>' + chapterGroups.reduce((total, group) => total + group.items.length, 0) + ' mục</span></div>' +
        '<div class="formula-grid">' + cards + '</div>' +
      '</section>';
    }).join("");
    resultsEl.innerHTML = sections;
    renderFormulaMath(resultsEl);
  }

  function renderNotebook() {
    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("book") + 'Tra cứu nhanh</span><h1 class="page-title">Sổ công thức</h1><p class="page-lead">Các công thức trọng tâm của 6 chương, kèm điều kiện áp dụng và số trang trong slide. Nhấn biểu tượng sao chép để dùng lại.</p></div><div class="page-head-actions"><button class="button button-secondary" type="button" data-action="print-notebook">' + icon("download") + 'In / lưu PDF</button><button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Luyện tập</button></div></div>' +
      '<div class="notebook-toolbar">' +
        '<div class="search-wrap">' + icon("search") + '<input class="search-input" id="formula-search" type="search" placeholder="Tìm công thức, đại lượng, ghi chú..." value="' + esc(state.notebookQuery) + '" autocomplete="off"></div>' +
        filterTabs(state.notebookFilter, "filter-notebook") +
        '<span class="spacer"></span><span class="list-count" id="formula-count"></span>' +
      '</div>' +
      '<div id="formula-results"></div>';
    renderFormulaResults();
    const search = $("#formula-search");
    if (search && state.notebookQuery) {
      search.focus({ preventScroll: true });
      search.setSelectionRange(search.value.length, search.value.length);
    }
  }

  /* ---------------------------------------------------------
     History
     --------------------------------------------------------- */

  function renderHistory() {
    const all = store.attempts || [];
    const filtered = all.filter((attempt) => state.historyFilter === "all" || attempt.mode === state.historyFilter);
    const tabs = [["all", "Tất cả"], ["practice", "Luyện tập"], ["exam", "Thi thử"]];
    const toolbar = '<div class="filter-tabs" role="group" aria-label="Lọc lịch sử">' + tabs.map(([value, label]) =>
      '<button class="filter-tab' + (state.historyFilter === value ? " is-active" : "") + '" type="button" data-action="filter-history" data-filter="' + value + '">' + label + '</button>'
    ).join("") + '</div>';

    let content;
    if (!all.length) {
      content = emptyState("history", "Chưa có lịch sử học", "Hoàn thành một phiên luyện hoặc bài thi thử, kết quả sẽ được lưu tại đây để bạn xem lại bất cứ lúc nào.", '<button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Bắt đầu phiên đầu tiên</button>');
    } else if (!filtered.length) {
      content = '<div class="empty-state"><span class="empty-icon">' + icon("history") + '</span><h2>Chưa có phiên phù hợp</h2><p>Bộ lọc hiện tại chưa có kết quả. Thử chọn “Tất cả”.</p><button class="button button-secondary" type="button" data-action="filter-history" data-filter="all">Xem tất cả</button></div>';
    } else {
      content = '<div class="history-list">' + filtered.map((attempt) => {
        const passed = Number(attempt.score) >= PASS_SCORE;
        return '<article class="history-row">' +
          '<div class="history-main"><div class="history-title"><span class="badge ' + (attempt.mode === "exam" ? "badge-accent" : "") + '">' + modeLabel(attempt.mode) + '</span><strong>' + esc(attempt.title || "Phiên học") + '</strong>' + (attempt.mode === "exam" ? '<span class="badge ' + (passed ? "badge-success" : "badge-warning") + '">' + (passed ? "Đạt" : "Chưa đạt") + '</span>' : '') + '</div>' +
            '<div class="history-meta"><span>' + icon("clock") + relativeDate(attempt.finishedAt) + '</span><span>' + icon("layers") + esc(chaptersLabel(attempt.chapters)) + '</span><span>' + icon("target") + (attempt.correct || 0) + '/' + (attempt.total || 0) + ' câu đúng</span><span>' + icon("history") + formatDuration(attempt.durationSec) + '</span></div>' +
          '</div>' +
          '<div class="history-score"><strong>' + Number(attempt.score || 0) + '%</strong><span>điểm</span></div>' +
          '<div class="history-actions"><button class="button button-secondary button-sm" type="button" data-action="review-attempt" data-id="' + esc(attempt.id) + '">' + icon("search") + 'Xem lại</button><button class="icon-button" type="button" data-action="delete-attempt" data-id="' + esc(attempt.id) + '" aria-label="Xóa phiên này" title="Xóa phiên này">' + icon("trash") + '</button></div>' +
        '</article>';
      }).join("") + '</div>';
    }

    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("history") + 'Nhìn lại quá trình</span><h1 class="page-title">Lịch sử học</h1><p class="page-lead">Mỗi phiên luyện và thi thử được lưu thành một bản ghi. Mở lại để xem đáp án, giải thích và những câu cần ôn.</p></div><div class="page-head-actions">' + (all.length ? '<button class="button button-ghost" type="button" data-action="clear-history">' + icon("trash") + 'Xóa lịch sử</button>' : '') + '<button class="button button-primary" type="button" data-route="practice">' + icon("target") + 'Luyện tập</button></div></div>' +
      '<div class="list-toolbar">' + toolbar + '<span class="spacer"></span><span class="list-count">' + filtered.length + ' phiên</span></div>' +
      content;
  }

  /* ---------------------------------------------------------
     Settings
     --------------------------------------------------------- */

  function storageSize() {
    try {
      return Math.max(1, Math.round(new Blob([JSON.stringify(store)]).size / 1024));
    } catch (error) {
      return 1;
    }
  }

  function renderSettings() {
    const themeButtons = [["light", "Sáng", "sun"], ["dark", "Tối", "moon"]].map(([value, label, iconName]) =>
      '<button class="seg-btn' + (store.theme === value ? " is-selected" : "") + '" type="button" data-action="set-theme" data-theme="' + value + '" aria-pressed="' + (store.theme === value) + '">' + icon(iconName) + label + '</button>'
    ).join("");
    const goalButtons = [10, 20, 30].map((value) =>
      '<button class="seg-btn' + (Number(store.settings.dailyGoal) === value ? " is-selected" : "") + '" type="button" data-action="set-daily-goal" data-goal="' + value + '" aria-pressed="' + (Number(store.settings.dailyGoal) === value) + '">' + value + ' câu</button>'
    ).join("");

    viewEl.innerHTML =
      '<div class="page-head"><div><span class="eyebrow">' + icon("settings") + 'Tùy chỉnh trải nghiệm</span><h1 class="page-title">Cài đặt</h1><p class="page-lead">Thay đổi giao diện, cách luyện tập và quản lý dữ liệu học được lưu trong trình duyệt.</p></div></div>' +
      '<div class="settings-grid">' +
        '<section class="settings-card"><h2>Giao diện</h2><p>Chọn tông màu phù hợp khi học ngày hoặc đêm.</p>' +
          '<div class="theme-choice">' + themeButtons + '</div>' +
          '<div class="toggle-row" style="margin-top:15px"><div class="toggle-copy"><strong>Mục tiêu mỗi ngày</strong><span>Dùng để tính vòng tiến độ ở trang tổng quan.</span></div><div class="segmented">' + goalButtons + '</div></div>' +
        '</section>' +
        '<section class="settings-card"><h2>Cách luyện tập</h2><p>Các tùy chọn này áp dụng cho những phiên luyện mới.</p>' +
          '<div class="toggle-row"><div class="toggle-copy"><strong>Trộn thứ tự câu hỏi</strong><span>Không hiển thị câu hỏi theo thứ tự cố định.</span></div><button class="switch" type="button" data-action="toggle-setting" data-key="shuffleQuestions" aria-pressed="' + Boolean(store.settings.shuffleQuestions) + '" aria-label="Trộn thứ tự câu hỏi"></button></div>' +
          '<div class="toggle-row"><div class="toggle-copy"><strong>Hiện giải thích ngay</strong><span>Tự mở giải thích sau khi bạn chọn đáp án.</span></div><button class="switch" type="button" data-action="toggle-setting" data-key="showExplanation" aria-pressed="' + Boolean(store.settings.showExplanation) + '" aria-label="Hiện giải thích ngay"></button></div>' +
        '</section>' +
        '<section class="settings-card"><h2>Dữ liệu học</h2><p>Tiến độ được lưu trên chính thiết bị này. Xuất file JSON để sao lưu khi cần.</p>' +
          '<ul class="about-list"><li><span>Ngân hàng câu hỏi</span><strong>' + QUESTIONS.length + ' câu · ' + CHAPTERS.length + ' chương</strong></li><li><span>Câu đã làm</span><strong>' + overallStats().answered + ' câu</strong></li><li><span>Câu sai đang lưu</span><strong>' + Object.keys(store.wrong).length + ' câu</strong></li><li><span>Lịch sử phiên học</span><strong>' + store.attempts.length + ' phiên</strong></li><li><span>Dung lượng ước tính</span><strong>' + storageSize() + ' KB</strong></li></ul>' +
          '<div class="danger-actions"><button class="button button-secondary button-sm" type="button" data-action="export-data">' + icon("download") + 'Xuất dữ liệu</button><button class="button button-ghost button-sm" type="button" data-action="clear-history">' + icon("trash") + 'Xóa lịch sử</button></div>' +
        '</section>' +
        '<section class="settings-card danger-zone"><h2>Vùng nguy hiểm</h2><p>Xóa toàn bộ tiến độ, câu sai, câu đánh dấu và lịch sử. Cài đặt giao diện vẫn được giữ lại.</p>' +
          '<div class="danger-actions"><button class="button button-danger" type="button" data-action="reset-progress">' + icon("trash") + 'Xóa toàn bộ dữ liệu học</button><button class="button button-ghost" type="button" data-action="reset-app">Đặt lại ứng dụng</button></div>' +
          '<p class="field-hint" style="margin-top:12px">Thao tác không thể hoàn tác. Hãy xuất dữ liệu trước nếu bạn muốn giữ bản sao.</p>' +
        '</section>' +
      '</div>' +
      '<div class="notice" style="margin-top:16px">' + icon("shield") + '<span>Ứng dụng chạy hoàn toàn ngoại tuyến. Nội dung câu hỏi và công thức được biên soạn dựa trên slide bài giảng Trường điện từ, Chương 1–6. Đây là công cụ tự ôn tập, không thay thế tài liệu chính thức của môn học.</span></div>';
  }

  /* ---------------------------------------------------------
     Notifications & modal
     --------------------------------------------------------- */

  function showToast(message, type) {
    if (!toastRegion) return;
    const toast = document.createElement("div");
    toast.className = "toast" + (type === "error" ? " toast-error" : "");
    toast.innerHTML = icon(type === "error" ? "alert" : "check") + "<span>" + esc(message) + "</span>";
    toastRegion.appendChild(toast);
    const lifetime = type === "error" ? 4500 : 3000;
    setTimeout(() => {
      toast.classList.add("toast-out");
      setTimeout(() => toast.remove(), 220);
    }, lifetime);
  }

  function showConfirm(options) {
    const opts = options || {};
    state.lastFocused = document.activeElement;
    state.pendingConfirm = typeof opts.onConfirm === "function" ? opts.onConfirm : null;
    modalRoot.innerHTML = '<div class="modal-backdrop" data-modal-backdrop="true">' +
      '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-message">' +
        '<div class="modal-header"><span class="modal-icon' + (opts.danger ? " is-danger" : "") + '">' + icon(opts.danger ? "alert" : "shield") + '</span><div><h2 id="modal-title">' + esc(opts.title || "Xác nhận") + '</h2><p id="modal-message">' + esc(opts.message || "") + '</p></div><button class="modal-close" type="button" data-modal-action="close" aria-label="Đóng">' + icon("close") + '</button></div>' +
        '<div class="modal-body">' + (opts.bodyHtml || "") + '</div>' +
        '<div class="modal-footer"><button class="button button-secondary" type="button" data-modal-action="close">' + esc(opts.cancelLabel || "Hủy") + '</button><button class="button ' + (opts.danger ? "button-danger" : "button-primary") + '" type="button" data-modal-action="confirm">' + esc(opts.confirmLabel || "Đồng ý") + '</button></div>' +
      '</div>' +
    '</div>';
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => {
      const target = $('[data-modal-action="confirm"]', modalRoot);
      if (target) target.focus();
    });
  }

  function closeModal(restoreFocus) {
    if (!modalRoot) return;
    modalRoot.innerHTML = "";
    document.body.classList.remove("modal-open");
    state.pendingConfirm = null;
    if (restoreFocus !== false && state.lastFocused && document.contains(state.lastFocused)) {
      state.lastFocused.focus({ preventScroll: true });
    }
    state.lastFocused = null;
  }

  function confirmModal() {
    const callback = state.pendingConfirm;
    closeModal(false);
    if (callback) callback();
  }

  /* ---------------------------------------------------------
     Exam engine
     --------------------------------------------------------- */

  function startExam() {
    const pool = examPool();
    if (!pool.length) {
      showToast("Hãy chọn ít nhất một chương có câu hỏi.", "error");
      return;
    }
    const count = Math.min(Number(state.examSetup.count) || 20, pool.length);
    const durationMinutes = Number(state.examSetup.duration) || 30;
    const questions = shuffle(pool).slice(0, count);
    const startedAt = Date.now();
    state.exam = {
      questions,
      index: 0,
      answers: {},
      flagged: new Set(),
      startedAt,
      durationSec: durationMinutes * 60,
      deadline: startedAt + durationMinutes * 60 * 1000,
      timerId: null,
      submitting: false,
      chapters: unique(questions.map((question) => Number(question.chapter)))
    };
    state.result = null;
    state.view = "examQuiz";
    window.scrollTo({ top: 0, behavior: "auto" });
    render();
    if (viewEl) viewEl.focus({ preventScroll: true });
  }

  function submitExam(auto) {
    const exam = state.exam;
    if (!exam || exam.submitting) return;
    exam.submitting = true;
    clearExamTimer();
    const finishedAt = Date.now();
    const usedSeconds = auto ? exam.durationSec : Math.min(exam.durationSec, Math.max(1, Math.round((finishedAt - exam.startedAt) / 1000)));
    const answers = exam.questions.map((question) => {
      const selected = exam.answers[question.id];
      return {
        qid: question.id,
        selected: selected === undefined ? null : Number(selected),
        correct: selected !== undefined && Number(selected) === Number(question.answer)
      };
    });
    answers.forEach((answer) => {
      const question = QUESTION_MAP.get(answer.qid);
      if (answer.selected !== null && question) {
        recordAnswer(answer.qid, answer.correct, { save: false });
      }
    });
    const correct = answers.filter((answer) => answer.correct).length;
    const attempt = {
      id: "attempt-" + finishedAt,
      mode: "exam",
      title: "Thi thử · " + chaptersLabel(exam.chapters),
      chapters: exam.chapters,
      total: exam.questions.length,
      correct,
      score: percent(correct, exam.questions.length),
      startedAt: exam.startedAt,
      finishedAt,
      durationSec: usedSeconds,
      autoSubmitted: Boolean(auto),
      answers
    };
    store.attempts.unshift(attempt);
    store.attempts = store.attempts.slice(0, 50);
    saveStore();
    state.result = attempt;
    state.resultOrigin = "exam";
    state.exam = null;
    state.view = "result";
    window.scrollTo({ top: 0, behavior: "auto" });
    render();
    showToast(auto ? "Hết giờ. Bài thi đã được nộp tự động." : "Đã nộp bài. Kết quả được lưu vào lịch sử.", auto ? "error" : "success");
  }

  /* ---------------------------------------------------------
     Data actions
     --------------------------------------------------------- */

  function startPracticeFromSetup() {
    const selected = state.practiceSetup.chapter;
    const pool = selected === "all" ? QUESTIONS : questionsForChapter(selected);
    if (!pool.length) {
      showToast("Phạm vi này chưa có câu hỏi.", "error");
      return;
    }
    const count = Math.min(Number(state.practiceSetup.count) || 10, pool.length);
    const sampled = store.settings.shuffleQuestions ? shuffle(pool).slice(0, count) : pool.slice(0, count);
    const chapter = selected === "all" ? null : CHAPTER_MAP.get(Number(selected));
    startPracticeSession(
      sampled.map((question) => question.id),
      chapter ? "Luyện " + chapter.title : "Luyện tổng hợp 6 chương",
      "practice",
      "practice"
    );
  }

  function retryAttempt(onlyWrong) {
    const attempt = state.result;
    if (!attempt) return;
    const ids = attempt.answers
      .filter((answer) => !onlyWrong || !answer.correct)
      .map((answer) => answer.qid);
    if (!ids.length) {
      showToast("Bạn không có câu sai trong phiên này.", "error");
      return;
    }
    startPracticeSession(
      ids,
      onlyWrong ? "Ôn lại câu sai" : "Làm lại bộ câu hỏi",
      onlyWrong ? "wrong" : "practice",
      "result"
    );
  }

  function exportData() {
    try {
      const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "truong-dien-tu-backup-" + todayKey() + ".json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast("Đã xuất dữ liệu học ra file JSON.");
    } catch (error) {
      showToast("Không thể xuất dữ liệu.", "error");
    }
  }

  function clearHistory() {
    if (!store.attempts.length) {
      showToast("Lịch sử đang trống.", "error");
      return;
    }
    showConfirm({
      title: "Xóa lịch sử học?",
      message: "Toàn bộ các phiên luyện và bài thi đã lưu sẽ bị xóa. Tiến độ câu hỏi và danh sách câu sai vẫn được giữ lại.",
      confirmLabel: "Xóa lịch sử",
      danger: true,
      onConfirm: () => {
        store.attempts = [];
        saveStore();
        render();
        showToast("Đã xóa lịch sử học.");
      }
    });
  }

  function resetProgress() {
    showConfirm({
      title: "Xóa toàn bộ dữ liệu học?",
      message: "Tiến độ từng câu, chuỗi ngày, câu sai, câu đánh dấu và toàn bộ lịch sử sẽ bị xóa. Thao tác này không thể hoàn tác.",
      confirmLabel: "Xóa tất cả",
      danger: true,
      onConfirm: () => {
        store.records = {};
        store.wrong = {};
        store.bookmarks = [];
        store.activity = {};
        store.attempts = [];
        state.result = null;
        saveStore();
        state.view = "dashboard";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast("Đã xóa dữ liệu học. Bắt đầu lại từ đầu!");
      }
    });
  }

  function resetApp() {
    showConfirm({
      title: "Đặt lại ứng dụng?",
      message: "Toàn bộ dữ liệu và tùy chỉnh sẽ trở về mặc định ban đầu.",
      confirmLabel: "Đặt lại",
      danger: true,
      onConfirm: () => {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
          // Bỏ qua nếu trình duyệt chặn localStorage.
        }
        clearExamTimer();
        store = makeDefaultStore();
        state.practice = null;
        state.exam = null;
        state.result = null;
        state.practiceSetup = { chapter: 1, count: 10 };
        state.examSetup = { chapters: CHAPTERS.map((chapter) => chapter.number), count: 20, duration: 30 };
        applyTheme(store.theme);
        state.view = "dashboard";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast("Ứng dụng đã trở về trạng thái ban đầu.");
      }
    });
  }

  function toggleSetting(key) {
    if (!["shuffleQuestions", "showExplanation"].includes(key)) return;
    store.settings[key] = !store.settings[key];
    saveStore();
    render();
  }

  function toggleBookmark(questionId) {
    if (!QUESTION_MAP.has(questionId)) return;
    if (store.bookmarks.includes(questionId)) {
      store.bookmarks = store.bookmarks.filter((id) => id !== questionId);
      showToast("Đã bỏ đánh dấu câu hỏi.");
    } else {
      store.bookmarks.push(questionId);
      showToast("Đã thêm câu hỏi vào danh sách đánh dấu.");
    }
    saveStore();
    render();
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext !== false) {
      return navigator.clipboard.writeText(text).catch(() => copyTextFallback(text));
    }
    return copyTextFallback(text);
  }

  function copyTextFallback(text) {
    return new Promise((resolve, reject) => {
      try {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  function copyFormula(formulaId) {
    const formula = state.formulaCopyMap[formulaId];
    if (!formula) return;
    copyText(formula).then(() => showToast("Đã sao chép công thức.")).catch(() => showToast("Trình duyệt không cho phép sao chép.", "error"));
  }

  /* ---------------------------------------------------------
     Action router
     --------------------------------------------------------- */

  function handleAction(action, element) {
    const dataset = element.dataset;
    switch (action) {
      case "open-chapter": {
        state.practiceSetup.chapter = Number(dataset.chapter);
        requestNavigate("practice");
        break;
      }
      case "hero-start": {
        const weakest = getWeakestChapter();
        state.practiceSetup.chapter = weakest ? weakest.chapter.number : 1;
        requestNavigate("practice");
        break;
      }
      case "pick-practice-chapter": {
        state.practiceSetup.chapter = dataset.chapter === "all" ? "all" : Number(dataset.chapter);
        render();
        break;
      }
      case "pick-practice-count": {
        state.practiceSetup.count = Number(dataset.count);
        render();
        break;
      }
      case "start-practice":
        startPracticeFromSetup();
        break;
      case "answer-practice": {
        const practice = state.practice;
        if (!practice) break;
        const question = practice.questions[practice.index];
        const index = Number(dataset.index);
        if (!question || practice.answers[question.id] !== undefined || index < 0 || index > 3) break;
        practice.answers[question.id] = index;
        if (store.settings.showExplanation) practice.revealed[question.id] = true;
        const correct = index === Number(question.answer);
        recordAnswer(question.id, correct);
        render();
        break;
      }
      case "reveal-explanation": {
        if (!state.practice) break;
        const question = state.practice.questions[state.practice.index];
        if (!question) break;
        state.practice.revealed[question.id] = true;
        render();
        break;
      }
      case "next-practice": {
        const practice = state.practice;
        if (!practice) break;
        const question = practice.questions[practice.index];
        if (!question || practice.answers[question.id] === undefined) break;
        if (practice.index >= practice.questions.length - 1) {
          finishPractice();
        } else {
          practice.index += 1;
          window.scrollTo({ top: 0, behavior: "smooth" });
          render();
        }
        break;
      }
      case "exit-practice": {
        const practice = state.practice;
        if (!practice) break;
        showConfirm({
          title: "Thoát phiên luyện?",
          message: "Các câu đã trả lời vẫn được ghi vào tiến độ, nhưng phiên hiện tại sẽ không được lưu vào lịch sử.",
          confirmLabel: "Thoát phiên",
          onConfirm: () => {
            const returnTo = practice.returnTo || "practice";
            state.practice = null;
            performNavigate(returnTo, { instant: true });
          }
        });
        break;
      }
      case "toggle-bookmark":
        toggleBookmark(dataset.id);
        break;
      case "start-exam":
        startExam();
        break;
      case "pick-exam-chapter": {
        const number = Number(dataset.chapter);
        const chapters = new Set(selectedExamChapters());
        if (chapters.has(number)) chapters.delete(number);
        else chapters.add(number);
        state.examSetup.chapters = Array.from(chapters).sort((a, b) => a - b);
        render();
        break;
      }
      case "pick-exam-count":
        state.examSetup.count = Number(dataset.count);
        render();
        break;
      case "pick-exam-duration":
        state.examSetup.duration = Number(dataset.duration);
        render();
        break;
      case "exam-preset":
        state.examSetup.chapters = CHAPTERS.map((chapter) => chapter.number);
        state.examSetup.count = Number(dataset.count);
        state.examSetup.duration = Number(dataset.duration);
        render();
        break;
      case "answer-exam": {
        if (!state.exam) break;
        const question = state.exam.questions[state.exam.index];
        const index = Number(dataset.index);
        if (!question || index < 0 || index > 3) break;
        state.exam.answers[question.id] = index;
        render();
        break;
      }
      case "exam-prev": {
        if (!state.exam) break;
        state.exam.index = Math.max(0, state.exam.index - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        render();
        break;
      }
      case "exam-next": {
        if (!state.exam) break;
        state.exam.index = Math.min(state.exam.questions.length - 1, state.exam.index + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        render();
        break;
      }
      case "exam-goto": {
        if (!state.exam) break;
        const index = Number(dataset.index);
        if (Number.isInteger(index) && index >= 0 && index < state.exam.questions.length) {
          state.exam.index = index;
          window.scrollTo({ top: 0, behavior: "smooth" });
          render();
        }
        break;
      }
      case "exam-flag": {
        if (!state.exam) break;
        const question = state.exam.questions[state.exam.index];
        if (!question) break;
        if (state.exam.flagged.has(question.id)) state.exam.flagged.delete(question.id);
        else state.exam.flagged.add(question.id);
        render();
        break;
      }
      case "exam-submit": {
        if (!state.exam) break;
        const answered = Object.keys(state.exam.answers).length;
        const total = state.exam.questions.length;
        showConfirm({
          title: "Nộp bài thi?",
          message: "Bạn đã trả lời " + answered + "/" + total + " câu. Câu chưa trả lời sẽ được tính là sai.",
          confirmLabel: "Nộp bài",
          onConfirm: () => submitExam(false)
        });
        break;
      }
      case "exam-exit": {
        if (!state.exam) break;
        showConfirm({
          title: "Thoát bài thi?",
          message: "Bài thi sẽ không được nộp và không được lưu vào lịch sử.",
          confirmLabel: "Thoát bài thi",
          danger: true,
          onConfirm: () => {
            clearExamTimer();
            state.exam = null;
            performNavigate("exam", { instant: true });
          }
        });
        break;
      }
      case "retry-wrong":
        retryAttempt(true);
        break;
      case "retry-all":
        retryAttempt(false);
        break;
      case "go-dashboard":
        requestNavigate("dashboard");
        break;
      case "practice-wrong-all": {
        const ids = wrongEntries("all").map((entry) => entry.id);
        if (!ids.length) {
          showToast("Danh sách câu sai đang trống.", "error");
          break;
        }
        startPracticeSession(ids, "Ôn toàn bộ câu sai", "wrong", "wrong");
        break;
      }
      case "practice-bookmarks-all": {
        const ids = bookmarkEntries("all").map((question) => question.id);
        if (!ids.length) {
          showToast("Danh sách đánh dấu đang trống.", "error");
          break;
        }
        startPracticeSession(ids, "Ôn câu đánh dấu", "bookmarks", "bookmarks");
        break;
      }
      case "practice-single": {
        const question = QUESTION_MAP.get(dataset.id);
        if (!question) break;
        const mode = dataset.mode === "bookmarks" ? "bookmarks" : "wrong";
        startPracticeSession([question.id], "Luyện câu Chương " + question.chapter, mode, mode);
        break;
      }
      case "remove-wrong":
        delete store.wrong[dataset.id];
        saveStore();
        render();
        showToast("Đã bỏ câu khỏi danh sách câu sai.");
        break;
      case "remove-bookmark":
        store.bookmarks = store.bookmarks.filter((id) => id !== dataset.id);
        saveStore();
        render();
        showToast("Đã bỏ đánh dấu câu hỏi.");
        break;
      case "filter-wrong":
        state.wrongFilter = dataset.filter === "all" ? "all" : Number(dataset.filter);
        render();
        break;
      case "filter-bookmarks":
        state.bookmarkFilter = dataset.filter === "all" ? "all" : Number(dataset.filter);
        render();
        break;
      case "filter-history":
        state.historyFilter = dataset.filter || "all";
        render();
        break;
      case "filter-notebook":
        state.notebookFilter = dataset.filter === "all" ? "all" : Number(dataset.filter);
        render();
        break;
      case "clear-wrong":
        if (!Object.keys(store.wrong).length) break;
        showConfirm({
          title: "Xóa danh sách câu sai?",
          message: "Toàn bộ câu trong danh sách sẽ bị xóa. Bạn vẫn có thể luyện lại từ đầu.",
          confirmLabel: "Xóa danh sách",
          danger: true,
          onConfirm: () => {
            store.wrong = {};
            saveStore();
            render();
            showToast("Đã xóa danh sách câu sai.");
          }
        });
        break;
      case "review-attempt": {
        const attempt = store.attempts.find((item) => item.id === dataset.id);
        if (!attempt) break;
        state.result = attempt;
        state.resultOrigin = "history";
        state.view = "result";
        window.scrollTo({ top: 0, behavior: "smooth" });
        render();
        break;
      }
      case "delete-attempt": {
        const attempt = store.attempts.find((item) => item.id === dataset.id);
        if (!attempt) break;
        showConfirm({
          title: "Xóa phiên học này?",
          message: "Bản ghi kết quả sẽ bị xóa khỏi lịch sử. Tiến độ từng câu vẫn được giữ nguyên.",
          confirmLabel: "Xóa phiên",
          danger: true,
          onConfirm: () => {
            store.attempts = store.attempts.filter((item) => item.id !== attempt.id);
            saveStore();
            render();
            showToast("Đã xóa phiên học.");
          }
        });
        break;
      }
      case "set-theme":
        store.theme = dataset.theme === "dark" ? "dark" : "light";
        saveStore();
        applyTheme(store.theme);
        render();
        break;
      case "set-daily-goal":
        store.settings.dailyGoal = Number(dataset.goal);
        saveStore();
        render();
        break;
      case "toggle-setting":
        toggleSetting(dataset.key);
        break;
      case "export-data":
        exportData();
        break;
      case "clear-history":
        clearHistory();
        break;
      case "reset-progress":
        resetProgress();
        break;
      case "reset-app":
        resetApp();
        break;
      case "copy-formula":
        copyFormula(dataset.formulaId);
        break;
      case "print-notebook":
        window.print();
        break;
      default:
        break;
    }
  }

  /* ---------------------------------------------------------
     Sidebar & global events
     --------------------------------------------------------- */

  function openSidebar() {
    const sidebar = $("#sidebar");
    const backdrop = $("#sidebar-backdrop");
    const button = $("#menu-button");
    if (sidebar) sidebar.classList.add("is-open");
    if (backdrop) backdrop.hidden = false;
    if (button) button.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    const sidebar = $("#sidebar");
    const backdrop = $("#sidebar-backdrop");
    const button = $("#menu-button");
    if (sidebar) sidebar.classList.remove("is-open");
    if (backdrop) backdrop.hidden = true;
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function toggleSidebar() {
    const sidebar = $("#sidebar");
    if (sidebar && sidebar.classList.contains("is-open")) closeSidebar();
    else openSidebar();
  }

  document.addEventListener("click", (event) => {
    const modalAction = event.target.closest("[data-modal-action]");
    if (modalAction) {
      event.preventDefault();
      if (modalAction.dataset.modalAction === "confirm") confirmModal();
      else closeModal();
      return;
    }
    if (event.target.matches("[data-modal-backdrop]")) {
      closeModal();
      return;
    }

    const themeButton = event.target.closest("#theme-toggle");
    if (themeButton) {
      store.theme = store.theme === "dark" ? "light" : "dark";
      saveStore();
      applyTheme(store.theme);
      render();
      return;
    }

    const menuButton = event.target.closest("#menu-button");
    if (menuButton) {
      toggleSidebar();
      return;
    }

    if (event.target.closest("#sidebar-backdrop")) {
      closeSidebar();
      return;
    }

    const routeElement = event.target.closest("[data-route]");
    if (routeElement) {
      event.preventDefault();
      closeSidebar();
      const route = routeElement.dataset.route;
      if (route === "practice" && routeElement.dataset.chapter) {
        state.practiceSetup.chapter = Number(routeElement.dataset.chapter);
      }
      requestNavigate(route);
      return;
    }

    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      event.preventDefault();
      if (actionElement.closest(".side-nav")) closeSidebar();
      handleAction(actionElement.dataset.action, actionElement);
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target && event.target.id === "formula-search") {
      state.notebookQuery = event.target.value;
      renderFormulaResults();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modalRoot && modalRoot.innerHTML.trim()) {
        closeModal();
        return;
      }
      if ($("#sidebar") && $("#sidebar").classList.contains("is-open")) {
        closeSidebar();
        return;
      }
    }

    if (modalRoot && modalRoot.innerHTML.trim()) return;

    const target = event.target;
    const typing = target && target.matches && target.matches("input, textarea, select");
    if (typing) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    const key = event.key.toLowerCase();
    if (state.view === "practiceQuiz" && state.practice) {
      const practice = state.practice;
      const question = practice.questions[practice.index];
      if (!question) return;
      const answered = practice.answers[question.id] !== undefined;
      if (!answered && /^[1-4]$/.test(key)) {
        event.preventDefault();
        const option = $('[data-action="answer-practice"][data-index="' + (Number(key) - 1) + '"]');
        if (option) option.click();
        return;
      }
      if (!answered && /^[a-d]$/.test(key)) {
        event.preventDefault();
        const option = $('[data-action="answer-practice"][data-index="' + (key.charCodeAt(0) - 97) + '"]');
        if (option) option.click();
        return;
      }
      if (answered && event.key === "Enter") {
        event.preventDefault();
        const next = $('[data-action="next-practice"]');
        if (next) next.click();
      }
      return;
    }

    if (state.view === "examQuiz" && state.exam) {
      if (/^[1-4]$/.test(key)) {
        event.preventDefault();
        const option = $('[data-action="answer-exam"][data-index="' + (Number(key) - 1) + '"]');
        if (option) option.click();
        return;
      }
      if (/^[a-d]$/.test(key)) {
        event.preventDefault();
        const option = $('[data-action="answer-exam"][data-index="' + (key.charCodeAt(0) - 97) + '"]');
        if (option) option.click();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        const previous = $('[data-action="exam-prev"]');
        if (previous && !previous.disabled) previous.click();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        const next = $('[data-action="exam-next"]');
        if (next && !next.disabled) next.click();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeSidebar();
  });

  window.addEventListener("beforeunload", (event) => {
    if (state.exam) {
      event.preventDefault();
      event.returnValue = "";
    }
  });

  /* ---------------------------------------------------------
     Initialization
     --------------------------------------------------------- */

  applyTheme(store.theme);
  render();
  if (viewEl) viewEl.focus({ preventScroll: true });
})();
