
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Folder, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NotesPage = () => {
  const subjects = ["All Subjects", "Computer Science", "Physics", "Mathematics", "English Literature", "Economics"];

  const recentNotes = [
    { id: 1, title: "Quantum Physics Lecture Notes", subject: "Physics", date: "May 2, 2025", pages: 12 },
    { id: 2, title: "Database Systems and SQL", subject: "Computer Science", date: "April 28, 2025", pages: 18 },
    { id: 3, title: "Calculus II - Integration Techniques", subject: "Mathematics", date: "April 25, 2025", pages: 15 },
    { id: 4, title: "Macroeconomics Policy Analysis", subject: "Economics", date: "April 23, 2025", pages: 10 },
    { id: 5, title: "Shakespeare's Tragedies", subject: "English Literature", date: "April 20, 2025", pages: 22 },
    { id: 6, title: "Neural Networks Introduction", subject: "Computer Science", date: "April 18, 2025", pages: 16 },
  ];

  const folders = [
    { id: 1, name: "Semester Notes", count: 42 },
    { id: 2, name: "Previous Years Papers", count: 24 },
    { id: 3, name: "Reference Material", count: 18 },
    { id: 4, name: "Personal Notes", count: 15 },
  ];

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'Computer Science':
        return 'bg-academy-primary/10 text-academy-primary';
      case 'Physics':
        return 'bg-academy-teal/10 text-academy-teal';
      case 'Mathematics':
        return 'bg-academy-secondary/10 text-academy-secondary';
      case 'English Literature':
        return 'bg-amber-100 text-amber-800';
      case 'Economics':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search notes..." 
              className="pl-8"
            />
          </div>
          <Button>New Note</Button>
        </div>
      </div>

      <Tabs defaultValue="recent" className="mb-6">
        <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="folders">Folders</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="mt-4">
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {subjects.map((subject, index) => (
              <Button 
                key={subject} 
                variant={index === 0 ? "default" : "outline"} 
                className="whitespace-nowrap"
              >
                {subject}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <FileText className="h-5 w-5 text-academy-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold line-clamp-2">{note.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${getSubjectColor(note.subject)}`}>
                          {note.subject}
                        </span>
                        <span className="text-xs text-muted-foreground">{note.pages} pages</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Updated: {note.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="folders" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <Card key={folder.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <Folder className="h-5 w-5 text-academy-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{folder.name}</h3>
                    <p className="text-xs text-muted-foreground">{folder.count} items</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="shared" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No shared notes yet</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="favorites" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No favorite notes yet</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotesPage;
