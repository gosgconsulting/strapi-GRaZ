import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
interface WhatsAppChatProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
}
const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  isOpen,
  onClose,
  phoneNumber = "6598372670"
}) => {
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      onClose();
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  if (!isOpen) return null;
  return <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-t-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Have a question?</h3>
            <p className="text-sm">Chat with us!</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Body */}
      <div className="p-4 bg-gray-50 min-h-[200px]">
        <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
          <p className="text-gray-700 text-sm">How can we help you? :)</p>
          <span className="text-xs text-gray-400">10:59</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <div className="flex-1 relative">
            <Textarea value={message} onChange={e => setMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Write your message..." className="min-h-[40px] max-h-[120px] resize-none border-gray-300 rounded-full px-4 py-2 pr-10" rows={1} />
          </div>
          <Button onClick={handleSendMessage} disabled={!message.trim()} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 h-10 w-10 flex items-center justify-center">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>;
};
export default WhatsAppChat;
