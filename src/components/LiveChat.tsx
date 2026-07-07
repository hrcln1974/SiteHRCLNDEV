'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiX, HiChatAlt2, HiPaperAirplane } from 'react-icons/hi'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Olá! 👋 Como posso ajudar você hoje?',
      sender: 'bot',
      time: 'Agora',
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const quickReplies = [
    'Quero um orçamento',
    'Ver portfólio',
    'Falar com consultor',
    'Dúvidas sobre preços',
  ]

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: 'Agora',
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    // Simular resposta automática
    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: 'Obrigado pela mensagem! Um de nossos especialistas entrará em contato em breve. 🚀',
        sender: 'bot',
        time: 'Agora',
      }
      setMessages((prev) => [...prev, botReply])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user',
      time: 'Agora',
    }
    setMessages([...messages, newMessage])
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-24 z-50 w-14 h-14 bg-gradient-blue text-white rounded-full flex items-center justify-center shadow-lg glow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Abrir chat"
          >
            <HiChatAlt2 className="text-2xl" />
            
            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              1
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-full max-w-md h-[600px] z-50 flex flex-col glass rounded-2xl border border-primary/30 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Header */}
            <div className="bg-gradient-blue p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="text-white font-space font-bold">
                    Suporte HRCLN DEV
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white/80 text-xs font-inter">
                      Online agora
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Fechar chat"
              >
                <HiX className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'glass-white text-white'
                    }`}
                  >
                    <p className="font-inter text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-white/10">
                <p className="text-gray text-xs font-inter mb-2">
                  Respostas rápidas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <motion.button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 glass-white text-gray hover:text-white rounded-full text-xs font-inter"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-dark/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Enviar"
                >
                  <HiPaperAirplane className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LiveChat