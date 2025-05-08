
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Send } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your AI academic assistant. How can I help you today? You can ask me about your schedule, course materials, or any academic questions.' 
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = () => {
    if (!query.trim()) return;
    
    // Add user message to chat
    setChatHistory(prev => [...prev, { role: 'user', content: query }]);
    
    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      // Simulating response based on query
      let response = '';
      if (query.toLowerCase().includes('schedule') || query.toLowerCase().includes('lab')) {
        response = "Here's your lab schedule for this week:\n\nMonday: Physics Lab (2:30 PM - 4:30 PM, Lab B)\nWednesday: Chemistry Lab (10:00 AM - 12:00 PM, Lab C)\nFriday: Computer Science Lab (1:00 PM - 3:00 PM, Lab A)";
      } else if (query.toLowerCase().includes('assignment') || query.toLowerCase().includes('due')) {
        response = "Your upcoming assignments:\n\n1. Programming Assignment - Due May 10\n2. Physics Lab Report - Due May 13\n3. Mathematics Problem Set - Due May 15\n\nWould you like me to help you prioritize these?";
      } else if (query.toLowerCase().includes('note') || query.toLowerCase().includes('physics')) {
        response = "I found several notes on Physics in your repository:\n\n1. Quantum Physics (Updated 2 days ago)\n2. Mechanics (Updated last week)\n3. Thermodynamics (Updated April 15)\n\nWhich one would you like to access?";
      } else {
        response = "I understand you're asking about " + query + ". Let me help you with that. What specific information are you looking for?";
      }
      
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
      setQuery('');
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-6rem)] mx-4 sm:mx-6 overflow-hidden">
      <div className="bg-academy-primary text-white p-4 flex items-center gap-3">
        <Search className="h-5 w-5" />
        <h2 className="font-semibold">AI Academic Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user' 
                  ? 'bg-academy-primary text-white' 
                  : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              <p className="whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-slate-100 dark:bg-slate-800">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask any academic question..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!query.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-3">
          <p className="text-xs text-muted-foreground">Suggested: "Show my lab schedule" • "List upcoming assignments" • "Find notes on quantum physics"</p>
        </div>
      </div>
    </Card>
  );
};

export default AIAssistant;
