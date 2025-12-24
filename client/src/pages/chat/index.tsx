import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { 
  MessageSquare, 
  Plus, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Send,
  Bot,
  User,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export default function ChatUI() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages]);

  const createNewChat = () => {
    const newChat: Chat = {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [],
      createdAt: new Date(),
    };
    setChats(prev => [newChat, ...prev]);
    setActiveChat(newChat);
    setInputValue("");
    inputRef.current?.focus();
  };

  const deleteChat = (chatId: string) => {
    setChats(prev => prev.filter(c => c.id !== chatId));
    if (activeChat?.id === chatId) {
      setActiveChat(null);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    let currentChat = activeChat;
    
    if (!currentChat) {
      currentChat = {
        id: crypto.randomUUID(),
        title: inputValue.slice(0, 30) + (inputValue.length > 30 ? "..." : ""),
        messages: [],
        createdAt: new Date(),
      };
      setChats(prev => [currentChat!, ...prev]);
      setActiveChat(currentChat);
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    const updatedChat = {
      ...currentChat,
      title: currentChat.messages.length === 0 
        ? inputValue.slice(0, 30) + (inputValue.length > 30 ? "..." : "")
        : currentChat.title,
      messages: [...currentChat.messages, userMessage],
    };

    setActiveChat(updatedChat);
    setChats(prev => prev.map(c => c.id === updatedChat.id ? updatedChat : c));
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Hello! I'm SmartFlow Assistant. I'm here to help you with social media content creation, scheduling, and optimization. How can I assist you today?",
        timestamp: new Date(),
      };

      const finalChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, assistantMessage],
      };

      setActiveChat(finalChat);
      setChats(prev => prev.map(c => c.id === finalChat.id ? finalChat : c));
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen bg-sfs-beige" data-testid="chat-page">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-sfs-black flex flex-col transition-all duration-300 overflow-hidden`}
        data-testid="chat-sidebar"
      >
        <div className="flex flex-col h-full p-3 min-w-64">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2 py-4 mb-2">
            <div className="w-8 h-8 rounded-lg bg-sfs-gold flex items-center justify-center">
              <Bot className="w-5 h-5 text-sfs-black" />
            </div>
            <span className="font-semibold text-sfs-beige text-lg">SmartFlow</span>
          </div>

          {/* New Chat Button */}
          <Button
            onClick={createNewChat}
            className="w-full justify-start gap-2 mb-4 bg-transparent border border-sfs-gold/30 text-sfs-beige hover:bg-sfs-gold/10 hover:border-sfs-gold"
            data-testid="button-new-chat"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </Button>

          {/* Chat History */}
          <ScrollArea className="flex-1 -mx-1 px-1">
            <div className="space-y-1">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    activeChat?.id === chat.id
                      ? "bg-sfs-gold/20 text-sfs-gold"
                      : "text-sfs-beige/70 hover:bg-sfs-brown/30 hover:text-sfs-beige"
                  }`}
                  onClick={() => setActiveChat(chat)}
                  data-testid={`chat-item-${chat.id}`}
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="flex-1 truncate text-sm">{chat.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-opacity"
                    data-testid={`button-delete-chat-${chat.id}`}
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Settings Link */}
          <Link href="/settings/preferences" data-testid="link-settings">
            <div className="flex items-center gap-2 px-3 py-2 mt-2 rounded-lg text-sfs-beige/70 hover:bg-sfs-brown/30 hover:text-sfs-beige cursor-pointer transition-colors">
              <Settings className="w-4 h-4" />
              <span className="text-sm">Settings</span>
            </div>
          </Link>
        </div>
      </aside>

      {/* Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-sfs-brown/80 hover:bg-sfs-brown p-1 rounded-r-md text-sfs-beige/70 hover:text-sfs-gold transition-all"
        style={{ left: sidebarOpen ? "256px" : "0" }}
        data-testid="button-toggle-sidebar"
      >
        {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-sfs-beige" data-testid="chat-main">
        {/* Messages */}
        <ScrollArea className="flex-1">
          <div className="max-w-3xl mx-auto px-4 py-8">
            {!activeChat || activeChat.messages.length === 0 ? (
              /* Empty State */
              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <div className="w-16 h-16 rounded-2xl bg-sfs-gold/20 flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-sfs-gold" />
                </div>
                <h1 className="text-2xl font-semibold text-sfs-black mb-2">
                  SmartFlow Assistant
                </h1>
                <p className="text-sfs-brown/70 max-w-md">
                  Your AI-powered companion for social media content creation, scheduling, and optimization.
                </p>
              </div>
            ) : (
              /* Message List */
              <div className="space-y-6">
                {activeChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    data-testid={`message-${message.id}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-lg bg-sfs-gold flex items-center justify-center shrink-0">
                        <Bot className="w-5 h-5 text-sfs-black" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-sfs-brown text-sfs-beige"
                          : "bg-white text-sfs-black shadow-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-lg bg-sfs-brown flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-sfs-beige" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-4 justify-start">
                    <div className="w-8 h-8 rounded-lg bg-sfs-gold flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5 text-sfs-black" />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-sfs-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-sfs-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-sfs-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-sfs-brown/10 bg-sfs-beige/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="flex items-end gap-3 bg-white rounded-2xl border border-sfs-brown/20 shadow-sm focus-within:ring-2 focus-within:ring-sfs-gold focus-within:border-sfs-gold transition-all">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message SmartFlow..."
                className="flex-1 resize-none bg-transparent px-4 py-3 text-sfs-black placeholder:text-sfs-brown/40 focus:outline-none text-sm min-h-[44px] max-h-32"
                rows={1}
                data-testid="input-message"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="m-1.5 bg-sfs-gold hover:bg-sfs-gold-hover text-sfs-black disabled:opacity-40 disabled:cursor-not-allowed"
                data-testid="button-send"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-sfs-brown/50 text-center mt-2">
              SmartFlow can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
