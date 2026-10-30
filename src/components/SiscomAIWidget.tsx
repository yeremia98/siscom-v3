import React, { useState, useEffect, useRef, useId } from 'react';
import {
  X,
  Send,
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Ticket,
  Copy,
  Check,
  Coins,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';
import {
  getContextForRoute,
  checkGuardrails,
  searchKnowledgeBase,
  SISCOM_KB_ENTRIES,
  FAQItem,
  RouteContextInfo,
} from '../data/siscomKB';

interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  cta?: { label: string; route: string };
  feedback?: 'like' | 'dislike';
  feedbackReason?: string;
  isGuardrailBlocked?: boolean;
}

interface SiscomAIWidgetProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

const TOPIC_CHIPS = ['Fitur', 'Kontraktor', 'HRIS', 'Akuntansi', 'Harga'] as const;

export const SiscomAIWidget: React.FC<SiscomAIWidgetProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coins, setCoins] = useState(5000);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [ticketCreated, setTicketCreated] = useState<string | null>(null);
  const [copiedTranscript, setCopiedTranscript] = useState(false);

  // Active context based on current route
  const { key: activeContextKey, context: activeContext } = getContextForRoute(currentRoute);
  const prevContextKeyRef = useRef(activeContextKey);

  // Initial welcome message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: 'Halo! Saya HiSIS, asisten cerdas resmi SISCOM ERP. Ada yang dapat saya bantu mengenai modul, spesifikasi teknis, atau jadwal demo?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // DOM Refs for accessibility focus trap & auto-scroll
  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on drawer open, return to FAB on close
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    } else {
      fabRef.current?.focus();
    }
  }, [isOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle route change while drawer is open
  useEffect(() => {
    if (prevContextKeyRef.current !== activeContextKey) {
      prevContextKeyRef.current = activeContextKey;
      if (isOpen) {
        setMessages((prev) => [
          ...prev,
          {
            id: `sys-ctx-${Date.now()}`,
            sender: 'system',
            text: `Konteks halaman berubah ke: ${activeContext.name}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    }
  }, [activeContextKey, activeContext.name, isOpen]);

  // Handle User Input Submission
  const handleSendMessage = (textToSend?: string, isFaq = false) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    if (!isFaq && coins <= 0) {
      return; // input disabled if coins 0
    }

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsgId = `user-${Date.now()}`;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp,
      },
    ]);

    if (!textToSend) {
      setInputText('');
    }

    // Guardrail Check happens BEFORE deducting coins and BEFORE KB search
    const guardrail = checkGuardrails(query);
    if (guardrail.blocked) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `asst-${Date.now()}`,
            sender: 'assistant',
            text: guardrail.response || 'Pertanyaan tidak dapat diproses oleh sistem keamanan.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isGuardrailBlocked: true,
          },
        ]);
      }, 400);
      return;
    }

    // Deduct coins only for free-form queries (FAQ is 0 coins)
    if (!isFaq) {
      const coinCost = Math.floor(Math.random() * 11) + 15; // 15-25 coins
      setCoins((c) => Math.max(0, c - coinCost));
    }

    // KB Matching
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const match = searchKnowledgeBase(query);

      if (match) {
        setMessages((prev) => [
          ...prev,
          {
            id: `asst-${Date.now()}`,
            sender: 'assistant',
            text: match.answer,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            cta: match.cta,
          },
        ]);
      } else {
        // Fallback response with option to escalate or contact human advisor
        setMessages((prev) => [
          ...prev,
          {
            id: `asst-${Date.now()}`,
            sender: 'assistant',
            text: `Terima kasih atas pertanyaan Anda mengenai "${query}". Untuk rincian teknis mendalam atau simulasi spesifik alur perusahaan Anda, tim business consultant SISCOM siap mendampingi via live chat atau sesi demo resmi.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            cta: { label: 'Jadwalkan Demo Terpandu', route: '/demo' },
          },
        ]);
      }
    }, 500);
  };

  // Handle FAQ click (0 coins)
  const handleFaqClick = (faq: FAQItem) => {
    handleSendMessage(faq.question, true);
  };

  // Handle Topic Chip click
  const handleTopicClick = (topic: string) => {
    const entry = SISCOM_KB_ENTRIES.find((e) => e.topic === topic);
    if (entry) {
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: `Informasi Modul ${topic}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: `asst-${Date.now() + 1}`,
          sender: 'assistant',
          text: entry.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          cta: entry.cta,
        },
      ]);
    }
  };

  // Feedback thumbs up / down
  const handleFeedback = (msgId: string, type: 'like' | 'dislike') => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === msgId ? { ...msg, feedback: type } : msg))
    );
    if (type === 'dislike') {
      setDislikeCount((c) => c + 1);
    }
  };

  const handleFeedbackReason = (msgId: string, reason: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === msgId ? { ...msg, feedbackReason: reason } : msg))
    );
  };

  // Ticket escalation & transcript copy
  const handleCreateTicket = () => {
    const ticketId = `SIS-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketCreated(ticketId);
    setMenuOpen(false);

    setMessages((prev) => [
      ...prev,
      {
        id: `sys-ticket-${Date.now()}`,
        sender: 'system',
        text: `Tiket eskalasi berhasil dibuat: #${ticketId}. Tim support SISCOM akan segera menindaklanjuti.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleCopyTranscript = () => {
    const transcript = messages
      .map(
        (m) =>
          `[${m.timestamp}] ${m.sender === 'user' ? 'USER' : m.sender === 'assistant' ? 'HiSIS (AI)' : 'SYSTEM'}: ${m.text}`
      )
      .join('\n\n');

    navigator.clipboard.writeText(transcript).then(() => {
      setCopiedTranscript(true);
      setTimeout(() => setCopiedTranscript(false), 2500);
    });
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'msg-welcome-reset',
        sender: 'assistant',
        text: 'Percakapan telah dibersihkan. Silakan tanyakan informasi seputar sistem ERP SISCOM.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setTicketCreated(null);
    setDislikeCount(0);
    setMenuOpen(false);
  };

  const handleRefillCoins = () => {
    setCoins(5000);
    setMenuOpen(false);
  };

  return (
    <>
      {/* 1. Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <button
          ref={fabRef}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="siscom-ai-drawer"
          aria-label="Tanya SISCOM AI Asisten HiSIS"
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#0f3b78] to-[#2f6fd0] text-white font-medium text-sm shadow-[0_10px_25px_-5px_rgba(15,59,120,0.4),0_8px_10px_-6px_rgba(15,59,120,0.2)] hover:shadow-[0_14px_30px_-5px_rgba(15,59,120,0.5),0_10px_12px_-6px_rgba(15,59,120,0.3)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2f6fd0] focus:ring-offset-2"
        >
          {/* Mascot Avatar / Thumbnail */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 shrink-0 border border-white/30 flex items-center justify-center">
            <img
              src="/assets/aistudio/mascot_sis.webp"
              alt="Mascot HiSIS"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to emoji if image asset not ready
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-base select-none">🤖</span>
          </div>

          <span className="font-semibold tracking-wide">Tanya SISCOM AI</span>

          {/* Online badge pulse */}
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* 2. Drawer Panel Slide-over */}
      {isOpen && (
        <div
          id="siscom-ai-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          ref={drawerRef}
          className="fixed inset-y-0 right-0 z-50 w-full sm:w-[390px] max-w-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ease-out motion-reduce:transform-none"
        >
          {/* Header Gradient */}
          <header className="px-4 py-3.5 bg-gradient-to-r from-[#0f3b78] to-[#2f6fd0] text-white shrink-0 shadow-md">
            <div className="flex items-center justify-between">
              {/* Left: Avatar + Title & Context */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-9 h-9 rounded-full bg-white/15 p-0.5 border border-white/30 shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/mascot_sis.webp"
                    alt="HiSIS Avatar"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-sm select-none">🤖</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white" />
                </div>

                <div className="min-w-0">
                  <h2 id={titleId} className="text-sm font-bold tracking-tight truncate flex items-center gap-1.5">
                    HiSIS SISCOM AI
                  </h2>
                  <p className="text-[11px] text-blue-100 truncate flex items-center gap-1 font-medium">
                    <span>Konteks:</span>
                    <span className="bg-white/20 px-1.5 py-0.2 rounded text-[10px] font-semibold">
                      {activeContext.name}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right: Coin Badge + Menu + Close */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Coin Badge */}
                <div
                  title={`Saldo Koin Demo: ${coins.toLocaleString('id-ID')}`}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-semibold text-amber-300"
                >
                  <Coins className="w-3.5 h-3.5 text-amber-300" />
                  <span>{coins.toLocaleString('id-ID')}</span>
                </div>

                {/* Dropdown Menu ⋮ */}
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-expanded={menuOpen}
                    aria-label="Menu opsi asisten"
                    className="p-1.5 rounded-lg hover:bg-white/15 text-white transition-colors"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 mt-1 w-48 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-200 dark:border-slate-700 py-1 text-xs z-50">
                      <button
                        onClick={handleResetChat}
                        className="w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center gap-2"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                        Hapus percakapan
                      </button>
                      <button
                        onClick={handleCreateTicket}
                        className="w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center gap-2"
                      >
                        <Ticket className="w-3.5 h-3.5 text-slate-500" />
                        Hubungi CS / Buat tiket
                      </button>
                      <button
                        onClick={handleRefillCoins}
                        className="w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium"
                      >
                        <Coins className="w-3.5 h-3.5" />
                        Isi ulang koin demo
                      </button>
                      <div className="border-t border-slate-100 dark:border-slate-700 my-1" />
                      <button
                        onClick={handleCopyTranscript}
                        className="w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center gap-2"
                      >
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        {copiedTranscript ? 'Transkrip Disalin!' : 'Salin transkrip'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Close Button ✕ */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup asisten AI"
                  className="p-1.5 rounded-lg hover:bg-white/15 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Coin Depleted Warning Banner */}
          {coins <= 0 && (
            <div className="bg-amber-500/10 border-b border-amber-500/20 px-3 py-2 text-[11px] text-amber-700 dark:text-amber-300 flex items-center justify-between gap-2 shrink-0">
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
                Koin demo habis. Klik tombol FAQ gratis di bawah atau isi ulang koin lewat menu ⋮.
              </span>
              <button
                onClick={handleRefillCoins}
                className="font-bold underline hover:text-amber-800 shrink-0"
              >
                Isi Ulang
              </button>
            </div>
          )}

          {/* Ticket Confirmation Alert if created */}
          {ticketCreated && (
            <div className="bg-blue-50 dark:bg-blue-950/40 border-b border-blue-200 dark:border-blue-800 px-3 py-2 text-[11px] text-blue-900 dark:text-blue-200 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-1.5 truncate">
                <Ticket className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>
                  Tiket: <strong>{ticketCreated}</strong>
                </span>
              </div>
              <button
                onClick={handleCopyTranscript}
                className="text-[10px] bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 rounded flex items-center gap-1 shrink-0 font-medium"
              >
                {copiedTranscript ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copiedTranscript ? 'Tersalin' : 'Salin Chat'}
              </button>
            </div>
          )}

          {/* Quick Topics Ribbon */}
          <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 shrink-0">
            <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Topik Populer:
            </p>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
              {TOPIC_CHIPS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#2f6fd0] hover:text-[#0f3b78] dark:hover:text-[#2f6fd0] transition-colors shrink-0 shadow-xs"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Body (role="log" aria-live="polite") */}
          <div
            role="log"
            aria-live="polite"
            className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed"
          >
            {messages.map((msg) => {
              if (msg.sender === 'system') {
                return (
                  <div key={msg.id} className="text-center my-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      {msg.text}
                    </span>
                  </div>
                );
              }

              const isUser = msg.sender === 'user';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs ${
                      isUser
                        ? 'bg-gradient-to-r from-[#0f3b78] to-[#2f6fd0] text-white rounded-br-xs'
                        : msg.isGuardrailBlocked
                        ? 'bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-900 dark:text-red-200 rounded-bl-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-slate-700/60 rounded-bl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {/* CTA Chip if present */}
                    {msg.cta && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onNavigate(msg.cta!.route);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0f3b78] hover:bg-[#2f6fd0] text-white shadow-xs transition-colors"
                        >
                          <span>{msg.cta.label}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Feedback thumbs for assistant answers */}
                  {!isUser && !msg.isGuardrailBlocked && (
                    <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      <div className="flex items-center gap-1 ml-1">
                        <button
                          onClick={() => handleFeedback(msg.id, 'like')}
                          aria-pressed={msg.feedback === 'like'}
                          aria-label="Jawaban membantu"
                          className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
                            msg.feedback === 'like' ? 'text-emerald-600 font-bold' : ''
                          }`}
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleFeedback(msg.id, 'dislike')}
                          aria-pressed={msg.feedback === 'dislike'}
                          aria-label="Jawaban kurang membantu"
                          className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
                            msg.feedback === 'dislike' ? 'text-rose-600 font-bold' : ''
                          }`}
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Dislike reasons if thumb down selected */}
                  {msg.feedback === 'dislike' && !msg.feedbackReason && (
                    <div className="flex flex-wrap gap-1 mt-1.5 max-w-[85%] bg-slate-50 dark:bg-slate-800/80 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-[10px] text-slate-500 w-full mb-0.5">Alasan:</span>
                      {['Kurang jelas', 'Tidak sesuai kebutuhan', 'Informasi salah'].map((r) => (
                        <button
                          key={r}
                          onClick={() => handleFeedbackReason(msg.id, r)}
                          className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Escalation Prompt after 2+ dislikes */}
            {dislikeCount >= 2 && (
              <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/60 text-slate-800 dark:text-slate-200 space-y-2">
                <p className="text-[11px] font-semibold text-orange-900 dark:text-orange-200">
                  Perlu bantuan langsung dari Business Consultant SISCOM?
                </p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://wa.me/6281299817515?text=Halo%20Tim%20SISCOM%2C%20saya%20ingin%20berkonsultasi%20langsung%20dengan%20senior%20consultant%20mengenai%20kebutuhan%20ERP%20perusahaan."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[11px] transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Live Chat WhatsApp Resmi
                  </a>
                  <button
                    onClick={handleCreateTicket}
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium text-[11px] transition"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    Buat Tiket Dukungan + Transkrip
                  </button>
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1 text-slate-400 text-xs px-2 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] ml-1">HiSIS sedang merespons...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Questions per Context (0 Coins) */}
          <div className="p-3 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Pertanyaan Konteks ({activeContext.name})
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Bebas Koin
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1 max-h-32 overflow-y-auto pr-1">
              {activeContext.faqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleFaqClick(faq)}
                  className="w-full text-left p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-[11px] text-slate-700 dark:text-slate-300 hover:bg-blue-50/60 dark:hover:bg-slate-700 hover:border-[#2f6fd0] transition text-ellipsis truncate"
                  title={faq.question}
                >
                  💬 {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={coins <= 0}
              placeholder={
                coins <= 0
                  ? 'Koin habis. Gunakan FAQ gratis di atas.'
                  : 'Tanyakan solusi ERP (±15-25 koin)...'
              }
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2f6fd0] disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={coins <= 0 || !inputText.trim() || isTyping}
              aria-label="Kirim pertanyaan ke HiSIS"
              className="p-2 rounded-xl bg-gradient-to-r from-[#0f3b78] to-[#2f6fd0] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 transition shadow-xs shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
